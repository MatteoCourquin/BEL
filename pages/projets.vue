<template>
  <div>
    <p v-for="(paragraph, index) in formattedData" :key="index" v-html="paragraph"></p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      contentfulData: useProjects().value,
      formattedData: {
        description: '',
      }
    };
  },
  mounted() {
    this.formatContentfulData();
    console.log(this.formattedData);
  },
  methods: {
    formatContentfulData() {
      this.contentfulData.forEach((item) => {
        item.description.map((paragraph) => {
          const paragraphs = paragraph.content.map((content) => {
            if (content.nodeType === 'text') {
              return content.value;
            } else if (content.nodeType === 'hyperlink' && content.data && content.data.uri) {
              return `<a target="_blank" href="${content.data.uri}">${content.content[0].value}</a>`;
            }
          });
          const formattedParagraph = '<p class="pb-4">' + paragraphs.join('') + '</p>';
          this.formattedData.description = this.formattedData.description + formattedParagraph;
        });
      });
    },
  },
};
</script>