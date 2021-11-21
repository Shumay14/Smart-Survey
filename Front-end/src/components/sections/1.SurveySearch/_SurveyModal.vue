<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h3 class="font-black text-spruce text-6xl">
                {{ project.title }}
              </h3>
              <button
                class="btn btn-info"
                type="submit"
                @click="$emit('close')"
              >
                close
              </button>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <iframe
                style="width: 50vw; height: 70vh"
                :src="project.url"
              ></iframe>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: ["project"],
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
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.1s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 55%;
  height: 90%;
  margin: 0px auto;
  padding: 10px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  /* transition: all 0.3s ease; */
}
</style>
