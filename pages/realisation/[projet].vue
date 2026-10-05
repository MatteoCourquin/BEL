<template>
  <div v-if="computedProject">
    <Head>
      <Title>{{ computedProject.title }} • BEL Bureau d'Études Legavre</Title>
      <Meta name="title" :content="`${computedProject.title} • BEL Bureau d'Études Legavre`" />
      <Meta name="description" :content="`${computedProject.title} de BEL Bureau d'Études Legavre`" />
      <Meta name="robots" content="noindex" />
    </Head>
    <!-- Cas 1 : Le projet a une vidéo -> Grand cadre vidéo centré sous le titre -->
    <div v-if="computedProject.video" class="max-w-default mx-auto px-x-default py-y-default">
      <div>
        <p class="!text-gold pb-2 md:pb-4 !text-sm lowercase font-michroma">#{{ computedProject.tags }}</p>
        <p class="pb-4 lg:pb-6 text-xs">{{ formatDate(computedProject.date) }}</p>
        <h3 class="pb-8 md:pb-12 uppercase">{{ computedProject.title }}</h3>
      </div>
      <div class="w-full rounded-small overflow-hidden mb-12 shadow-md aspect-video bg-black flex items-center justify-center">
        <video
          ref="videoEl"
          class="w-full h-full object-cover rounded-small"
          controls
          loop
          muted
          playsinline
          preload="none"
          :poster="computedProject.photos && computedProject.photos.length ? 'https:' + computedProject.photos[0] + '?w=1400&fm=webp&q=80' : undefined"
        ></video>
      </div>
    </div>

    <!-- Cas 2 : Le projet n'a PAS de vidéo -> Conserver le design original (texte descriptif + 2 visuels) -->
    <div
      v-else
      class="md:h-screen-header py-y-default flex flex-col md:flex-row gap-10 overflow-hidden pr-x-default md:px-0 ml-hero-project">
      <div class="md:w-1/2 overflow-y-scroll no-scrollbar">
        <p class="!text-gold pb-2 md:pb-4 !text-sm lowercase font-michroma">#{{ computedProject.tags }}</p>
        <p class="pb-4 lg:pb-6 text-xs">{{ formatDate(computedProject.date) }}</p>
        <h3 class="pb-10">{{ computedProject.title }}</h3>
        <p v-html="computedProject.description"></p>
      </div>
      <div class="flex-col h-full w-1/2 justify-center md:flex hidden">
        <div class="border-image translate-x-4 h-2/5 pb-5">
          <img :src="'https:' + computedProject.photos[1]" :alt="'photos du projet ' + computedProject.title"
            class="rounded-small w-full h-full object-cover" />
        </div>
        <div class="h-2/5 pt-5 relative">
          <img class="object-cover w-full h-full translate-x-4 rounded-small" :src="'https:' + computedProject.photos[0]"
            :alt="'photos du projet ' + computedProject.title">
          <Circle orientation="bottom" @click="scroll"
            className="cursor-pointer bottom-1 left-1 -translate-x-9 translate-y-1/2" variant="photos"></Circle>
        </div>
      </div>
    </div>
    <div
      :class="['fixed w-screen h-screen top-0 left-0 transition-all z-[210]', isImageOpen ? 'visible opacity-100' : 'invisible opacity-0']">
      <div @click="isImageOpen = false"
        :class="['absolute w-full h-full layer-image transition-all', isImageOpen ? 'visible opacity-100' : 'invisible opacity-0']">
      </div>
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
    <Section variant="heading3" title="Le projet en images">
      <div class="max-w-default mx-auto px-x-default">
        <div class="flex flex-wrap gap-4 gallery">
          <div v-for="(photo, index) in computedProject.photos" :key="index" class="list-none grow h-64">
            <img @click="openImage(photo)" :src="photo" :alt="'photos du projet' + computedProject.title"
              class="rounded-small w-full h-full object-cover hover:scale-[1.02] cursor-pointer transition-all">
          </div>
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
      videoObserver: null,
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
    setupVideoObserver() {
      const video = this.$refs.videoEl;
      if (!video) return;

      this.videoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.src = 'https:' + this.computedProject.video;
            video.load();
            video.play().catch(() => {});
            this.videoObserver.disconnect();
          }
        });
      }, { rootMargin: '200px' });

      this.videoObserver.observe(video);
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
        if (newProject?.video) {
          this.$nextTick(() => {
            this.setupVideoObserver();
          });
        }
      },
    },
  },
  beforeUnmount() {
    if (this.videoObserver) {
      this.videoObserver.disconnect();
    }
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