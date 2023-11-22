<template>
  <div v-if="project" class="">
    <!-- <div class="h-screen-header pl-x-default py-y-default grid grid-cols-2 grid-rows-[100%] gap-10"> -->
    <div class="h-screen-header py-y-default flex gap-10 overflow-hidden ml-hero-project">
      <div class="w-1/2 overflow-y-scroll no-scrollbar">
        <p class="!text-gold pb-2 md:pb-4">#{{ project.tags }}</p>
        <h3 class="pb-10">{{ project.title }}</h3>
        <p v-html="project.description"></p>
      </div>
      <div class="flex flex-col h-full w-1/2 justify-center">
        <div class="border-image translate-x-4 h-2/5 pb-5">
          <img :src="'https:' + project.photos[0]" :alt="'photos du projet' + project.title"
            class="rounded-small w-full h-full object-cover" />
        </div>
        <div class="h-2/5 pt-5">
          <img class="object-cover w-full h-full translate-x-4 rounded-small" :src="'https:' + project.photos[1]"
            :alt="'photos du projet' + project.title">
        </div>
      </div>
    </div>
    <div @click="isImageOpen = false"
      :class="['fixed w-screen h-screen top-0 left-0 layer-image transition-opacity z-[210]', isImageOpen ? 'visible opacity-100' : 'invisible opacity-0']">
      <img
        :class="['rounded-small max-w-[90%] max-h-[90%] top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 transition-all', isImageOpen ? 'scale-100' : 'scale-0']"
        :src="urlImage" alt="">
    </div>
    <Section variant="heading3" title="Le projet en image">
      <div class="max-w-default mx-auto px-x-default flex flex-wrap gap-4 gallery">
        <div v-for="(photo, index) in project.photos" :key="index" class="list-none grow h-64">
          <img @click="onpenImage(photo)" :src="photo" :alt="'photos du projet' + project.title"
            class="rounded-small w-full h-full object-cover hover:scale-[1.02] cursor-pointer transition-all">
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup>
const route = useRoute();
const project = useProjects().value.find((project) => formatSlug(project.title) === formatSlug(route.params.projet));
</script>
<script>
export default {
  name: 'Project',
  data() {
    return {
      isImageOpen: false,
      urlImage: '',
    };
  },
  methods: {
    onpenImage(urlImage) {
      this.isImageOpen = true;
      this.urlImage = urlImage;
    },
  }
}
</script>

<style scoped lang='scss'>
@import "@/scss/main.scss";

.layer-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.gallery::after {
  content: '';
  display: block;
  flex-grow: 10;
}

.ml-hero-project {
  &:first-of-type {
    margin-left: calc(((100vw - $max-width) / 2) + $padding-x-default);
  }

  @media screen and (max-width: $max-width) {
    &:first-of-type {
      margin-left: $padding-x-default;
    }
  }
}

.border-image {

  &::after {
    content: "";
    position: absolute;
    border: 1px solid $color-gold;
    border-radius: $radius-small;
    z-index: -1;
  }

  &::after {
    top: -16px;
    left: -16px;
    width: 70%;
    height: 30%;
    border-top-left-radius: $radius-medium;
  }
}
</style>