import React, {Component} from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract} from 'truffle-contract'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Identicon from './Identicon'
import SideBar from './SideBar'
import Footer from './Footer'

import '../www/styles/Kleroterion.scss'

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
}

const tableData = [
  {
    amount: '100Ξ',
    date: '	05-23-17 18:56:42 +0200',
  },
  {
    amount: '100Ξ',
    date: '	05-23-17 18:56:42 +0200',
  },
  {
    amount: '100Ξ',
    date: '	05-23-17 18:56:42 +0200',
  },
  {
    amount: '100Ξ',
    date: '	05-23-17 18:56:42 +0200',
  },
  {
    amount: '100Ξ',
    date: '	05-23-17 18:56:42 +0200',
  },
  {
    amount: '100Ξ',
    date: '	05-23-17 18:56:42 +0200',
  },
  {
    amount: '100Ξ',
    date: '	05-23-17 18:56:42 +0200',
  },
];

class Buy extends Component {

  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: '300px',
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
          <SideBar />
          <div className='bodyContent'>
            <div className='title-court'>
              <div>
                <h1>Pinakion token</h1>
              </div>
              <div className='price-token'>
                ETH: Ξ0.001
              </div>
            </div>
            <div className='subContent'>
              <div>
                <TextField
                  hintText="Amount in Ether Ξ"
                />
                <RaisedButton label="Buy Pinakion" primary={true} style={{margin: '12px'}} />
              </div>
              <div>
                <Table
                  height={this.state.height}
                  fixedHeader={this.state.fixedHeader}
                  fixedFooter={this.state.fixedFooter}
                  selectable={false}
                  multiSelectable={false}
                  style={{backgroundColor: 'transparent'}}
                >
                  <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                    enableSelectAll={this.state.enableSelectAll}
                  >
                    <TableRow>
                      <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                      <TableHeaderColumn tooltip="The Amount">Amount</TableHeaderColumn>
                      <TableHeaderColumn tooltip="The Date">Date</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody
                    displayRowCheckbox={false}
                    deselectOnClickaway={this.state.deselectOnClickaway}
                    showRowHover={this.state.showRowHover}
                    stripedRows={this.state.stripedRows}
                  >
                    {tableData.map( (row, index) => (
                      <TableRow key={index}>
                        <TableRowColumn>{index}</TableRowColumn>
                        <TableRowColumn>{row.amount}</TableRowColumn>
                        <TableRowColumn>{row.date}</TableRowColumn>
                      </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Buy
