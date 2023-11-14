<template>
  <header
    class="fixed top-0 w-screen flex items-center h-[90px] md:border-b md:border-gray md:bg-white md:shadow-lg z-[200]">
    <nav class="px-x-default flex items-center w-full justify-between max-w-default m-auto">
      <div class="flex items-center gap-10 relative" ref="wrapperHeader">
        <NuxtLink :class="[
          'transition-all duration-300',
          isMenuOpen
            ? '-translate-y-[140px] opacity-0 md:opacity-100 md:-translate-y-0'
            : 'opacity-100 -translate-y-0',
        ]" to="/" ref="index">
          <svg width="97" height="41" viewBox="0 0 97 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.84615 22.2692H29.3846V39.5H1V1.5H29.3846V17.5769H8.84615H7.84615V18.5769V21.2692V22.2692H8.84615Z"
              stroke="#A7904A" stroke-width="2" />
            <path
              d="M41.9228 25.3462H62.0767V39.5H34.0767V1.5H62.0767V14.1154H41.9228H40.9228V15.1154V18.5769V19.5769H41.9228H47.8459V20.2692H41.9228H40.9228V21.2692V24.3462V25.3462H41.9228Z"
              stroke="#A7904A" stroke-width="2" />
            <path d="M73.3442 22.2692H95.5384V39.5H67.1538V1.5H72.3442V21.2692V22.2692H73.3442Z" stroke="#A7904A"
              stroke-width="2" />
          </svg>
        </NuxtLink>
        <div class="hidden md:flex gap-10">
          <NuxtLink to="/projets" class="uppercase font-inter-semi-bold" ref="projets">
            Projets
          </NuxtLink>
          <NuxtLink to="/presse" class="uppercase font-inter-semi-bold" ref="presse">
            Presse
          </NuxtLink>
          <NuxtLink to="/equipe" class="uppercase font-inter-semi-bold" ref="equipe">
            Équipe
          </NuxtLink>
        </div>
        <span
          class="w-[5px] h-[5px] hidden md:block -translate-x-1/2 absolute bottom-0 bg-gold rounded-full dot-translate transition-all duration-300"
          :style="{
            left: dotPositionLeft + 'px',
            opacity: dotOpacity,
          }"></span>
      </div>
      <div class="md:hidden flex items-center gap-4">
        <button @click="toggleMenu" class="flex flex-col justify-between items-end group gap-3">
          <div :class="[
            'transition-all h-[2px] bg-black',
            isMenuOpen ? '-rotate-45 translate-y-[7px] w-8' : 'w-14',
          ]"></div>
          <div :class="[
            'transition-all h-[2px] bg-black',
            isMenuOpen
              ? 'w-8 rotate-45 -translate-y-[7px]'
              : 'w-10 group-hover:w-14',
          ]"></div>
        </button>
      </div>
      <div class="hidden md:flex">
        <NuxtLink to="/contact" class="bg-gold px-10 !text-white py-1 rounded-md uppercase font-inter-semi-bold"
          ref="contact">
          Contact
        </NuxtLink>
      </div>
    </nav>
  </header>
  <div :class="[
    'md:hidden w-screen h-screen fixed bg-white left-0 z-[110] transition-all duration-500 border-b border-gray shadow-lg',
    isMenuOpen ? 'translate-y-0' : 'translate-header',
  ]">
    <div class="flex flex-col items-center justify-center h-full gap-y-4">
      <NuxtLink to="/projets" class="text-black font-inter-medium text-5xl mb-4 uppercase" @click="toggleMenu">
        Projets
      </NuxtLink>
      <NuxtLink to="/presse" class="text-black font-inter-medium text-5xl mb-4 uppercase" @click="toggleMenu">
        Presse
      </NuxtLink>
      <NuxtLink to="/equipe" class="text-black font-inter-medium text-5xl mb-4 uppercase" @click="toggleMenu">
        Équipe
      </NuxtLink>
      <NuxtLink to="/contact" class="text-black font-inter-medium text-5xl mb-4 uppercase" @click="toggleMenu">
        Contact
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
      dotPositionLeft: 0,
      dotOpacity: 0,
    };
  },
  watch: {
    $route() {
      this.setActiveLink();
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    setActiveLink() {
      let link = this.$route.name;
      this.dotOpacity = '1';
      if (link.startsWith('projet')) {
        link = 'projets';
      }
      if (this.$refs[link] && this.$refs[link].$el) {
        const linkRect = this.$refs[link].$el.getBoundingClientRect();
        const parentRect = this.$refs.wrapperHeader.getBoundingClientRect();
        if (link === 'index' || link === 'contact') {
          this.dotOpacity = '0';
        }
        this.dotPositionLeft =
          linkRect.right - linkRect.width / 2 - parentRect.left;
      } else {
        this.dotOpacity = '0';
      }
    },
  },
  mounted() {
    this.setActiveLink(useRoute().name);
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

.translate-header {
  transform: translateY(calc(-100vh + 90px));
}
</style>
