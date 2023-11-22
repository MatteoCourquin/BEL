<template>
  <section class="py-y-default">
    <div class="relative mb-y-default overflow-hidden">
      <div class="flex justify-center md:justify-normal max-w-default mx-auto px-x-default">
        <div class="px-24 py-4 z-10 gradient-white w-fit">
          <h1 v-if="variant === 'heading1'" class="uppercase text-center inline-block">{{ title }}</h1>
          <h2 v-if="variant === 'heading2'" class="uppercase text-center inline-block">{{ title }}</h2>
          <h3 v-if="variant === 'heading3'" class="uppercase text-center inline-block">{{ title }}</h3>
          <h4 v-if="variant === 'heading4'" class="uppercase text-center inline-block">{{ title }}</h4>
          <h5 v-if="variant === 'heading5'" class="uppercase text-center inline-block">{{ title }}</h5>
        </div>
      </div>
      <img src="/images/meter.svg" alt="illustration de graduation"
        class="-z-10 absolute top-1/2 -translate-y-1/2 w-screen opacity-50" />
    </div>
    <div class="relative">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: 'heading2',
    },
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