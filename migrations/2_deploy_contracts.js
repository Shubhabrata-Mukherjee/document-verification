//var ConvertLib = artifacts.require("./ConvertLib.sol");
var Records = artifacts.require("./Records.sol");

module.exports = function(deployer) {
  //deployer.deploy(ConvertLib);
  //deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(Records);
};
