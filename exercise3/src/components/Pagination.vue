<template>
  <div>
    <div class="pagination-row">
      <button class="pagination-button">Previous</button>
      <span v-for="(item,index) in new Array(10)" :key="index">
        <button class="pagination-button" @click="servicePage = index+1">{{index+1}}</button>
      </span>
      <button class="pagination-button">Next</button>
    </div>
    <slot name="data" :servicePage="servicePage" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      servicePage: 1
    };
  }
};
</script>
<style>
.pagination-button {
  padding: 8px;
  margin: 2px;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
}
</style>