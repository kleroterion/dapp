import React, {Component} from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract} from 'truffle-contract'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import config from '../../config'

//import CourtBuyable from "../../build/contracts/BuyableCourt.json";

import '../www/styles/Kleroterion.scss'

const style = {
  width: 800,
  margin: 20,
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 40,
  paddingRight: 40,
  textAlign: 'center',
  display: 'inline-block',
};

class Kleroterion extends Component {

  state = {
    web3: false,
    balance: 0,
    nbDispute: 0,
    disputes: null,
    buyableCourtContract: null,
    disputes: [],
    minJuryToken: 0,
    contract: null,
    arbitrateLoader: 0,
  }

  componentDidMount() {
    setTimeout(() => {
      if (typeof web3 !== 'undefined') {
        // web3 = new Web3(web3.currentProvider);
        this.setState({web3: true})

        this.setState({web3: true})
        var buyableCourtContract = web3.eth.contract(config.buyableCourt.abi);
        this.setState({buyableCourtContract})


      } else {
        alert("install Metamask or use Mist")
      }
    }, 1000)
  }

  arbitrate = (e) => {
    console.log(e.target.value)
    this.setState({arbitrateLoader: 1})


    this.state.buyableCourtContract
      .at(config.buyableCourt.address)
      .voteRuling(this.props.params.disputeId, e.target.value, {from: web3.eth.accounts[0]}, (res, err) => {
        if (err != undefined) {
          console.log('arbitrate', err)
          this.setState({arbitrateLoader: 2})
        } else {
          window.location.assign('/#/')
        }
      })
  }

  goHome = () => window.location.assign("/")

  render() {
    return (
      <div id="container">
        <AppBar
          title={<Link to='/' style={{color: '#fff', textDecoration: 'none', position: 'relative', top: '-6px'}}>KLEROTERION <sup>alpha</sup></Link>}
          showMenuIconButton= {false}
          iconElementRight={<span><i>Balance :</i> {this.state.balance}</span>}
          iconStyleRight={{lineHeight: '50px', paddingRight: '30px'}}
        />

        <div className="content">

          <Paper style={style} zDepth={2}>
            <p>
              Frederico says he have done a better presentation as Vitalik.
              <br/><br/>
              <strong>Who made the best presentation, Vitalik or Frederico?</strong>
            </p>
          </Paper>
          {this.state.arbitrateLoader === 0 ?
            <div className='center'>
              <RaisedButton onClick={this.arbitrate} value={1} label="Federico" primary={true}/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <RaisedButton onClick={this.arbitrate} value={0} label="Vitalik" primary={true}/>
            </div>
            : <div></div>
          }
          {this.state.arbitrateLoader === 1 ? <img src='https://hangmanwordgame.com/static/img/loading.gif' /> : <div></div>}
          {this.state.arbitrateLoader === 2 ?
            <p className='center'>
              <strong>Your decision was submitted.</strong>
              <br/><br/>
              Thanks for the arbitrate.
              <br/><br/>
              <RaisedButton onClick={this.goHome} label="Back to the disputes" primary={true}></RaisedButton>
            </p>
            : <div></div>
          }
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
