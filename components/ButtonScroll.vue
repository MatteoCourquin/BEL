<template>
  <div @click="scroll" class="cursor-pointer flex items-center w-fit gap-2 pt-6">
    <div class="w-14 h-[70px] border-2 rounded-full border-gray flex justify-center">
      <div class="-translate-y-2">
        <svg class="animate-bounce" width="16" height="59" viewBox="0 0 16 59" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_383_4505)">
            <path d="M8.20142 1.92529V56.4494" stroke="#333" stroke-width="1.77796" stroke-linecap="square" />
            <path d="M13.7335 51.7081L8.20209 57.2396L2.67065 51.7081" stroke="#333" stroke-width="1.77796"
              stroke-linecap="square" />
          </g>
          <defs>
            <clipPath id="clip0_383_4505">
              <rect width="15.409" height="58.08" fill="white" transform="translate(0.300049 0.73999)" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <p class="font-inter-semi-bold">scroll</p>
  </div>
</template>

<script>

export default {
  name: 'ButtonScroll',
  data() {
    return {};
  },
  methods: {
    scroll() {
      window.scrollTo({
        top: window.innerHeight - 90,
        behavior: 'smooth',
      });
    },
  }
}

</script>

<style scoped lang='scss'></style>