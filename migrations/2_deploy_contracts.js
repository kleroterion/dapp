var Token = artifacts.require("./Tokens/Token.sol");
//var Web3 = require('../node_modules/web3');

module.exports = function(deployer) {
	//var web3RPC = new Web3(deployer.provider);
	deployer.deploy(Token);

	/*web3RPC.eth.getAccounts((error, accounts) => {
  		deployer.deploy(Kleroterion,[accounts[0],accounts[1],accounts[2]]);
  	});*/
};
