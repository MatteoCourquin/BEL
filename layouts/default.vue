<template>
  <div>
    <img src="/images/paper.svg" alt="papier millimétré" class="fixed -z-10 opacity-25 w-screen h-screen object-cover" />
    <Header />
    <main class="pt-[90px] min-h-screen">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@import "@/scss/main.scss";
</style>
