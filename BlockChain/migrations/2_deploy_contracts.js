
var registryDID = artifact.require("./registryDID.sol");
var Survey = artifact.require("./Survey.sol");

module.exports = function(deployer) {
  
  deployer.deploy(registryDID);
  deployer.deploy(Survey);
};
