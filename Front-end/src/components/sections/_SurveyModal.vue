<template>
  <div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.1s ease;
  overflow-y: hidden !important;
}

.modal-wrapper {
  overflow-y: hidden !important;
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 1000px;
  /* height: 800px;  */
  overflow-y: auto !important;
  margin: 0px auto;
  padding: 10px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  /* transition: all 0.3s ease; */
}
.modal-header:hover {
  color: red;
}
/*
.modal-body {
  margin: 20px 0px;
}

.modal-body h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1, 1);
  transform: scale(1, 1);
}
.modal-bodty,
.modal {
  color: #666 !important;
}

.fa {
  margin: 0 10px;
  padding: 10px;
  font-size: 25px;
  width: 40px;
  text-align: center;
  text-decoration: none;
  border-radius: 20%;
}
.fa-facebook {
  background: #3b5998;
  color: white;
}
.fa-instagram {
  background: #ff5700;
  color: white;
}
.fa-twitter {
  background: #55acee;
  color: white;
} */
</style>
