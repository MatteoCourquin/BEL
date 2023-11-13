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

const formatContentfulData = (contentfulData) => {
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

const isTextNode = (node) => node.nodeType === 'text';
const isHyperlinkNode = (node) => node.nodeType === 'hyperlink' && node.data && node.data.uri;
const extractTextContent = (node) => node.content.map((content) => content.value).join('');
const createHyperlink = (url, text) => `<a target="_blank" href="${url}">${text}</a>`;
const wrapInParagraph = (content) => `<p class="pb-4">${content.join('')}</p>`;

const fetchData = async ($client) => {
  try {
    const { data } = await useAsyncData('projects', () => $client.getEntries())

    return data._rawValue.items.map((item) => ({
      title: item.fields.nom,
      tags: item.fields.tags,
      description: item.fields.description.content,
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const projects = useProjects();

fetchData($client).then((data) => {
  projects.value = data;
});
</script>