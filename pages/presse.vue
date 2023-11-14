<template>
  <section
    class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 max-w-default px-0 lg:px-x-default py-y-default mx-auto min-h-screen-header lg:min-h-fit lg:h-screen-header">
    <div
      class="flex justify-center items-center pb-10 lg:pb-0 lg:col-start-2 lg:col-end-3 lg:row-end-2 overflow-hidden lg:overflow-visible px-0 lg:px-x-default">
      <Swiper class="w-7/12 md:w-9/12 lg:w-[90%] h-fit flex justify-center items-center"
        :modules="[SwiperAutoplay, SwiperEffectCards]" :slides-per-view="1" :loop="false" :effect="'cards'"
        @slideChange="onSlideChange">
        <SwiperSlide v-for="(article, index) in articles" :key="index" class="w-full h-[50vh] rounded-small shadow-lg">
          <img class="rounded-small w-full h-[50vh] object-cover" :src="`/images/presse/${article.image}`"
            :alt="'Illustration de l\'article ' + article.title">
        </SwiperSlide>
        <div class="relative h-16">
          <SwiperControls :currentArticle="currentArticle" />
        </div>
      </Swiper>
    </div>
    <div class="flex flex-col relative lg:col-start-1	lg:col-end-2 lg:row-end-2 px-x-default lg:px-0">
      <p class="pb-2 lg:pb-4 font-michroma">{{ articles[currentArticle].subtitle }}</p>
      <h3 class="pb-10">{{ articles[currentArticle].title }}</h3>
      <div class="overflow-y-scroll article-description" v-html="articles[currentArticle].content"></div>
    </div>
  </section>
</template>

