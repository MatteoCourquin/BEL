<template>
  <div>
    <img class="fixed -z-10 opacity-25 w-screen h-screen object-cover" src="/images/paper.svg" alt="" />
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@import "@/scss/main.scss";
</style>
