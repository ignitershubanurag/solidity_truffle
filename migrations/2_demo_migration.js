const demo = artifacts.require("demo");

module.exports = function (deployer) {
  const constructorParam = 10;
  deployer.deploy(demo, constructorParam);
};
