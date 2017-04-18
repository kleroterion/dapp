import React, {Component} from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract} from 'truffle-contract'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Snackbar from 'material-ui/Snackbar'
import config from '../../config'

import '../www/styles/Kleroterion.scss'

const style = {
  width: 800,
  margin: 20,
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 40,
  paddingRight: 40,
  display: 'inline-block',
}

const styleButton = {
  marginLeft: 20,
}

class Kleroterion extends Component {

  state = {
    addressBuyableCourt: '',
    addressDemoArbitrable: '',
    demoArbitrable: '',
    open: false,
  }

  componentDidMount() {
    setTimeout(() => {
      if (typeof web3 !== 'undefined') {
        let demoArbitrable = contract({
          abi: config.demoArbitrable.abi
        })
        demoArbitrable.setProvider(web3.currentProvider)

        this.setState({demoArbitrable})

      } else {
        alert("install Metamask or use Mist")
      }
    }, 500)
  }

  executeDemo = () => {
    console.log(this.state.addressDemoArbitrable)
    this.state.demoArbitrable
      .at(this.state.addressDemoArbitrable)
      .then(res => res.executeDemo({from: web3.eth.accounts[0]})
        .then(res => console.log(res))
      )
  }

  handleTouchTap = () => this.setState({open: true})

  handleRequestClose = () => this.setState({open: false})

  handleChange = name => event => this.setState({[name]: event.target.value})

  setAddressBuyableCourt = () => localStorage.setItem('addressBuyableCourt', this.state.addressBuyableCourt)

  setAddressDemoArbitrable = () => localStorage.setItem('addressDemoArbitrable', this.state.addressDemoArbitrable)

  render() {
    return (
      <div id="container">
        <AppBar
          title={<Link to='/' style={{color: '#fff', textDecoration: 'none', position: 'relative', top: '-6px'}}>KLEROTERION <sup>admin</sup></Link>}
          showMenuIconButton= {false}
        />

        <div className="content">

          <Paper style={style} zDepth={2}>
            <h1>Demo court</h1>
            <TextField
              hintText={localStorage.getItem('addressBuyableCourt') ? localStorage.getItem('addressBuyableCourt') : "Address BuyableCourt"}
              onChange={this.handleChange('addressBuyableCourt')}
            />
          <RaisedButton
            style={styleButton}
            label="Save"
            onClick={this.setAddressBuyableCourt}
            onTouchTap={this.handleTouchTap}
          />

          <h1>Demo arbitrable</h1>
          <TextField
            hintText={localStorage.getItem('addressDemoArbitrable') ? localStorage.getItem('addressDemoArbitrable') : "Address demo arbitrable"}
            onChange={this.handleChange('addressDemoArbitrable')}
          />
          <RaisedButton
            style={styleButton}
            label="Save"
            onClick={this.setAddressDemoArbitrable}
            onTouchTap={this.handleTouchTap}
          />
          <Snackbar
            open={this.state.open}
            message={"Address saved."}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
            bodyStyle={{backgroundColor: 'rgb(255, 64, 129)', textAlign: 'center'}}
          />
          {
            this.state.addressDemoArbitrable
              ? <RaisedButton label="Execute demo" primary={true} onClick={this.executeDemo} />
              : v => v
          }
        </Paper>

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
