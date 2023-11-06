<template>
  <nav
    class="fixed top-0 w-full bg-white py-4 flex items-center justify-between max-w-default m-auto"
  >
    <div class="flex items-center gap-10">
      <NuxtLink to="/" @click="setActiveLink('/')" ref="/">
        <svg
          width="97"
          height="41"
          viewBox="0 0 97 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.84615 22.2692H29.3846V39.5H1V1.5H29.3846V17.5769H8.84615H7.84615V18.5769V21.2692V22.2692H8.84615Z"
            stroke="#A7904A"
            stroke-width="2"
          />
          <path
            d="M41.9228 25.3462H62.0767V39.5H34.0767V1.5H62.0767V14.1154H41.9228H40.9228V15.1154V18.5769V19.5769H41.9228H47.8459V20.2692H41.9228H40.9228V21.2692V24.3462V25.3462H41.9228Z"
            stroke="#A7904A"
            stroke-width="2"
          />
          <path
            d="M73.3442 22.2692H95.5384V39.5H67.1538V1.5H72.3442V21.2692V22.2692H73.3442Z"
            stroke="#A7904A"
            stroke-width="2"
          />
        </svg>
      </NuxtLink>
      <div class="hidden md:flex gap-10">
        <NuxtLink
          to="projets"
          class="uppercase"
          @click="setActiveLink('projets')"
          ref="projets"
        >
          Projets
        </NuxtLink>
        <NuxtLink
          to="presse"
          class="uppercase"
          @click="setActiveLink('presse')"
          ref="presse"
        >
          Presse
        </NuxtLink>
        <NuxtLink
          to="equipe"
          class="uppercase"
          @click="setActiveLink('equipe')"
          ref="equipe"
        >
          Équipe
        </NuxtLink>
        <span
          class="w-[5px] h-[5px] absolute bottom-0 bg-gold rounded-full -translate-x-1/2 transition-all duration-300"
          :style="{
            left: dotPositionLeft + 'px',
            top: dotPositionTop + 'px',
            opacity: dotOpacity,
          }"
        ></span>
      </div>
    </div>
    <div class="md:hidden flex items-center gap-4">
      <button @click="toggleMenu" class="text-white py-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <div class="hidden md:flex">
      <NuxtLink
        to="contact"
        class="bg-gold px-10 text-white py-1 rounded-md uppercase"
        @click="setActiveLink('contact')"
        ref="contact"
      >
        Contact
      </NuxtLink>
    </div>
  </nav>
  <div
    v-if="isMenuOpen"
    class="md:hidden w-screen h-screen fixed bg-white left-0 z-30"
  >
    <div class="flex flex-col items-center justify-center h-full gap-y-4">
      <NuxtLink
        to="/projets"
        class="text-black text-5xl mb-4 uppercase"
        @click="toggleMenu"
      >
        Projets
      </NuxtLink>
      <NuxtLink
        to="/presse"
        class="text-black text-5xl mb-4 uppercase"
        @click="toggleMenu"
      >
        Presse
      </NuxtLink>
      <NuxtLink
        to="/equipe"
        class="text-black text-5xl mb-4 uppercase"
        @click="toggleMenu"
      >
        Équipe
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="text-black text-5xl mb-4 uppercase"
        @click="toggleMenu"
      >
        Contact
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
      dotPositionLeft: 0,
      dotPositionTop: 48.5,
      dotOpacity: 0,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    setActiveLink(link) {
      if (link !== "index") {
        this.dotOpacity = "1";
        this.dotPositionLeft =
          this.$refs[link].$el.getBoundingClientRect().right -
          this.$refs[link].$el.getBoundingClientRect().width / 2;
        this.dotPositionTop =
          this.$refs[link].$el.getBoundingClientRect().bottom;
        if (link === "/" || link === "contact") {
          this.dotOpacity = "0";
        }
      }
    },
  },
  mounted() {
    this.setActiveLink(useRoute().name);
  },
};
</script>

<style scoped lang="scss">
</style>
