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
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <iframe
                style="width: 50vw; height: 70vh"
                :src="project.url"
              ></iframe>

              <div class="d-flex justify-content-center mt-3">
              <button type="submit" class="btn btn-info" @click="claimReward()">
                보상 수령
              </button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Web3 from 'web3';

export default {
  props: ["project", "surveyIndex"],
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
  },
  unmounted() {},
  methods: {
    async claimReward(){
      
      const web3 = new Web3(window.ethereum);

      var _contractAddr = "0xd13D301B0AD89A576f2416D3Ba03173E489356eB";
      var _abi = {
        addUser: {
          inputs: [
            {
              internalType: "uint256",
              name: "surveyIndex",
              type: "uint256"
            },
            {
              internalType: "address payable",
              name: "_to",
              type: "address"
            }
          ],
          name: "addUser",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
      }

      console.log(this.surveyIndex, this.$store.state.metamaskAdd);

      var _params = [this.surveyIndex, this.$store.state.metamaskAdd];
      var _data = web3.eth.abi.encodeFunctionCall(_abi.addUser, _params);

      await web3.eth.sendTransaction({
        from: this.$store.state.metamaskAdd,
        to: _contractAddr,
        data: _data,
      });

      this.$emit('close');
    },
  },
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
