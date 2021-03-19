<template>
  <div>
    <div class="containerService">
      <div class="headingItem">
        <h1>Services</h1>
      </div>
      <div class="headingButton">
        <button class="btnEl">Add New Service</button>
      </div>
      <div class="headingInput">
        <input class="searchInput" v-model="searchTerm" placeholder="Search" />
      </div>
    </div>

    <Catalog :showRepos="showRepos" :repositories="repositories" />

    <!-- Pagination -->
    <div class="my-4">
      <ul class="pagination pagination-md justify-content-center text-center">
        <li class="page-item" :class="page === 1 ? 'disabled' : ''">
          <a class="page-link" @click="prevPage">
            <svg class="user-nav__icon">
              <use xlink:href="../assets/sprite.svg#icon-arrow-left-circle" />
            </svg>
          </a>
        </li>
        <li
          class="page-link"
          style="background-color: inherit"
        >{{ page }} - {{ lastPage }} of {{ lastPage }}</li>
        <li class="page-item" :class="page === lastPage ? 'disabled' : ''">
          <a class="page-link" @click="nextPage">
            <svg class="user-nav__icon">
              <use xlink:href="../assets/sprite.svg#icon-arrow-right-circle" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <!-- Pagination -->
  </div>
</template>



<script>
import Catalog from "./Catalog.vue";
import axios from "axios";

const servicesAPI = "/api/service_packages?_limit=100&_page=";

export default {
  components: {
    Catalog
  },

  data() {
    return {
      servicePage: 1,
      repositories: [],
      page: 1,
      loading: false,
      perPage: 12,
      searchTerm: "",
      isActive: true
    };
  },

  mounted() {
    this.fetchData();
  },

  computed: {
    showRepos() {
      let start = (this.page - 1) * this.perPage;
      let end = start + this.perPage;
      // if (name.includes(this.searchTerm) === false && !this.searchTerm.length) { this might work

      return this.repositories.slice(start, end).filter(({ name }) => {
        return name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    },

    lastPage() {
      let length = this.repositories.length;
      return Math.ceil(length / this.perPage);
    }
  },

  methods: {
    fetchData() {
      this.loading = true;
      axios
        .get(servicesAPI + this.servicePage)
        .then(({ data }) => {
          this.repositories = this.repositories.concat(data);
          console.log(this.repositories);
          this.loading = false;
        })
        .catch(err => {
          throw err;
        });
    },

    prevPage() {
      this.page--;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    nextPage() {
      this.page++;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
  // text-align: center;
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
  // margin: auto;
  // background-color: royalblue;
  grid-gap: 10px;
  // grid-template-rows: 80px 80px;
  // grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  // justify-content: center;
  // align-content: center;
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

@media (min-width: 768px) and (max-width: 1023px) {
  .containerService {
    width: 90vw !important;
  }

  element.style {
  }
  .searchInput {
    padding: 8px !important;
    width: 146px !important;
  }
}

@media (min-width: 1024px) and (max-width: 1023px) {
  .containerService {
    width: 85vw !important;
  }

  .searchInput {
    width: 185px !important;
  }
}

@media (min-width: 1024px) and (max-width: 1196px) {
  .containerService {
    width: 85vw !important;
  }
  .searchInput {
    width: 165px !important;
  }
}

@media (min-width: 1280px) and (max-width: 1439px) {
  .containerService {
    width: 70vw !important;
  }
}

@media (min-width: 1440px) {
  .containerService {
    width: 70vw !important;
  }

  .searchInput {
    width: 185px !important;
  }
}

@media (min-width: 1926px) {
  .containerService {
    width: 54vw !important;
  }
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

ul.pagination li a {
  cursor: pointer;
}

ul.pagination li {
  margin: 5px;
}

li.disabled {
  pointer-events: none;
  opacity: 0.4;
}
</style>