<template>
  <nav class="p-4 flex items-center justify-between">
    <div class="flex items-center space-x-4">
      <div>
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
      </div>
      <div class="hidden md:flex space-x-4">
        <NuxtLink to="/projets" class="active">Projets</NuxtLink>
        <NuxtLink to="/presse" class="active">Presse</NuxtLink>
        <NuxtLink to="/equipe" class="active">Équipe</NuxtLink>
      </div>
    </div>
    <div class="md:hidden flex items-center space-x-4">
      <button @click="toggleMenu" class="text-white p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 3v2H5v2H12v2H3v2h9v2H5v2h7v2h-2v2H14v2H5v2h7v2H12v2h9v2h-7v2h7a2 2 0 01-2 2H5a2 2 0 01-2-2H0v-2h3v-2H0v-2h3v-2H0V7h3V5H0V3h3V1h2v2h7V1h2v2h7v2h-3v2h3v2h-3v2h3v2h-3v2h3v2h-3v2h3v2h-3v2h3v2h-3v2h3v2h-3v2h3v2h-3v2h3v2h-3a2 2 0 01-2-2z"
          />
        </svg>
      </button>
    </div>
    <div class="hidden md:flex">
      <a href="/contact">Contact</a>
    </div>
  </nav>
  <div v-if="isMenuOpen" class="md:hidden">
    <ul class="bg-blue-500 p-4 space-y-4">
      <li><a href="/projets">Projets</a></li>
      <li><a href="/presse">Presse</a></li>
      <li><a href="/equipe">Équipe</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        this.isMenuOpen = false;
      }
    });
  },
};
</script>

<style scoped lang="scss"></style>
