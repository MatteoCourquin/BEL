<template>
  <div>
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
    <Nuxt-Link class="block" v-for="(project, index) in projects" :key="index"
      :to="'projects/' + project.title.replace(/\s+/g, '-').toLowerCase()">{{ project.title }}</Nuxt-Link>
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
    <p>{{ projects }}</p>
    <hr>
  </div>
</template>

<script setup>
const projects = useProjects();
</script>
<script>
export default {
  name: 'Sample',
  data() {
    return {};
  },
  methods: {}
}
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';
</style>