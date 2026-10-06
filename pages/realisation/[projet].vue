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
          playsinline
          preload="auto"
          :muted="!isDesktop"
          :src="'https:' + computedProject.video"
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
    <ProjectLightbox
      v-model="isImageOpen"
      v-model:index="activeImageIndex"
      :images="galleryImages"
    />
    <Section variant="heading3" title="Le projet en images">
      <div class="max-w-default mx-auto px-x-default">
        <div class="flex flex-wrap gap-4 gallery">
          <div v-for="(photo, index) in computedProject.photos" :key="index" class="list-none grow h-64">
            <img
              @click="openImage(index)"
              :src="'https:' + photo"
              :alt="'photos du projet ' + computedProject.title"
              class="rounded-small w-full h-full object-cover hover:scale-[1.02] cursor-pointer transition-all"
            >
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
      activeImageIndex: 0,
      galleryImages: [],
      videoObserver: null,
      isDesktop: false,
    };
  },
  methods: {
    openImage(index) {
      this.activeImageIndex = index;
      this.isImageOpen = true;
    },
    updateDesktopFlag() {
      this.isDesktop = window.matchMedia('(min-width: 768px)').matches;
    },
    async playVideo(video) {
      video.muted = !this.isDesktop;
      try {
        await video.play();
      } catch {
        // Browsers often block unmuted autoplay: fall back to muted so playback still starts.
        if (!video.muted) {
          video.muted = true;
          try {
            await video.play();
          } catch {
            // Ignore: user can still use native controls.
          }
        }
      }
    },
    setupVideoObserver() {
      const video = this.$refs.videoEl;
      if (!video || !this.computedProject?.video) return;

      this.videoObserver?.disconnect();
      this.videoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.playVideo(video);
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
  mounted() {
    this.updateDesktopFlag();
    window.addEventListener('resize', this.updateDesktopFlag);
    this.setupVideoObserver();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateDesktopFlag);
    if (this.videoObserver) {
      this.videoObserver.disconnect();
    }
  },
};
</script>

<style scoped lang='scss'>
@import "@/scss/main.scss";

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