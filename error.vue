<template>
  <h1>404</h1>
</template>

<script>

export default {
  name: 'Error',
  data() {
    return {};
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.$router.push('/');
    }, 2000);
  },
}

</script>

<style scoped lang='scss'></style>