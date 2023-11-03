<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { $client } = useNuxtApp();

const fetchData = async ($client) => {
  try {
    const { data } = await useAsyncData('projects', () => $client.getEntries())

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