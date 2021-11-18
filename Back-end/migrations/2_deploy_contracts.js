
var registryDID = artifact.require("./registryDID.sol");

module.exports = function(deployer) {
  
  deployer.deploy(registryDID);
};
