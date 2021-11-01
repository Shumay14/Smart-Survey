<template>
    <div>
        <!-- <p> this is web3 page </p> -->
        <button @click="metamaskLogin()" hidden> Meta Login </button>
    </div>
</template>



<script>
    import Web3 from "web3";

    export default {
        name: "Web3",
        data() {
            return {
            };
        },
        setup() {},
        created() {},
        mounted() {},
        unmounted() {},
        methods: {
            async metamaskLogin() {
                if (window.ethereum) {
                    web3 = new Web3(window.ethereum);
                    try {
                        // Request account access if needed
                        await window.ethereum.enable();
                        // Acccounts now exposed
                        web3.eth.getAccounts().then((accounts) => {
                        // state.addr = accounts[0];
                        this.$store.commit("metamaskAdd", accounts[0]);
                        if (accounts[0] == null) console.log("Asdfasfddafasdfasfadsfads");
                        this.mymetamask_addr = this.$store.state.metamaskAdd;
                        this.mymetamaskaddr_selec = true;
                        console.log(accounts[0]);
                        console.log("스토어에 저장:",this.$store.state.metamaskAdd)
                        //getContract();
                    });
                    } catch (error) {}
                }
                // Legacy dapp browsers...
                else if (window.web3) {
                    // Use Mist/MetaMask's provider.
                    web3 = window.web3;
                    console.log("Injected web3 detected.");
                }
            },
        },
    }
</script>
