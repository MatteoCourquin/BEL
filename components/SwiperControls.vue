<template>
  <div class="flex justify-center gap-10 items-center pt-10 h-fit absolute right-1/2 translate-x-1/2">
    <Arrow :class="[currentArticle <= 0 ? 'opacity-30' : 'opacity-100']" direction="left" color="black"
      @click="swiper.slidePrev()" />
    <div class="flex h-6 overflow-hidden">
      <div class="h-full transition-all"
        :style="{ transform: `translateY(calc(-24px * ${currentArticle}))` }">
        <p class="font-michroma" v-for="(index) in swiper.slides.length" :key="index">{{ index <= 9 ? `0${index}` : index
        }}</p>
      </div>
      <span class="px-2">/</span>
      <p class="font-michroma">{{ swiper.slides.length <= 9 ? `0${swiper.slides.length}` : swiper.slides.length }}</p>
    </div>
    <Arrow :class="[currentArticle + 1 >= swiper.slides.length ? 'opacity-30' : 'opacity-100']" direction="right"
      color="black" @click="swiper.slideNext()" />
  </div>
</template>

<script setup lang="ts">
const swiper = useSwiper()
</script>

<script lang="ts">
export default {
  name: 'SwiperControls',
  props: {
    currentArticle: {
      type: Number,
      default: 0
    }
  },
}
</script>