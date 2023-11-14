<template>
  <div :class="['w-14 flex items-center', direction === 'right' ? 'justify-start' : 'justify-end']">
    <div
      :class="['group relative p-4 cursor-pointer w-10 hover:w-14 transition-all', direction === 'right' ? 'rotate-180' : 'rotate-0']">
      <div class="absolute top-1/2 right-0 group-hover:w-14 transition-all -translate-y-1/2 bg-black w-10 h-[2px]">
      </div>
      <img src="/images/arrow.svg"
        class="w-4 h-4 group-hover: transition-all -translate-x-1/2 translate-y-1/2 absolute left-[2px] top-0 rotate-90"
        alt="fleche gauche">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Arrow',
  props: {
    direction: {
      type: String,
      default: 'left'
    },
  },
  data() {
    return {};
  },
  methods: {}
}

</script>

<style scoped lang='scss'></style>