import React, {Component} from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract} from 'truffle-contract'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import RaisedButton from 'material-ui/RaisedButton'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'



//import CourtBuyable from "../../build/contracts/BuyableCourt.json";

import '../www/styles/Kleroterion.scss'

class Kleroterion extends Component {

  state = {
    web3: false,
    balance: 0,
    nbDispute: 0,
    disputes: null,
    buyableCourtContract: null,
    disputes: [],
    minJuryToken: 0,
    voteStatus: 'Not arbitrable',
  }

  componentDidMount() {
    setTimeout(() => {
      if (typeof web3 !== 'undefined') {
        this.setState({web3: true})
        var buyableCourtContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"tokens","type":"uint256"}],"name":"activateTokensForArbitration","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"appealOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"atStake","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"voteA","type":"bool"}],"name":"arbitrate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"},{"name":"r","type":"uint256"},{"name":"t","type":"uint256"}],"name":"drawnTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"penalizationOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"accounts","type":"address[]"},{"name":"disputeIDs","type":"uint256[]"}],"name":"penalizeInactiveJuries","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"activatedJuryTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"voteA","type":"bool"}],"name":"voteRuling","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"appeal","type":"uint256"},{"name":"voteID","type":"uint256"},{"name":"stakeA","type":"bool"}],"name":"getVoteStake","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"r","type":"uint256"}],"name":"createDispute","outputs":[{"name":"disputeID","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"executeTokenRepartition","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"disputes","outputs":[{"name":"arbitratedContract","type":"address"},{"name":"session","type":"uint256"},{"name":"appeals","type":"uint256"},{"name":"r","type":"uint256"},{"name":"voteA","type":"uint256"},{"name":"voteB","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"partAtStakeDivisor","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"arbitralSegmentStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"session","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"endLastSession","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"account","type":"address"}],"name":"getHasVoted","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"untrustedExecuteRuling","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"voteOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"activationOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"appeal","type":"uint256"},{"name":"voteID","type":"uint256"}],"name":"getVoteAccount","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"disputeOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"r","type":"uint256"}],"name":"appealRuling","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"tokens","type":"uint256"}],"name":"activateTokensForJury","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"accounts","type":"address[]"},{"name":"disputeIDs","type":"uint256[]"}],"name":"penalizeInactiveArbitrators","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"minArbitralToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"activatedArbitrationTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"arbitralSession","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"getAppeals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"jurySegmentStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"executionOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"arbitralSegmentPosition","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"nextSession","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"jurySegmentEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"arbitralSegmentEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"buyTokens","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"nbDispute","outputs":[{"name":"nb","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"jurySession","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"},{"name":"r","type":"uint256"}],"name":"drawnArbiter","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"blocked","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"jurySegmentPosition","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"minJuryToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"accounts","type":"address[]"},{"name":"tokens","type":"uint256[]"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]);
        this.setState({buyableCourtContract})
        this.getMinJuryToken()
        this.getDisputes()

        let MyContract = contract({
          abi: [{"constant":false,"inputs":[{"name":"tokens","type":"uint256"}],"name":"activateTokensForArbitration","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"appealOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"atStake","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"voteA","type":"bool"}],"name":"arbitrate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"},{"name":"r","type":"uint256"},{"name":"t","type":"uint256"}],"name":"drawnTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"penalizationOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"accounts","type":"address[]"},{"name":"disputeIDs","type":"uint256[]"}],"name":"penalizeInactiveJuries","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"activatedJuryTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"voteA","type":"bool"}],"name":"voteRuling","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"appeal","type":"uint256"},{"name":"voteID","type":"uint256"},{"name":"stakeA","type":"bool"}],"name":"getVoteStake","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"r","type":"uint256"}],"name":"createDispute","outputs":[{"name":"disputeID","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"executeTokenRepartition","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"disputes","outputs":[{"name":"arbitratedContract","type":"address"},{"name":"session","type":"uint256"},{"name":"appeals","type":"uint256"},{"name":"r","type":"uint256"},{"name":"voteA","type":"uint256"},{"name":"voteB","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"partAtStakeDivisor","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"arbitralSegmentStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"session","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"endLastSession","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"account","type":"address"}],"name":"getHasVoted","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"untrustedExecuteRuling","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"voteOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"activationOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"appeal","type":"uint256"},{"name":"voteID","type":"uint256"}],"name":"getVoteAccount","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"disputeOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"},{"name":"r","type":"uint256"}],"name":"appealRuling","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"tokens","type":"uint256"}],"name":"activateTokensForJury","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"accounts","type":"address[]"},{"name":"disputeIDs","type":"uint256[]"}],"name":"penalizeInactiveArbitrators","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"minArbitralToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"activatedArbitrationTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"arbitralSession","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"getAppeals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"jurySegmentStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"executionOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"arbitralSegmentPosition","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"nextSession","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"jurySegmentEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"arbitralSegmentEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"buyTokens","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"nbDispute","outputs":[{"name":"nb","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"jurySession","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"},{"name":"r","type":"uint256"}],"name":"drawnArbiter","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"blocked","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"jurySegmentPosition","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"minJuryToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"accounts","type":"address[]"},{"name":"tokens","type":"uint256[]"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]
        })

        MyContract.setProvider(web3.currentProvider)
