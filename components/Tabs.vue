<template>
  <div ref="wrapper" class="flex overflow-x-scroll no-scrollbar">
    <div v-for="(item, index) in items" :key="index"
      class="cursor-pointer px-2 md:px-4 last-of-type:pr-0 first-of-type:pl-0 border-b border-gray margin-x-slider"
      :ref="item.replace(/\s+/g, '').toLowerCase() + index"
      @click="activeItem = item.replace(/\s+/g, '').toLowerCase() + index">
      <p
        :class="['whitespace-nowrap relative font-michroma', item.replace(/\s+/g, '').toLowerCase() + index === activeItem ? 'border-tabs-items-gold !text-gold' : 'text-black']">
        {{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => useProjects().value.map((item) => item.tags).flat(),
    },
  },
  data() {
    return {
      activeItem: this.items[0].replace(/\s+/g, '').toLowerCase() + "0",
    };
  },
  watch: {
    activeItem() {
      this.scrollToItem();
    },
  },
  methods: {
    scrollToItem() {
      const item = this.$refs[this.activeItem][0].getBoundingClientRect();
      const wrapper = this.$refs.wrapper.getBoundingClientRect();
      this.$refs.wrapper.scrollTo({
        left: (item.left - wrapper.left + this.$refs.wrapper.scrollLeft) - window.innerWidth / 2 + item.width / 2,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/main.scss";

.border-tabs-items-gold {
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: $color-gold;
  }
}
</style>