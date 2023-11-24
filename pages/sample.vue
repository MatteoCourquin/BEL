<template>
  <div>
    <hr>
    <h1>Spacing</h1>
    <h4>Titre</h4>
    <p>p-10</p>
    <h4>Sous titre</h4>
    <p>p-2 md:p-4</p>
    <hr>
    <h1>heading1</h1>
    <h2>heading2</h2>
    <h3>headin3</h3>
    <h4>heading4</h4>
    <p class="font-michroma">text michroma</p>
    <p>text normal</p>
    <hr>
    <div class="w-20 h-20 inline-block border bg-black"></div>
    <div class="w-20 h-20 inline-block border bg-white"></div>
    <div class="w-20 h-20 inline-block border bg-gold"></div>
    <hr>
    <img src='/images/architect.jpg' alt='Background Hero' />
    <a class="block" v-for="(project, index) in projects" :key="index" :href="'/projet/' + formatSlug(project.title)">{{
      project.title }}</a>
    <hr>
    <Section title="Test">
      <!-- Mon contenu -->
      <p class="bg-gold">test</p>
      <p class="bg-gold">test</p>
      <p class="bg-gold">test</p>
      <p class="bg-gold">test</p>
      <p class="bg-gold">test</p>
      <p class="bg-gold">test</p>
      <p class="bg-gold">test</p>
      <p class="bg-gold">test</p>
      <p class="bg-gold">test</p>
    </Section>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Sample',
  data() {
    return {};
  },
  methods: {},
  computed: {
    computedProjects() {
      return useProjects().value
    }
  }
}
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';
</style>