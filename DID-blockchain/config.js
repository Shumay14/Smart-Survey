var registryDID = require('./build/contracts/registryDID.json')
var Survey = require('./build/contracts/Survey.json')

module.exports = {
    

    REGISTRYDID_ADDRESS: '0x',
    SURVEY_ADDRESS: '0x',

    REGISTRYDID_ABI: registryDID.abi,
    SURVEY_ABI: Survey.abi,

    GAS_AMOUNT: 500000,

}

// web3.eth.sendTransaction({from: web3.eth.accounts[0], to: "0x6f0023D1CFe5A7A56F96e61E0169B775Ac97f90E" , value: web3.utils.toWei(1, 'ether'), gasLimit: 21000, gasPrice: 20000000000})
