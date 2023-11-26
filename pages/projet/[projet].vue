<template>
  <div v-if="computedProject">
    <Head>
      <Title>{{ computedProject.title }} • BEL Bureau d'Études Legavre</Title>
      <Meta name="title" :content="`${computedProject.title} • BEL Bureau d'Études Legavre`" />
      <Meta name="description" :content="`${computedProject.title} de BEL Bureau d'Études Legavre`" />
      <Meta name="robots" content="noindex" />
    </Head>
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
          <Circle orientation="bottom" @click="scroll"
            className="cursor-pointer bottom-1 left-1 -translate-x-9 translate-y-1/2" variant="photos"></Circle>
        </div>
      </div>
    </div>
    <div
      :class="['fixed w-screen h-screen top-0 left-0 transition-all z-[210]', isImageOpen ? 'visible opacity-100' : 'invisible opacity-0']">
      <div @click="isImageOpen = false"
        :class="['absolute w-full h-full layer-image transition-all', isImageOpen ? 'visible opacity-100' : 'invisible opacity-0']"></div>
      <div
        :class="['controls-slider overflow-hidden rounded-small max-h-fit max-w-fit absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-transform', isImageOpen ? 'scale-100' : 'scale-0']">
        <div @click="previousImage()"
          class="z-10 absolute top-0 left-0 h-full w-20 backdrop-filter bg-transparent hover:bg-[#ffffff6c] transition-colors cursor-pointer flex justify-center items-center">
          <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-90">
            <path stroke="black" d="M12.7335 1.70813L7.20209 7.2396L1.67065 1.70813" stroke-width="1.77796"
              stroke-linecap="square" />
          </svg>
        </div>
        <img class="max-w-[90vw] max-h-[90vh]" :src="urlImage" alt="">
        <div @click="nextImage()"
          class="z-10 absolute top-0 right-0 h-full w-20 backdrop-filter bg-transparent hover:bg-[#ffffff6c] transition-colors cursor-pointer flex justify-center items-center">
          <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="-rotate-90">
            <path stroke="black" d="M12.7335 1.70813L7.20209 7.2396L1.67065 1.70813" stroke-width="1.77796"
              stroke-linecap="square" />
          </svg>
        </div>
      </div>
    </div>
    <Section variant="heading3" title="Le projet en image">
      <div class="max-w-default mx-auto px-x-default flex flex-wrap gap-4 gallery">
        <div v-for="(photo, index) in computedProject.photos" :key="index" class="list-none grow h-64">
          <img @click="openImage(photo)" :src="photo" :alt="'photos du projet' + computedProject.title"
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
      galleryImages: [],
    };
  },
  methods: {
    nextImage() {
      const currentIndex = this.galleryImages.findIndex((url) => url === this.urlImage);
      const nextIndex = (currentIndex + 1) % this.galleryImages.length;
      this.urlImage = this.galleryImages[nextIndex];
    },
    previousImage() {
      const currentIndex = this.galleryImages.findIndex((url) => url === this.urlImage);
      const previousIndex = (currentIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
      this.urlImage = this.galleryImages[previousIndex];
    },
    openImage(urlImage) {
      this.isImageOpen = true;
      this.urlImage = urlImage;
    },
  },
  computed: {
    computedProject() {
      return useProjects().value.find((project) => formatSlug(project.title) === formatSlug(useRoute().params.projet))
    },
  },
  watch: {
    computedProject: {
      immediate: true,
      handler(newProject) {
        this.galleryImages = newProject ? newProject.photos : [];
      },
    },
  },
};
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
  backdrop-filter: blur(4px);
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