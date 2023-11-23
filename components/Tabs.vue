<template>
  <div ref="wrapper" class="flex w-screen overflow-x-scroll no-scrollbar pt-y-default">
    <div v-for="(tab, index) in computedTabs" :key="index"
      class="cursor-pointer px-2 md:px-4 last-of-type:pr-0 first-of-type:pl-0 border-b border-gray margin-x-slider relative"
      :ref="formatSlug(tab)" @click="setActiveItem(formatSlug(tab))">
      <p
        :class="['whitespace-nowrap relative font-michroma', formatSlug(tab) === activeTab ? 'border-tabs-items-gold !text-gold' : 'text-black']">
        {{ tab }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'tous',
    };
  },
  watch: {
    activeItem() {
      this.scrollToItem();
    },
  },
  methods: {
    setActiveItem(tab) {
      this.activeTab = tab;
      this.$emit('update:activeTab', tab);
    },
    scrollToItem() {
      const item = this.$refs[this.activeTag][0].getBoundingClientRect();
      const wrapper = this.$refs.wrapper.getBoundingClientRect();
      this.$refs.wrapper.scrollTo({
        left: (item.left - wrapper.left + this.$refs.wrapper.scrollLeft) - window.innerWidth / 2 + item.width / 2,
        behavior: 'smooth',
      });
    },
  },
  computed: {
    computedTabs() {
      const tags = ['Tous'];
      useProjects().value.map((item) => {
        if (!tags.some(existingTab => existingTab === item.tags)) {
          tags.push(item.tags);
        }
      });
      return tags;
    }
  }
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