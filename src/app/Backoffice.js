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
    open: false,
  }

  handleTouchTap = () => this.setState({open: true})

  handleRequestClose = () => this.setState({open: false})

  handleChange = name => event => this.setState({[name]: event.target.value})

  setAddressBuyableCourt = () => localStorage.setItem('addressBuyableCourt', this.state.addressBuyableCourt)

  render() {
    return (
      <div id="container">
        <AppBar
          title={<Link to='/' style={{color: '#fff', textDecoration: 'none', position: 'relative', top: '-6px'}}>KLEROTERION <sup>admin</sup></Link>}
          showMenuIconButton= {false}
        />

        <div className="content">

          <Paper style={style} zDepth={2}>
            <h1>Address BuyableCourt</h1>
            <TextField
              hintText="Address BuyableCourt"
              onChange={this.handleChange('addressBuyableCourt')}
            />
          <RaisedButton style={styleButton} label="Save" onClick={this.setAddressBuyableCourt} onTouchTap={this.handleTouchTap} />
          <Snackbar
            open={this.state.open}
            message={"Address BuyableCourt saved."}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
            bodyStyle={{backgroundColor: 'rgb(255, 64, 129)'}}
          />
        {console.log(this.state)}
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
