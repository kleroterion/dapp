var ArbitratedBuy = artifacts.require("./Arbitrated/ArbitratedBuy.sol");
var CourtBuyable = artifacts.require("./BuyableCourt.sol");
var Court = artifacts.require("./Court.sol");
//var Web3 = require('../node_modules/web3');

module.exports = function(deployer) {
	//var web3RPC = new Web3(deployer.provider);
	deployer.deploy(Court);
	deployer.deploy(ArbitratedBuy);
	deployer.deploy(CourtBuyable);

	/*web3RPC.eth.getAccounts((error, accounts) => {
  		deployer.deploy(Kleroterion,[accounts[0],accounts[1],accounts[2]]);
  	});*/
};
