<template>
  <nav class="p-4 flex items-center justify-between max-w-default m-auto">
    <div class="flex items-center space-x-4 relative">
      <NuxtLink to="/" class="nav-link" @click="setActiveLink('/')">
        <!-- Logo SVG -->
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
      <div class="hidden md:flex space-x-6">
        <NuxtLink
          to="/projets"
          class="nav-link uppercase"
          @click="setActiveLink('/projets')"
        >
          Projets
        </NuxtLink>
        <NuxtLink
          to="/presse"
          class="nav-link uppercase"
          @click="setActiveLink('/presse')"
        >
          Presse
        </NuxtLink>
        <NuxtLink
          to="/equipe"
          class="nav-link uppercase"
          @click="setActiveLink('/equipe')"
        >
          Équipe
        </NuxtLink>
      </div>
      <span
        class="dot transition-dot"
        :style="{
          left: dotPosition + 'px',
          display: dotDisplay,
          marginLeft: '0',
        }"
      ></span>
    </div>
    <div class="md:hidden flex items-center space-x-4">
      <button @click="toggleMenu" class="text-white p-2">
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
        to="/contact"
        class="nav-link bg-gold px-10 text-white py-1 rounded-md uppercase"
        @click="setActiveLink('/contact')"
      >
        Contact
      </NuxtLink>
    </div>
  </nav>
  <div v-if="isMenuOpen" class="burgerMenu md:hidden w-screen h-screen fixed bg-white left-0 z-50">
  <div class="flex flex-col items-center justify-center h-full">
    <a href="/projets" class="text-black text-2xl mb-4 uppercase">Projets</a>
    <a href="/presse" class="text-black text-2xl mb-4 uppercase">Presse</a>
    <a href="/equipe" class="text-black text-2xl mb-4 uppercase">Équipe</a>
    <a href="/contact" class="text-black text-2xl mb-4 uppercase">Contact</a>
  </div>
</div>

</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
      activeLink: "",
      dotPosition: 0,
      dotDisplay: "none",
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    setActiveLink(link) {
      if (this.activeLink !== "/") {
        const activeLinkClientRect = document
        .querySelector(`.nav-link[href="${link}"]`)
        .getBoundingClientRect();
        
        console.log(activeLinkClientRect);
        const dotPosition =
          activeLinkClientRect.right - activeLinkClientRect.width / 2 - 16;
        this.dotPosition = dotPosition;
        this.dotDisplay = "block";
      } else {
        this.dotDisplay = "none";
      }
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        this.isMenuOpen = false;
        this.dotDisplay = "none";
      }
    });
  },
};
</script>

<style scoped lang="scss">
.dot {
  width: 6px;
  height: 6px;
  background-color: #a7904a;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  transform: translateX(-50%);
}

.transition-dot {
  transition: left 0.3s;
}

.burgerMenu {
  height: calc(100vh - 64px);
}
</style>
