import React, {Component} from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'

import '../www/styles/Kleroterion.scss'

const TESTRPC_HOST = 'localhost'
const TESTRPC_PORT = '8545'

class Kleroterion extends Component {

  state = {
    web3: false,
    balance: 0,
    nbDispute: 0,
    disputes: null,
    buyableCourtContract: null,
    disputes: [],
  }

  componentDidMount() {
    setTimeout(() => {
      if (typeof web3 !== 'undefined') {
        // web3 = new Web3(web3.currentProvider);
        this.setState({web3: true})
        var buyableCourtContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"tokens","type":"uint256"}],"name":"activateTokensForArbitration","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"appealOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"atStake","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"voteA","type":"bool"}],"name":"arbitrate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"},{"name":"r","type":"uint256"},{"name":"t","type":"uint256"}],"name":"drawnTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"penalizationOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"accounts","type":"address[]"},{"name":"disputeIDs","type":"uint256[]"}],"name":"penalizeInactiveJuries","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"activatedJuryTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"voteA","type":"bool"}],"name":"voteRuling","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"appeal","type":"uint256"},{"name":"voteID","type":"uint256"},{"name":"stakeA","type":"bool"}],"name":"getVoteStake","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"r","type":"uint256"}],"name":"createDispute","outputs":[{"name":"disputeID","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"executeTokenRepartition","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"disputes","outputs":[{"name":"arbitratedContract","type":"address"},{"name":"session","type":"uint256"},{"name":"appeals","type":"uint256"},{"name":"r","type":"uint256"},{"name":"voteA","type":"uint256"},{"name":"voteB","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"partAtStakeDivisor","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"arbitralSegmentStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"session","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"endLastSession","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"account","type":"address"}],"name":"getHasVoted","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"untrustedExecuteRuling","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"voteOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"activationOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"appeal","type":"uint256"},{"name":"voteID","type":"uint256"}],"name":"getVoteAccount","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"disputeOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"r","type":"uint256"}],"name":"appealRuling","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"tokens","type":"uint256"}],"name":"activateTokensForJury","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"accounts","type":"address[]"},{"name":"disputeIDs","type":"uint256[]"}],"name":"penalizeInactiveArbitrators","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"minArbitralToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"activatedArbitrationTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"arbitralSession","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"getAppeals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"jurySegmentStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"executionOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"arbitralSegmentPosition","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"nextSession","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"jurySegmentEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"arbitralSegmentEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"buyTokens","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"nbDispute","outputs":[{"name":"nb","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"jurySession","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"},{"name":"r","type":"uint256"}],"name":"drawnArbiter","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"blocked","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"jurySegmentPosition","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"minJuryToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"accounts","type":"address[]"},{"name":"tokens","type":"uint256[]"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]);
        this.setState({buyableCourtContract})
        console.log(this.state.buyableCourtContract)
        this.getBalance()
        this.getDisputes()
      } else {
        alert("install Metamask or use Mist")
      }
    }, 1000)
  }

  getDisputes = () => {
    this.state.buyableCourtContract
    .at('0xc92aa8aF07aD57d023E8A2FE18175D69dDd6b02f')
    .nbDispute({from: web3.eth.accounts[0]}, (res,err) => {
      this.setState({nbDispute: err.toNumber()})
      console.log('nbDispute :', this.state.nbDispute)
      let disputeArr = [...new Array(err.toNumber()).keys()]
      disputeArr.map(
        i => this.setState({disputes: [...this.state.disputes, {dispute: this.getDispute(i), active: null}]})
      )
    })
  }

  getDispute = id => this.state.buyableCourtContract.at('0xc92aa8aF07aD57d023E8A2FE18175D69dDd6b02f').disputes(id, {from: web3.eth.accounts[0]}, (res,err) => err)

  getBalance = () => {
    this.state.buyableCourtContract
    .at('0xc92aa8aF07aD57d023E8A2FE18175D69dDd6b02f')
    .balanceOf(web3.eth.accounts[0], {from: web3.eth.accounts[0]}, (res,err) => {
      this.setState({balance: isNaN(err) ? 0 : err.toNumber()/1000000000000000000})
      console.log('balance :', err)
    })
  }

  handleChange = field => ({ target: { value } }) => this.setState({ [field]: value })

  render() {
    return (
      <div id="container">
        <h1>Kleroterion</h1>
        <p>Balance : {this.state.balance}</p>
        {this.state.disputes.map(
          (obj, index) =>
            (
              <ul key={index}>
                <li>session: {obj[1].toNumber()}</li>
              </ul>
            )
        )}
      </div>
    )
  }
}

export default Kleroterion
