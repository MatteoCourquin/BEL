<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import '@/scss/main.scss';
</style>

<script setup>
const { $client } = useNuxtApp();

const formatDescription = (contentfulData) => {
  const formattedParagraphs = contentfulData.map((entry) => {
    const paragraphs = entry.content.map((paragraph) => {
      if (!isHyperlinkNode(paragraph)) {
        return isTextNode(paragraph) ? paragraph.value : '';
      }
      const linkText = extractTextContent(paragraph);
      const linkUrl = paragraph.data.uri;
      return createHyperlink(linkUrl, linkText);
    });
    const nonEmptyParagraphs = paragraphs.filter(Boolean);
    const formattedEntry = wrapInParagraph(nonEmptyParagraphs);
    return formattedEntry;
  });

  return formattedParagraphs.join('');
};

const formatShortDescription = (contentfulData) => {
  const formattedParagraphs = contentfulData.map((entry) => {
    const paragraphs = entry.content.map((paragraph) => {
      if (!isHyperlinkNode(paragraph)) {
        return paragraph.value;
      }
      return paragraph.content[0].value
    });
    const nonEmptyParagraphs = paragraphs.filter(Boolean);
    const formattedEntry = nonEmptyParagraphs.join('');
    return formattedEntry;
  });
  return formattedParagraphs.join(' ');
};


const isTextNode = (node) => node.nodeType === 'text';
const isHyperlinkNode = (node) => node.nodeType === 'hyperlink' && node.data && node.data.uri;
const extractTextContent = (node) => node.content.map((content) => content.value).join('');
const createHyperlink = (url, text) => `<a class="link" target="_blank" href="${url}">${text}</a>`;
const wrapInParagraph = (content) => `<p class="pb-4">${content.join('')}</p>`;

const fetchProjects = async ($client) => {
  try {
    const { data: projects } = await useAsyncData('projects', () => $client.getEntries({
      content_type: "projets",
      order: "-fields.date"
    }));

    const formattedData = projects._rawValue.items.map((item) => ({
      title: item.fields.name,
      date: item.fields.date,
      tags: item.fields.tags,
      shortdescription: formatShortDescription(item.fields.description.content),
      description: formatDescription(item.fields.description.content),
      photos: item.fields.photos.map((photo) => photo.fields.file.url).flat(),
      video: item.fields.video ? item.fields.video.fields.file.url : undefined
    }));

    return formattedData;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

fetchProjects($client).then((projects) => {
  useProjects().value = projects;
});

const fetchArticles = async ($client) => {
  try {
    const { data: articles } = await useAsyncData('articles', () => $client.getEntries({
      content_type: "articles",
      order: "-fields.date"
    }));

    const formattedData = articles._rawValue.items.map((item) => ({
      title: item.fields.title,
      subtitle: item.fields.subtitle,
      content: formatDescription(item.fields.content.content),
      date: item.fields.date,
      photo: item.fields.photo.fields.file.url
    }));

    return formattedData;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

fetchArticles($client).then((articles) => {
  useArticles().value = articles;
});
</script>