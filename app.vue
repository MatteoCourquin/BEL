<script setup>
const randomNumber = Math.floor(Math.random() * 10)
const { data, pending, error, refresh } = await useAsyncData('mountains', () => $fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`))
</script>

<template>
  <div>
    <h1>Test BEL</h1>
    <p class="red-text">{{ data.id }} • {{ data.title }}</p>
    <img style="width: 300px"
      src="https://images.unsplash.com/photo-1698869955404-601e3b410184?auto=format&fit=crop&q=80&w=2656&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image de test">
  </div>
</template>

<style scoped>
.red-text {
  color: red;
}
</style>