/*
        MyContract
          .at('0xc92aa8aF07aD57d023E8A2FE18175D69dDd6b02f')
          .then(c => c.balanceOf(web3.eth.accounts[0], {from: web3.eth.accounts[0]})
          .then(r => console.log('balance', r)))
*/
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
      let disputes = [...new Array(err.toNumber()-1).keys()]
      let hasVoted
      disputes.forEach(i => {
        this.getDispute(i+1, (res, errDispute) => {
          console.log('dispute', errDispute)
          this.state.buyableCourtContract
            .at('0xc92aa8aF07aD57d023E8A2FE18175D69dDd6b02f')
            .getHasVoted(i+1, web3.eth.accounts[0], {from: web3.eth.accounts[0]}, (_, resHasVoted) => {
              console.log('wf', resHasVoted.c[0])
              if (resHasVoted.c[0] == errDispute[1].c[0]) {
                hasVoted = true
              } else {
                hasVoted = false
              }

            })
          this.state.buyableCourtContract
            .at('0xc92aa8aF07aD57d023E8A2FE18175D69dDd6b02f')
            .minJuryToken((res, errMinJuryToken) => {
              console.log('errMinJuryToken:', errMinJuryToken)
              this.state.buyableCourtContract
                .at('0xc92aa8aF07aD57d023E8A2FE18175D69dDd6b02f')
                .drawnTokens(
                  web3.eth.accounts[0],
                  errDispute[3].c[0],
                  Math.pow(errDispute[2].c[0], 2) * errMinJuryToken.toNumber(),
                  {from: web3.eth.accounts[0]},
                  (res, errDisputeActive) => {
                    console.log('active dispute:', errDisputeActive.c[0])
                    console.log('hasVoted', hasVoted)
                    this.setState(
                      {
                        disputes: [...this.state.disputes,
                        {
                          dispute: errDispute,
                          active: errDisputeActive.c[0],
                          hasVoted: hasVoted
                        }]
                      }
                    )
                  }
                )
            })
          })
        })
      })
  }

  getDispute = (id, cb) => this.state.buyableCourtContract
    .at('0xc92aa8aF07aD57d023E8A2FE18175D69dDd6b02f')
    .disputes(id, {from: web3.eth.accounts[0]}, cb)// add dispute in state

  getBalance = () =>
    this.state.buyableCourtContract
    .at('0xc92aa8aF07aD57d023E8A2FE18175D69dDd6b02f')
    .balanceOf(web3.eth.accounts[0], {from: web3.eth.accounts[0]}, (res,err) => {
        this.setState({balance: isNaN(err) ? 0 : err.toNumber()/1000000000000000000})
        console.log('balance :', err)
      })

  getMinJuryToken = () => this.state.buyableCourtContract
    .at('0xc92aa8aF07aD57d023E8A2FE18175D69dDd6b02f')
    .minJuryToken((res,err) => this.setState({minJuryToken: err.toNumber()}))

  handleChange = field => ({ target: { value } }) => this.setState({ [field]: value })

  render() {
    return (
      <div id="container">
        <AppBar
          title={<Link to='/' style={{color: '#fff', textDecoration: 'none', position: 'relative', top: '-6px'}}>KLEROTERION <sup>alpha</sup></Link>}
          showMenuIconButton= {false}
          iconElementRight={<span><i>Balance :</i> {this.state.balance}</span>}
          iconStyleRight={{lineHeight: '50px', paddingRight: '50px'}}
        />

        <div className="content">

            {this.state.disputes.map(
              (obj, index) =>
                (
                  <Card style={{marginTop: '40px'}}>
                    <CardHeader
                      title="You have been selected to be a jury in the case Federico vs. Vitalik"
                      subtitle="Who made the best presentation?"
                    />
                    <CardMedia
                      overlay={<CardTitle title="Who made the best presentation?" subtitle="Frederico vs Vitalik" />}
                    >
                      <img src="images/nature-600-337.jpg" />
                    </CardMedia>
                    <CardTitle title="Breach a website contract" subtitle={obj.dispute[0]}/>
                    <CardText>
                      Frederico says he have done a better presentation as Vitalik.
                      <br/><br/>
                      Estoming solved time: 2 minutes
                    </CardText>
                    <CardActions>
                      { obj.active && !obj.hasVoted ?
                        <div className='center'>
                          <Link to={'arbitrate-contract/' + (index + 1)}>
                            <FlatButton label="Accept" />
                          </Link>
                          <FlatButton label="Deny" />
                        </div>
                        : <span></span>
                      }
                      { obj.active && obj.hasVoted ? <span>Voted</span>
                        : <span></span>
                      }
                      { !obj.active ? <span>Not arbitrable</span>
                        : <span></span>
                      }
                    </CardActions>
                  </Card>
                )
            )}

        </div>
        <div className="footer">
          <h2>KLEROTERION</h2>
          <p>Decentralized court project</p>
        </div>
      </div>
    )
  }
}

export default Kleroterion
