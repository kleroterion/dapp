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
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import config from '../../config'

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
    activatedJuryTokens: 0,
    buyableCourt: null,
    cards: [
      {
        title: "You have been selected to be a jury in the case Federico vs. Vitalik",
        subtitle: "Who made the best presentation?",
        cardTitle: "Who made the best presentation?",
        cardSubTitle: "Frederico vs Vitalik",
        img: 'https://raw.githubusercontent.com/kleroterion/dapp/51e651de659227acd5023a55ea6fa2076f935410/src/www/img/vitalik_vs_frederico.png',
      },
    ],
  }

  componentDidMount() {
    setTimeout(() => {
      if (typeof web3 !== 'undefined') {
        this.setState({web3: true})
        let buyableCourtContract = web3.eth.contract(config.buyableCourt.abi);
        this.setState({buyableCourtContract})
        let buyableCourt = contract({
          abi: config.buyableCourt.abi
        })
        buyableCourt.setProvider(web3.currentProvider)
        this.setState({buyableCourt})
        this.getMinJuryToken()
        this.getDisputes()

        console.log('test',this.state.buyableCourtContract.at(config.buyableCourt.address))

        this.getBalance()

        this.getActivatedJuryTokens()
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

  getActivatedJuryTokens = () => {
    this.state.buyableCourt
      .at(config.buyableCourt.address)
      .then(res => res.activatedJuryTokens(web3.eth.accounts[0])
        .then(r => this.setState({activatedJuryTokens: r.toNumber()}))
      )
  }

  activatedJuryTokens = () => {
    this.state.buyableCourt
      .at(config.buyableCourt.address)
      .then(res => res.activateTokensForJury(this.state.activatedJuryTokens, {from: web3.eth.accounts[0]})
        .then(r => console.log('activateTokensForJury', r))
      )
  }

  getDisputes = () => {
    this.state.buyableCourtContract
    .at(config.buyableCourt.address)
    .nbDisputes({from: web3.eth.accounts[0]}, (err,res) => {
      this.setState({nbDispute: res.toNumber()})
      console.log('nbDispute :', this.state.nbDispute)
      let disputes = [...new Array(res.toNumber()-1).keys()]
      let hasVoted
      disputes.forEach(i => {
        this.getDispute(i+1, (err, resDispute) => {
          console.log('dispute', resDispute)
          this.state.buyableCourtContract
            .at(config.buyableCourt.address)
            .getHasVoted(i+1, web3.eth.accounts[0], {from: web3.eth.accounts[0]}, (_, errHasVoted) => {
              console.log('errHasVoted', errHasVoted.c[0])
              if (errHasVoted.c[0] == resDispute[1].c[0]) {
                hasVoted = true
              } else {
                hasVoted = false
              }

            })
          this.state.buyableCourtContract
            .at(config.buyableCourt.address)
            .minJuryToken((err, resMinJuryToken) => {
              console.log('resMinJuryToken:', resMinJuryToken)
              this.state.buyableCourtContract
                .at(config.buyableCourt.address)
                .drawnTokens(
                  web3.eth.accounts[0],
                  resDispute[3].c[0],
                  Math.pow(resDispute[2].c[0], 2) * resMinJuryToken.toNumber(),
                  {from: web3.eth.accounts[0]},
                  (err, resDisputeActive) => {
                    console.log('active dispute:', resDisputeActive.c[0])
                    console.log('hasVoted', hasVoted)
                    this.setState(
                      {
                        disputes: [...this.state.disputes,
                        {
                          dispute: resDispute,
                          active: resDisputeActive.c[0],
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
    .at(config.buyableCourt.address)
    .disputes(id, {from: web3.eth.accounts[0]}, cb)// add dispute in state

  getBalance = () =>
    this.state.buyableCourtContract
    .at(config.buyableCourt.address)
    .balanceOf(web3.eth.accounts[0], {from: web3.eth.accounts[0]}, (err,res) => {
        this.setState({balance: isNaN(res) ? 0 : res.toNumber()})
        console.log('balance :', res)
      })

  getMinJuryToken = () => this.state.buyableCourtContract
    .at(config.buyableCourt.address)
    .minJuryToken((err,res) => this.setState({minJuryToken: res.toNumber()}))

  handleChange = field => ({ target: { value } }) => this.setState({ [field]: value })

  buyTokens = () =>
    this.state.buyableCourtContract
    .at(config.buyableCourt.address)
    .buyTokens({from: web3.eth.accounts[0], value: 1000000000000000000}, (err, res) => {
        console.log('buy tokens :', res)
        console.log('err', err)
      })

  render() {
    return (
      <div id="container">
        <AppBar
          title={<Link to='/' style={{color: '#fff', textDecoration: 'none', position: 'relative', top: '-6px'}}>KLEROTERION <sup>alpha</sup></Link>}
          showMenuIconButton= {false}
          iconElementRight={
            <span>
              <i>Balance</i> : {this.state.balance}
              <FlatButton
                backgroundColor="#fff"
                className='buyTokens'
                label="Buy Tokens"
                style={{marginLeft:'30px', marginRight:'30px'}}
                onClick={this.buyTokens}
              />
              <i>Activated</i> : {this.state.activatedJuryTokens}
              {
                this.state.balance > 0 && this.state.activatedJuryTokens < 1 ?
                <FlatButton
                  backgroundColor="#fff"
                  className='buyTokens'
                  label="Activated Tokens"
                  style={{marginLeft:'30px'}}
                  onClick={this.activatedJuryTokens}
                />
                : <div></div>
              }
            </span>
          }
          iconStyleRight={{lineHeight: '50px', paddingRight: '50px'}}
        />

        <div className="content">

            {this.state.disputes.map(
              (obj, index) =>
                (
                  <Card style={{marginTop: '40px'}} key={index}>
                    <CardHeader
                      title={this.state.cards[index] ? this.state.cards[index].title : ''}
                      subtitle={this.state.cards[index] ? this.state.cards[index].subtitle : ''}
                    />
                    <CardMedia
                      overlay={<CardTitle
                        title={this.state.cards[index] ? this.state.cards[index].cardTitle : ''}
                        subtitle={this.state.cards[index] ? this.state.cards[index].cardSubTitle : ''} />}
                    >
                      <img src="https://raw.githubusercontent.com/kleroterion/dapp/51e651de659227acd5023a55ea6fa2076f935410/src/www/img/vitalik_vs_frederico.png" />
                    </CardMedia>
                    <CardText>
                      <a href={'https://testnet.etherscan.io/address/' + obj.dispute[0]}>{obj.dispute[0]}</a>
                      <br/><br/>
                      Frederico says he have done a better presentation as Vitalik.
                      <br/><br/>
                      Estimated solved time: 2 minutes
                    </CardText>
                    <CardActions>
                      { obj.active && !obj.hasVoted ?
                        <div className='center'>
                          <Link to={'arbitrate-contract/' + (index + 1)}>
                            <FlatButton label="Rule" />
                          </Link>
                        </div>
                        : <span></span>
                      }
                      { !obj.active ? <span>This dispute has already been solved</span>
                        : <span></span>
                      }
                    </CardActions>
                  </Card>
                )
            )}
        </div>
        <div className="footer">
          <h3>KLEROTERION</h3>
          <p>Decentralized court project</p>
        </div>
      </div>
    )
  }
}

export default Kleroterion
