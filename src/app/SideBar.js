import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router'
import {browserHistory} from 'react-router'

export default class SideBar extends Component {
  constructor(props) {
    super(props)
  }

  link = page => event => window.location = '/#/' + page

  render() {
    return (
      <div className='sideBar'>
        <nav className='vertical'>
          <ul>
            <li onClick={this.link('')}><FontAwesome name='institution' /><span className='sideBar-item'>Court</span></li>
            <li onClick={this.link('dispute')}><FontAwesome name='gavel' /><span className='sideBar-item'>Dispute</span></li>
            <li onClick={this.link('buy')}><FontAwesome name='plus' /><span className='sideBar-item'>Buy Pinakion</span></li>
            <li onClick={this.link('settings')}><FontAwesome name='cogs' /><span className='sideBar-item'>Settings</span></li>
          </ul>
        </nav>
      </div>
    );
  }
}
