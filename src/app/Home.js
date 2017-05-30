import React, {Component} from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract} from 'truffle-contract'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Identicon from './Identicon'
import Divider from 'material-ui/Divider'
import Toggle from 'material-ui/Toggle'
import SideBar from './SideBar'
import GridCard from './GridCard'
import config from '../../config'
import Footer from './Footer'
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
          iconElementRight={<span><Identicon seed='tesdt' /> PNK: Π0.001</span>}
          style={{backgroundColor: 'rgba(0, 0, 0, 1)', color: 'rgba(255, 255, 255, 1)'}}
          iconStyleRight={{margin: '14px 0 0 0'}}
        />

        <div className="content">
          <SideBar />
          <div className='bodyContent'>
            <div className='title-court'>
              <div>
                <h1>General court</h1>
              </div>
              <div>
                <Toggle
                  label=""
                  style={{alignSelf: 'flex-end'}}
                />
              </div>
            </div>
            <GridCard content={[
                {'title' : 'B2B', 'img' : 'http://www.toprankblog.com/wp-content/uploads/people-focused-b2b-marketing.jpg'},
                {'title' : 'B2C', 'img' : 'http://www.toprankblog.com/wp-content/uploads/people-focused-b2b-marketing.jpg'},
                {'title' : 'Freelance', 'img' : 'http://www.toprankblog.com/wp-content/uploads/people-focused-b2b-marketing.jpg'}
              ]}
            />
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Kleroterion
