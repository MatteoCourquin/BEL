<template>
  <section
    class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 max-w-default px-0 lg:px-x-default py-y-default mx-auto min-h-screen-header lg:min-h-fit lg:h-screen-header">
    <div
      class="flex justify-center items-center pb-10 lg:pb-0 lg:col-start-2 lg:col-end-3 lg:row-end-2 overflow-hidden lg:overflow-visible px-0 lg:px-x-default">
      <Swiper class="w-7/12 md:w-9/12 lg:w-[90%] h-fit flex justify-center items-center"
        :modules="[SwiperAutoplay, SwiperEffectCards]" :slides-per-view="1" :loop="false" :effect="'cards'"
        @slideChange="onSlideChange">
        <SwiperSlide v-for="(article, index) in computedArticles" :key="index"
          class="w-full h-[50vh] rounded-small shadow-lg">
          <img class="rounded-small w-full h-[50vh] object-cover" :src="'https:' + article.photo"
            :alt="'Illustration de l\'article ' + article.title">
        </SwiperSlide>
        <div class="relative h-16">
          <SwiperControls :currentArticle="currentArticle" />
        </div>
      </Swiper>
    </div>
    <div v-if="computedArticles.length != 0"
      class="flex flex-col relative lg:col-start-1 lg:col-end-2 lg:row-end-2 px-x-default lg:px-0">
      <p v-if="computedArticles[currentArticle].subtitle" class="pb-2 lg:pb-4 font-michroma">{{
        computedArticles[currentArticle].subtitle }}</p>
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
    };
  },
  methods: {
    onSlideChange(swiper) {
      this.currentArticle = swiper.activeIndex;
    },
  },
  mounted() {
    this.currentArticle = 0
  },
  computed: {
    computedArticles() {
      return useArticles().value
    }
  }
};
</script>

<style lang="scss" scoped></style>