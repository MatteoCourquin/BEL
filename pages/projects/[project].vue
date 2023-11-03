<template>
  <div>
    <p>Projet : {{ route.params.project.replace(/\s+/g, '-').toLowerCase() }}</p>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
<script>
export default {
  name: 'Project',
  data() {
    return {};
  },
  methods: {}
}
</script>

<style scoped lang='scss'></style>