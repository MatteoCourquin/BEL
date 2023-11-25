<template>
  <div>
    <div
      class="md:h-screen-header py-y-default flex flex-col md:flex-row gap-10 overflow-hidden pr-x-default md:px-0 ml-hero-project">
      <div class="md:w-1/2 overflow-y-scroll no-scrollbar">
        <p class="!text-gold pb-2 md:pb-4">#{{ computedProject.tags }}</p>
        <h3 class="pb-10">{{ computedProject.title }}</h3>
        <p v-html="computedProject.description"></p>
      </div>
      <div class="flex-col h-full w-1/2 justify-center md:flex hidden">
        <div class="border-image translate-x-4 h-2/5 pb-5">
          <img :src="'https:' + computedProject.photos[0]" :alt="'photos du projet' + computedProject.title"
            class="rounded-small w-full h-full object-cover" />
        </div>
        <div class="h-2/5 pt-5 relative">
          <img class="object-cover w-full h-full translate-x-4 rounded-small" :src="'https:' + computedProject.photos[1]"
            :alt="'photos du projet' + computedProject.title">
          <Circle orientation="bottom" @click="scroll" className="cursor-pointer bottom-1 left-1 -translate-x-9 translate-y-1/2" variant="photos"></Circle>
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
        <div v-for="(photo, index) in computedProject.photos" :key="index" class="list-none grow h-64">
          <img @click="onpenImage(photo)" :src="photo" :alt="'photos du projet' + computedProject.title"
            class="rounded-small w-full h-full object-cover hover:scale-[1.02] cursor-pointer transition-all">
        </div>
      </div>
    </Section>
  </div>
</template>

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

  },
  computed: {
    computedProject() {
      return useProjects().value.find((project) => formatSlug(project.title) === formatSlug(useRoute().params.projet))
    }
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