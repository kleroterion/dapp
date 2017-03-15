import React, {Component} from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'
import Kleroterion from '../../build/contracts/Kleroterion.json'

import '../www/styles/Kleroterion.scss'

const TESTRPC_HOST = 'localhost'
const TESTRPC_PORT = '8545'

class Kleroterion extends Component {

  state = {
    web3: false,
    balance: 0,
    addressContract: null,
    delegate: null,
    metaContract: null,
    accounts: null,
    askMembership: null,
    web3RPC: null,
    name: '',
    valueDeposit: 0,
    dataDeposit: '',
    proposals: [],
  }

  componentDidMount() {
    let kleroterion = ''
    setTimeout(() => {
      if (typeof web3 !== 'undefined') {
        // web3 = new Web3(web3.currentProvider);
        this.setState({web3: true})
        let meta = contract(Kleroterion)
        this.setState({metaContract: meta})
        let provider = new Web3.providers.HttpProvider(`http://${TESTRPC_HOST}:${TESTRPC_PORT}`)
        let metaCoinBalance = 0
        meta.setProvider(provider)
        const web3RPC = new Web3(provider)
        this.setState({web3RPC})
        // Get accounts.
        web3RPC.eth.getAccounts((err, acc) => {
          console.log(err)
          console.log("accounts :", acc)
          this.setState({accounts: acc})
          return meta.deployed()
            .then(contract => {
              this.setState({addressContract: contract.address})
            })
            .catch(err => console.error(err))
        })
      } else {
        alert("install Metamask or use Mist")
      }
    }, 1000)
  }

  getProposals = contract => {
    this.state.metaContract.at(this.state.addressContract)
      .then(contract => contract.nbProposalsFund())
      .then(result => [...new Array(result.toNumber()).keys()])
      .then(range => (
        Promise.all(range.map(i => contract.proposals(i)))
          .then(results => this.setState({ proposals: results }))
      ))
      .catch(err => console.error(err))
  }

  handleChange = field => ({ target: { value } }) => this.setState({ [field]: value })

  render() {
    return (
      <div id="container">
        <h1>Kleroterion</h1>
        <p>Balance : {this.state.balance}</p>
        <p>
            Set Delegate <input type="text" onChange={this.handleChange('delegate')} />
            <button onClick={this.setDelegate}>Add address</button>
        </p>
        <p>
            Ask Membership <input type="text" onChange={this.handleChange('askMembership')} />
            <button onClick={this.askMembership}>Ask membership</button>
        </p>
        <p>
          Add proposal&nbsp;
          <input type="text" onChange={this.handleChange('name')} placeholder="Name of the proposition (hex)" />
          <input type="text" onChange={this.handleChangeRequestAmount} placeholder="Requested amount (Wei)" />
          <input type="text" onChange={this.handleChangeDescription} placeholder="Link IPFS" />
          <button onClick={this.addProposal}>Submit add proposal</button>
        </p>
        <p>
          Proposals
        </p>
        <ul>
          {this.state.proposals.map(
            (obj, index) => <li key={index}>{obj.toString()}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Kleroterion
