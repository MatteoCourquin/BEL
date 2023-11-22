<template>
  <div ref="wrapper" class="flex w-screen overflow-x-scroll no-scrollbar pt-y-default">
    <div v-for="(item, index) in items" :key="index"
      class="cursor-pointer px-2 md:px-4 last-of-type:pr-0 first-of-type:pl-0 border-b border-gray margin-x-slider relative"
      :ref="formatSlug(item) + index" @click="activeItem = formatSlug(item) + index">
      <p
        :class="['whitespace-nowrap relative font-michroma', formatSlug(item) + index === activeItem ? 'border-tabs-items-gold !text-gold' : 'text-black']">
        {{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        const tags = ['all'];
        useProjects().value.map((item) => {
          if (!tags.some(existingTag => existingTag === item.tags)) {
            tags.push(item.tags);
          }
        });
        return tags;
      },
    },
  },
  data() {
    return {
      activeItem: 'all0',
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