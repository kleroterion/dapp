import React, {Component} from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract} from 'truffle-contract'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import SideBar from './SideBar'
import GridCard from './GridCard'
import Identicon from './Identicon'
import Footer from './Footer'

import '../www/styles/Kleroterion.scss'

const Dispute = () => (
      <div id="container">
        <AppBar
          title={<Link to='/' style={{fontFamily: 'code', letterSpacing: '10px', color: '#fff', textDecoration: 'none', position: 'relative', top: '-6px'}}>KLEROTERION<sup style={{fontFamily: 'Roboto, sans-serif', letterSpacing: '0px'}}>ALPHA</sup></Link>}
          showMenuIconButton= {false}
          iconElementRight={<Identicon seed='tesdt' />}
          style={{backgroundColor: 'rgba(0, 0, 0, 1)', color: 'rgba(255, 255, 255, 1)'}}
          iconStyleRight={{margin: '14px 0 0 0'}}
        />

        <div className="content">
          <SideBar />
          <div className='bodyContent'>
            <div className='title-court'>
              <div>
                <h1>Dispute</h1>
              </div>
            </div>
            <GridCard content={[
                {'title' : 'Ethereum', 'img' : 'http://dukelong.com/wp-content/uploads/2015/05/Ethereumpic1.png'},
                {'title' : 'Akasha', 'img' : 'http://www.toprankblog.com/wp-content/uploads/people-focused-b2b-marketing.jpg'},
                {'title' : 'OpenBazzar', 'img' : 'http://www.toprankblog.com/wp-content/uploads/people-focused-b2b-marketing.jpg'},
                {'title' : 'Steemit', 'img' : 'http://www.toprankblog.com/wp-content/uploads/people-focused-b2b-marketing.jpg'}
              ]}
            />
          </div>
        </div>

        <Footer />
      </div>
    )

export default Dispute
