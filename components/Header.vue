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
        ]" to="/" ref="index" aria-label="Logo de l'entreprise BEL">
          <svg width="97" height="40" viewBox="0 0 97 40" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="stroke-gold hover:stroke-gray transition-colors">
            <path d="M7.84616 20.7692V21.7692H8.84616H29.3846V39H1V1H29.3846V17.0769H8.84616H7.84616V18.0769V20.7692Z"
              stroke-width="2" />
            <path
              d="M40.9228 23.8462V24.8462H41.9228H62.0767V39H34.0767V1H62.0767V13.6154H41.9228H40.9228V14.6154V18.0769V19.0769H41.9228H47.8459V19.7692H41.9228H40.9228V20.7692V23.8462Z"
              stroke-width="2" />
            <path d="M72.3442 20.7692V21.7692H73.3442H95.5384V39H67.1538V1H72.3442V20.7692Z" stroke-width="2" />
            <line x1="11" y1="9" x2="19" y2="9" stroke-width="2" />
            <line x1="11" y1="30" x2="19" y2="30" stroke-width="2" />
          </svg>
        </NuxtLink>
        <div class="hidden md:flex gap-10">
          <NuxtLink to="/realisations" class="uppercase hover:text-gray transition-colors font-inter-semi-bold"
            ref="realisations" aria-label="Page réalisations">
            Réalisations
          </NuxtLink>
          <NuxtLink to="/equipe" class="uppercase hover:text-gray transition-colors font-inter-semi-bold" ref="equipe"
            aria-label="Page équipe">
            Équipe
          </NuxtLink>
          <NuxtLink to="/presse" class="uppercase hover:text-gray transition-colors font-inter-semi-bold" ref="presse"
            aria-label="Page presse">
            Presse
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
        <button @click="toggleMenu" class="flex flex-col justify-between items-end group gap-3" aria-label="Menu Burger">
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
        <NuxtLink to="/contact"
          class="bg-gold hover:bg-gray transition-colors px-10 !text-white py-1 rounded-small uppercase font-inter-semi-bold"
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
      <NuxtLink to="/realisations" class="text-black font-inter-medium text-5xl mb-4 uppercase" @click="toggleMenu">
        Réalisations
      </NuxtLink>
      <NuxtLink to="/equipe" class="text-black font-inter-medium text-5xl mb-4 uppercase" @click="toggleMenu">
        Équipe
      </NuxtLink>
      <NuxtLink to="/presse" class="text-black font-inter-medium text-5xl mb-4 uppercase" @click="toggleMenu">
        Presse
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
      if (link.startsWith('realisation')) {
        link = 'realisations';
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
