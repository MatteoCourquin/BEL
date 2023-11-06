<template>
  <div class="py-y-default">
    <div class="relative mb-y-default">
      <div class="flex justify-center md:justify-normal max-w-default mx-auto section-default">
        <div class="px-24 py-4 z-10 gradient-white w-fit">
          <h2 class="uppercase inline-block">{{ title }}</h2>
        </div>
      </div>
      <NuxtImg src="images/meter.svg" class="-z-10 absolute top-1/2 -translate-y-1/2 w-screen"></NuxtImg>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  data() {
    return {};
  },
  methods: {},
}
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';
.gradient-white {
  background: radial-gradient(#ffffff, #ffffff00);
}
</style>