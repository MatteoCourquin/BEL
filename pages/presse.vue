<template>
  <Head>
    <Title>Presse • BEL Bureau d'Études Legavre</Title>
    <Meta name="title" content="Presse • BEL Bureau d'Études Legavre" />
    <Meta name="description" content="Liste des articles de presse à propos des différentes réalisations BE-Legavre." />
    <Meta name="robots" content="index" />
    <Link rel="canonical" href="https://www.be-legavre.com/presse" />
  </Head>
  <section
    class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 max-w-default px-0 lg:px-x-default py-y-default mx-auto min-h-screen-header lg:min-h-fit lg:h-screen-header">
    <div
      class="flex justify-center items-center pb-10 lg:pb-0 lg:col-start-2 lg:col-end-3 lg:row-end-2 overflow-hidden lg:overflow-visible px-0 lg:px-x-default">
      <Swiper class="w-7/12 md:w-9/12 lg:w-[90%] h-fit flex justify-center items-center"
        :modules="[SwiperAutoplay, SwiperEffectCards]" :slides-per-view="1" :loop="false" :effect="'cards'"
        @slideChange="onSlideChange">
        <SwiperSlide v-for="(article, index) in computedArticles" :key="index"
          class="w-full h-fit rounded-small shadow-lg cursor-pointer">
          <img class="rounded-small w-full h-[50vh] max-h-96 object-cover" :src="'https:' + article.photo"
            @click="openImage(article.photo)" :alt="'Illustration de l\'article ' + article.title">
        </SwiperSlide>
        <div class="relative h-16">
          <SwiperControls :currentArticle="currentArticle" />
        </div>
      </Swiper>
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
          <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="rotate-90">
            <path stroke="black" d="M12.7335 1.70813L7.20209 7.2396L1.67065 1.70813" stroke-width="1.77796"
              stroke-linecap="square" />
          </svg>
        </div>
        <img class="max-w-[90vw] max-h-[90vh]" :src="urlImage" alt="">
        <div @click="nextImage(currentArticle)"
          class="z-10 absolute top-0 right-0 h-full w-20 backdrop-filter bg-transparent hover:bg-[#ffffff6c] transition-colors cursor-pointer flex justify-center items-center">
          <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="-rotate-90">
            <path stroke="black" d="M12.7335 1.70813L7.20209 7.2396L1.67065 1.70813" stroke-width="1.77796"
              stroke-linecap="square" />
          </svg>
        </div>
      </div>
    </div>

    <div v-if="computedArticles.length != 0"
      class="flex flex-col relative lg:col-start-1 lg:col-end-2 lg:row-end-2 px-x-default lg:px-0">
      <p class="pb-2 font-michroma">{{ computedArticles[currentArticle].subtitle }}</p>
      <p class="pb-4 lg:pb-6 text-xs">{{ formatDate(computedArticles[currentArticle].date) }}</p>
      <h3 class="pb-10">{{ computedArticles[currentArticle].title }}</h3>
      <div class="overflow-y-scroll article-description" v-html="computedArticles[currentArticle].content"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Presse",
  data() {
    return {
      currentArticle: undefined,
      isImageOpen: false,
      urlImage: '',
      galleryImages: [],
    };
  },
  methods: {
    onSlideChange(swiper) {
      this.currentArticle = swiper.activeIndex;
    },
    nextImage() {
      const currentIndex = this.galleryImages.findIndex((url) => url === this.urlImage);
      const nextIndex = (currentIndex + 1) % this.galleryImages.length;
      this.urlImage = this.galleryImages[nextIndex]
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
  created() {
    this.currentArticle = 0
  },
  computed: {
    computedArticles() {
      return useArticles().value
    }
  },
  watch: {
    computedArticles: {
      immediate: true,
      handler(newProject) {
        this.galleryImages = newProject ? newProject.map((project) => project.photo)  : [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>