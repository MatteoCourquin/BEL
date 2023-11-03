<script setup>
const { $client } = useNuxtApp();

const fetchData = async ($client, language) => {
  try {
    const { data, pending, error, refresh } = await useAsyncData('projects', () => $client.getEntries())

    return data._rawValue.items.map((item) => ({
      title: item.fields.title,
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const projects = useProjects();

fetchData($client).then((data) => {
  projects.value = data;
});
</script>

<template>
  <div>
    <h1>Test BEL</h1>
    <p>fix bug</p>
    <div class="card-wrapper">
      <p class="red-text">{{ useProjects() }}</p>
    </div>
    <img style="width: 300px"
      src="https://images.unsplash.com/photo-1698869955404-601e3b410184?auto=format&fit=crop&q=80&w=2656&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image de test">
  </div>
</template>

<style scoped lang="scss">
.card-wrapper{
  background: lightblue;  
  .red-text {
    color: red;
  }
}
</style>
