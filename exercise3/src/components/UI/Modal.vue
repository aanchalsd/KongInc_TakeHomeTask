<template>
  <!-- <transition name="modal-fade"> -->
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <header class="modal-header" id="modalTitle">
        <slot name="header">{modalTitle}</slot>
        <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
      </header>

      <section class="modal-body" id="modalDescription">
        <p>
          <slot name="body">{modalBody}</slot>
        </p>
        <p>
          Version Name:
          <slot name="vName">{versionName}</slot>
        </p>
        <p>
          Version Description:
          <slot name="vDesc">{versionDesc}</slot>
        </p>
      </section>

      <footer class="modal-footer">
        <button type="button" class="btn-green" @click="close" aria-label="Close modal">Close</button>
      </footer>
    </div>
  </div>
  <!-- </transition> -->
</template>


<script>
export default {
  name: "Modal",

  props: {
    /**
     * Pass title string in if slot not used
     */
    modalTitle: {
      type: String,
      default: ""
    },
    /**
     * Pass body string in if slot not used
     */
    modalBody: {
      type: String,
      default: ""
    },
    vName: {
      type: String,
      default: ""
    },
    vDesc: {
      type: String,
      default: ""
    }
  },

  emits: ["close"],

  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script

<style  lang="scss" scoped>
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
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }







  // .modal {
  //   background: #ffffff;
  //   box-shadow: 2px 2px 20px 1px;
  //   overflow-x: auto;
  //   display: grid;
  //   /* flex-direction: column; */
  //   width: 60vw;
  //   height: 70vh;
  // }

  // .btn-green {
  //   color: white;
  //   background: #1456CB;
  //   border: 1px solid #1456CB;
  //   border-radius: 5px;
  //   width: 10vw;
  //   margin: auto;
  //   padding: 12px;
  //   font-size: 1.25rem;
  //   letter-spacing: 1.25px;
  // }



  // .modal-header {
  //   position: relative;
  //   border-bottom: 1px solid #eeeeee;
  //   color: #0A2B66;
  //   justify-content: center;
  //   font-size: 1.75rem;
  //   font-family: 'Roboto';
  //   margin: 10px;
  // }

  // .btn-close {
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   border: none;
  //   font-size: 2rem;
  //   padding: 10px;
  //   cursor: pointer;
  //   font-weight: bold;
  //   color: #1456CB;
  //   font-family: 'Roboto';
  //   background: transparent;
  // }


</style>