<template>
  <div id="app">
    <TheHeader />
    <hr />
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> -->
      <!-- <router-link to="/user">User</router-link> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";
import ApiCall from "./components/ApiCall.vue";
import Catalog from "./components/Catalog.vue";

export default {
  components: {
    TheHeader,
    Catalog,
    ApiCall
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

hr {
  border: 0;
  width: 100%;
  height: 1px;
  background: lightgray;
}

.page-link {
  color: rgba(0, 0, 0, 0.45);
}
.containerService {
  display: grid;
  width: 80vw;

  grid-gap: 10px;

  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));

  margin: auto;
  grid-template-areas:
    "head . Butn"
    "Inp . .";
}

.headingItem {
  margin-left: 10px;
  line-height: 28.13px;
  grid-area: head;
  color: #0a2b66;
  letter-spacing: 1px;
}

.headingButton {
  grid-area: Butn;
  justify-self: flex-end;
  align-items: center;
}

.btnEl {
  margin: 20px auto;
  padding: 12px;
  background-color: #1456cb;
  color: #fff;
  font-size: 16px;
  line-height: 19px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 16px;
  border-radius: 3px;
  border-color: transparent;
  cursor: pointer;
}

.headingInput {
  grid-area: Inp;
}

.searchInput {
  margin-left: 10px;
  font-size: 18px;
  padding: 12px;
  margin-bottom: 15px;
  border: var(--KCardBorder, 1px solid var(--black-10, rgba(0, 0, 0, 0.1)));
  border-radius: var(--KCardBorderRadius, 3px);
  width: 210px;
  box-sizing: border-box;
}

.unactive {
  display: none;
}

.active {
  display: block;
}

svg {
  height: 2.55rem;
  width: 2.55rem;
  fill: #1456cb;
}

ul.pagination {
  justify-content: center;
  align-items: center;
  display: flex;
  list-style: none;
}

ul.pagination li {
  margin: 5px;
}

li.disabled {
  pointer-events: none;
  opacity: 0.4;
}
</style>
