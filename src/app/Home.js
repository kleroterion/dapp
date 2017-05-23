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
import FontAwesome from 'react-fontawesome'
import Identicon from './Identicon'
import config from '../../config'
//import CourtBuyable from "../../build/contracts/BuyableCourt.json";

import '../www/styles/Kleroterion.scss'

class Kleroterion extends Component {

  state = {
  }

  render() {
    return (

      <div id="container">
        <AppBar
          title={<Link to='/' style={{fontFamily: 'code', letterSpacing: '10px', color: '#fff', textDecoration: 'none', position: 'relative', top: '-6px'}}>KLEROTERION<sup style={{fontFamily: 'Roboto, sans-serif', letterSpacing: '0px'}}>ALPHA</sup></Link>}
          showMenuIconButton= {false}
          iconElementRight={<Identicon seed='tesdt' />}
          style={{backgroundColor: 'rgba(0, 0, 0, 1)', color: 'rgba(255, 255, 255, 1)'}}
          iconStyleRight={{margin: '14px 0 0 0'}}
        />

        <div className="content">
            <div className='sideBar'>
              <nav className='vertical'>
                <ul>
                  <li><FontAwesome name='institution' /><a href="">Court</a></li>
                  <li><FontAwesome name='gavel' /><a href="">Dispute</a></li>
                  <li><FontAwesome name='plus' /><a href="">Buy token</a></li>
                  <li><FontAwesome name='cogs' /><a href="">Settings</a></li>
                </ul>
              </nav>
            </div>

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
