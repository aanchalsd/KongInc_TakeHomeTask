<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <h1>Test Page</h1>
    <button @click="backHome">Back To Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    backHome() {
      this.$router.push("/");
    }
  }
};
</script>