<script setup>
const articles = [
  {
    title: "New York Times 1",
    subtitle: "Bureau d’études legavre",
    image: "presse1.png",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae convallis sapien.</p>
      <br>
      <p>Eeu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. eu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. Nullam vehicula odio id augue faucibus, a tincidunt leo suscipit. Phasellus fermentum diam quis leo efficitur, in sagittis nunc interdum. Eeu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. eu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. Nullam vehicula odio id augue faucibus, a tincidunt leo suscipit. Phasellus fermentum diam quis leo efficitur, in sagittis nunc interdum.</p>
      <br>
      <p>Eeu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. eu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. Nullam vehicula odio id augue faucibus, a tincidunt leo suscipit. Phasellus fermentum diam quis leo efficitur, in sagittis nunc interdum. Eeu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. eu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. Nullam vehicula odio id augue faucibus, a tincidunt leo suscipit. Phasellus fermentum diam quis leo efficitur, in sagittis nunc interdum. Eeu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. eu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. Nullam vehicula odio id augue faucibus, a tincidunt leo suscipit. Phasellus fermentum diam quis leo efficitur, in sagittis nunc interdum. Eeu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. eu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. Nullam vehicula odio id augue faucibus, a tincidunt leo suscipit. Phasellus fermentum diam quis leo efficitur, in sagittis nunc interdum. Eeu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. eu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. Nullam vehicula odio id augue faucibus, a tincidunt leo suscipit. Phasellus fermentum diam quis leo efficitur, in sagittis nunc interdum. Eeu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. eu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. Nullam vehicula odio id augue faucibus, a tincidunt leo suscipit. Phasellus fermentum diam quis leo efficitur, in sagittis nunc interdum. Eeu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. eu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere. Nullam vehicula odio id augue faucibus, a tincidunt leo suscipit. Phasellus fermentum diam quis leo efficitur, in sagittis nunc interdum. Cras vestibulum nisl et ex venenatis, eu suscipit neque scelerisque. Nulla facilisi. Etiam quis velit id mauris feugiat posuere.</p>
    `,
  },
  {
    title: "New York Times 2",
    subtitle: "Bureau d’études legavre",
    image: "presse2.png",
    content: `
      <p>Integer tristique orci at libero scelerisque, nec semper purus congue.</p>
      <br>
      <p>Aenean tincidunt justo nec justo ultricies, sit amet tincidunt orci fringilla. Ut commodo, ligula nec blandit eleifend, sem purus bibendum libero, ac bibendum elit velit et turpis.Ut commodo, ligula nec blandit eleifend, sem purus bibendum libero, ac bibendum elit velit et turpis.</p>
      <br>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    `,
  },
  {
    title: "New York Times 3",
    subtitle: "Bureau d’études legavre",
    image: "presse3.png",
    content: `
      <p>Curabitur efficitur nunc id ligula ultrices, eget rhoncus mi ultricies.</p>
      <br>
      <p>Nunc sed arcu nec odio hendrerit luctus. Integer vel eros nec sapien ullamcorper iaculis a sit amet libero. Aliquam erat volutpat. In hac habitasse platea dictumst. Duis interdum tortor in elit ultrices volutpat. LoreUt commodo, ligula nec blandit eleifend, sem purus bibendum libero, ac bibendum elit velit et turpis.</p>
      <br>
      <p>Aliquam erat volutpat. In hac habitasse platea dictumst. Duis interdum tortor in elit ultrices volutpat.</p>
    `,
  },
  {
    title: "New York Times 4",
    subtitle: "Bureau d’études legavre",
    image: "presse4.png",
    content: `
      <p>Suspendisse consectetur nisl vitae nibh dapibus, in euismod arcu fringilla.</p>
      <br>
      <p>Maecenas euismod augue ut congue viverra. Ut commodo, ligula nec blandit eleifend, sem purus bibendum libero, ac bibendum elit velit et turpis. Fusce vehicula neque vitae arcu malesuada, nec hendrerit libero convallis. consectetur nisl vitae nibh dapibus, in euismod arcu fringilla.</p>
      <br>
      <p>Vivamus vel lectus eu quam facilisis posuere. Ut commodo, ligula nec blandit eleifend, sem purus bibendum libero, ac bibendum elit velit et turpis.</p>
    `,
  },
  {
    title: "New York Times 5",
    subtitle: "Bureau d’études legavre",
    image: "presse5.png",
    content: `
      <p>Quisque sed sapien eu risus ullamcorper pharetra. Duis vehicula mi vel nisi aliquet, vitae auctor quam interdum.</p>
      <br>
      <p>Ut et lectus ut dui scelerisque ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam malesuada, arcu ac laoreet venenatis, odio lacus convallis tortor, in tristique leo ligula vel elit. In hac habitasse platea dictumst. Integer euismod dui et diam consectetur, vel convallis felis rhoncus.</p>
      <br>
      <p>Donec cursus auctor arcu, nec laoreet sem volutpat nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    `,
  },
  {
    title: "New York Times 6",
    subtitle: "Bureau d’études legavre",
    image: "presse6.png",
    content: `
      <p>Phasellus eu fermentum odio. Sed facilisis, est nec commodo tincidunt, arcu arcu fringilla lectus, vel laoreet metus dolor eget ex.</p>
      <br>
      <p>Aliquam erat volutpat. Vivamus sed enim a dolor hendrerit fermentum sit amet vel ex. Nulla facilisi. Nam malesuada, arcu ac laoreet venenatis, odio lacus convallis tortor, in tristique leo ligula vel elit. ue sed sapien eu risus ullamcorper pharetra. Duis vehicula mi vel nisi aliquet, vitae auctor quam interdum.</p>
      <br>
      <p>Pellentesque sit amet lectus non sem facilisis hendrerit. Nam malesuada, arcu ac laoreet venenatis, odio lacus convallis tortor, in tristique leo ligula vel elit.</p>
    `,
  },
];
</script>
<script>
export default {
  name: "Presse",
  data() {
    return {
      currentArticle: 0,
    };
  },
  methods: {
    onSlideChange(swiper) {
      this.currentArticle = swiper.activeIndex;
    },
  },
};
</script>

<style lang="scss" scoped></style>