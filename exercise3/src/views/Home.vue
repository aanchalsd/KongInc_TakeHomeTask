<template>
  <div>
    <ApiCall />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ApiCall from "../components/ApiCall.vue";

export default Vue.extend({
  name: "Home",
  components: {
    ApiCall
  }
});
</script>


