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
    <NuxtImg src='/images/architect.jpg' alt='Background Hero' preload sizes='xs:500 sm:800 md:1000 lg:2000 xl:2300' />
    <Nuxt-Link class="block" v-for="(project, index) in projects" :key="index" :to="'projects/' + project.title.replace(/\s+/g, '-').toLowerCase()">{{ project.title }}</Nuxt-Link>
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