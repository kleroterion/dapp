import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class SideBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
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
    );
  }
}
