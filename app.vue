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
const createHyperlink = (url, text) => `<a target="_blank" href="${url}">${text}</a>`;
const wrapInParagraph = (content) => `<p class="pb-4">${content.join('')}</p>`;

const fetchData = async ($client) => {
  try {
    const { data } = await useAsyncData('projects', () => $client.getEntries({content_type: 'projets'}));

    const sortedData = data._rawValue.items.sort((a, b) => {
      const dateA = new Date(a.fields.date);
      const dateB = new Date(b.fields.date);
      return dateB - dateA;
    });

    const formattedData = sortedData.map((item) => ({
      title: item.fields.name,
      date: item.fields.date,
      tags: item.fields.tags,
      shortdescription: formatShortDescription(item.fields.description.content),
      description: formatDescription(item.fields.description.content),
      photos: item.fields.photos.map((photo) => photo.fields.file.url).flat()
    }));

    return formattedData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

fetchData($client).then((data) => {
  useProjects().value = data;
});
</script>