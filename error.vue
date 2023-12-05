<template>
  <div>
    <img src="/images/paper.svg" alt="papier millimétré" class="fixed -z-10 opacity-25 w-screen h-screen object-cover" />
    <main class="pt-[90px] min-h-screen">
      <section class="min-h-screen-header max-w-default py-y-default px-x-default mx-auto">
        <div class="flex flex-col justify-center items-center text-center gap-4">
          <h1 class="text-4xl font-inter-bold text-center">Oups !</h1>
          <p class="text-center">La page que vous cherchez n'existe pas.</p>
          <p class="py-2 md:py-4">Si vous ne faites rien, vous allez être redirigé dans {{ timeout
          }} {{
  timeout === 1 ?
  'seconde' : 'secondes' }}.
          </p>
          <NuxtLink to="/" class="bg-gold hover:bg-gray transition-colors px-10 !text-white py-1 rounded-small uppercase font-inter-semi-bold">
            Retour à l'accueil
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  name: 'Error',
  data() {
    return {
      timeout: 10,
      intervalId: null,
    };
  },
  methods: {
    startCountdown() {
      this.intervalId = setInterval(() => {
        this.timeout--;
        if (this.timeout <= 0) {
          clearInterval(this.intervalId);
          this.$router.push('/');
        }
      }, 1000);
    },
  },
  mounted() {
    this.startCountdown();
  },
}

</script>

<style scoped lang='scss'></style>