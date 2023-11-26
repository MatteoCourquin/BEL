<template>
  <div
    :class="['wrapper-circle w-24 h-24 rounded-full absolute z-10 bg-white p-1 transition-transform overflow-hidden group group-hover:scale-105 hover:scale-105', className]">
    <img :src="'/circles/' + variant + '.svg'" alt="cercle qui tourne" class="animate-spin-circle">
    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg"
      :class="['absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4', orientation === 'right' ? '-rotate-90 arrow-right' : 'rotate-0 arrow-bottom']">
      <path d="M17 12.6096L9.5 20M9.5 20L2 12.6096M9.5 20L9.5 1" stroke="#ffffff" stroke-width="2"
        stroke-linecap="round" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Circle',
  props: {
    variant: {
      type: String,
    },
    className: {
      type: String,
    },
    orientation: {
      type: String,
    }
  },
  methods: {
  },
};
</script>

<style scoped lang='scss'>
@import "@/scss/main.scss";

.animate-spin-circle {
  animation: spin-circle 6s linear infinite;
}

.wrapper-circle:hover .arrow-right,
.group:hover .arrow-right {
  animation: move-right .4s cubic-bezier(.66, 0, .35, 1) forwards;
}

.wrapper-circle:hover .arrow-bottom,
.group:hover .arrow-bottom {
  animation: move-bottom .4s cubic-bezier(.66, 0, .35, 1) forwards;
}
</style>
