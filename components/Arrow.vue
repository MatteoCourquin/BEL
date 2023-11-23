<template>
  <div :class="['w-14 flex items-center', direction === 'right' ? 'justify-start' : 'justify-end']">
    <div
      :class="['group relative p-4 cursor-pointer w-10 group-hover:w-14 hover:w-14 transition-all', direction === 'right' ? 'rotate-180' : 'rotate-0']">
      <div
        :class="['absolute top-1/2 right-0 group-hover:w-14 transition-all -translate-y-1/2 w-10 h-[2px]', color === 'black' ? 'bg-black' : 'bg-white']">
      </div>
      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 transition-all -translate-x-1/2 translate-y-1/2 absolute left-[2px] top-0 rotate-90">
        <path :class="[color === 'black' ? 'stroke-black' : 'stroke-white']"
          d="M12.7335 1.70813L7.20209 7.2396L1.67065 1.70813" stroke-width="1.77796" stroke-linecap="square" />
      </svg>
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
    color: {
      type: String,
      default: 'black'
    }
  },
  data() {
    return {};
  },
  methods: {}
}

</script>

<style scoped lang='scss'></style>