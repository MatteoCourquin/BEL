<template>
  <section class="hero max-w-default min-h-[800px] mx-auto flex justify-between items-center section-default">
    <div class="w-2/3 self-start">
      <p class="font-michroma">Lorem ipsum dolor sit amet</p>
      <h1 class="uppercase py-8 whitespace-nowrap">Bureau d'études <br>Legavre</h1>
      <p class="w-2/3 pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit quos sint laborum
        placeat
        optio voluptatibus veritatis aliquid accusamus dolorem.</p>
      <ButtonScroll />
    </div>
    <div class="border-image relative h-fit m-4 self-end mb-20">
      <NuxtImg src="images/architect.jpg" class="rounded-small object-cover"></NuxtImg>
    </div>
  </section>
</template>

<script setup>
const projects = useProjects();
</script>
<script>

export default {
  name: 'Index',
  data() {
    return {};
  },
  methods: {}
}

</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.hero {
  height: calc(100vh - 73px);
}

.border-image {
  &::after,
  &::before {
    content: '';
    position: absolute;
    border: 1px solid $color-gold;
    border-radius: $radius-small;
    z-index: -1;
  }

  &::after {
    top: -16px;
    right: -16px;
    width: 100%;
    height: 30%;
    border-top-right-radius: $radius-medium;
  }

  &::before {
    bottom: -16px;
    left: -16px;
    width: 100%;
    height: 35%;
    border-bottom-left-radius: $radius-medium;
  }
}
</style>