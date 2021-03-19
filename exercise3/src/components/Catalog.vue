<template>
  <!-- Modal to be shown when service card is clicked -->
  <div class="container">
    <Modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header>{{modalTitle}}</template>
      <template v-slot:body>{{modalBody}}</template>
      <template v-slot:vName>{{versionName}}</template>
      <template v-slot:vDesc>{{versionDesc}}</template>
    </Modal>

    <div class="catalog">
      <KCard
        v-for="repo in showRepos"
        :key="repo.id"
        class="service"
        :hasHover="true"
        @click.native="showModal(repo)"
      >
        <template slot="title">{{ repo.name }}</template>
        <template @click="display" slot="body">{{ repo.description }}</template>
      </KCard>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
import KCard from '@kongponents/kcard'
import Modal from "./UI/Modal.vue";
import BaseButton from "./UI/BaseButton.vue";
import BaseCard from "./UI/BaseCard.vue";


export default Vue.extend({

    name: 'Catalog',
    props: {
      repositories: Array,
      showRepos: Array,
      display: Function
    },

  data() {
    return {
      modalTitle:'',
      modalBody:'',
      versionName:'',
      versionDesc:'',
      isModalVisible: false
    };
  },
    
    components: {
        KCard,
        BaseButton,
        BaseCard,
        Modal
      },

    methods:{ 
      showModal(r) {
        this.isModalVisible = true;
        this.modalTitle = r.name;
        this.modalBody = r.description;
        this.versionName =r.versions[0].name;
        this.versionDesc = r.versions[0].description;  
    },

    closeModal() {
      this.isModalVisible = false;
    },
  }
})
</script>

<style lang="scss">
.searchDiv {
  display: grid;
  flex-direction: column;
  justify-content: left;
  align-items: center;
}

.headingOne {
  color: #0a2b66;
}

headingOne,
.searchInput {
  display: grid;
  grid-row: 4;
}

#app .kong-card.border:hover {
  border: 1px solid rgba(54, 54, 184, 0.945);
}

.catalog {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  column-gap: 10px;
  width: 80vw;
  justify-content: center;
  align-content: center;
  margin: auto;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .catalog {
    display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5px;
    width: 80vw;
    justify-content: center;
    align-content: center;
    margin: auto;
  }
  .service {
    display: grid;
    width: 120px;
    margin: 10px;
    height: 130px;
    cursor: pointer;
  }

  .modal {
    height: 26vh;
  }
}

@media (min-width: 1024px) and (max-width: 1196px) {
  .catalog {
    width: 85vw;
  }
  .service {
    width: 145px;
  }
}

.service {
  display: grid;
  // width: 300px;
  margin: 10px;
  height: 170px;
  cursor: pointer;
}

@media (min-width: 1280px) and (max-width: 1439px) {
  .catalog {
    width: 70vw;
    column-gap: 4px;
  }

  .service {
    width: 170px;
  }
}

@media (min-width: 1440px) and (max-width: 1925px) {
  .catalog {
    width: 70vw;
    column-gap: 4px;
  }

  .service {
    width: 170px;
  }
}

@media (min-width: 1926px) {
  .catalog {
    width: 55vw;
    column-gap: 4px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  .service {
    height: 168px;
  }
}

.service {
  display: grid;
  // width: 300px;
  margin: 10px;
  height: 170px;
  cursor: pointer;
}

.service:hover {
  border: 1px solid #1456cb;
}
#app .kong-card .k-card-header {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#app .k-card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#app .kong-card .k-card-title h4 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 18px;
  color: #1456cb;
  font-weight: 500;
}
#app .k-card-body {
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  color: rgba(0, 0, 0, 0.45);
  line-height: 26px;
  letter-spacing: 0.125px;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  border-radius: 3rem;
  display: grid;
  width: 50vw;
  height: 65vh;
  overflow-y: hidden;
  // }
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #0a2b66;
  justify-content: center;
  font-size: 1.75rem;
  font-family: "Roboto";
  margin: 10px;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  width: 40vw;
  margin: auto;
  position: relative;
  text-align: justify;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #1456cb;
  font-family: "Roboto";
  background: transparent;
}

.btn-green {
  color: white;
  background: #1456cb;
  border: 1px solid #1456cb;
  border-radius: 5px;
  width: 10vw;
  margin: auto;
  padding: 12px;
  font-size: 1.25rem;
  letter-spacing: 1.25px;
}

@media (min-width: 500px) and (max-width: 760px) {
  .modal,
  .modal-header,
  .modal-header {
    font-size: 1rem;
  }

  .btn-close {
    font-size: 1rem;
  }
  .btn-green {
    width: 15vw;
    padding: 8px;
  }
}

@media (min-width: 768px) {
  .modal {
    height: auto;
  }
}

@media (min-width: 1926px) {
  .modal {
    width: 45vw;
  }
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
