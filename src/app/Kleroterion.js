import React, {Component} from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'
import Court from '../../build/contracts/Court.json'

import '../www/styles/Kleroterion.scss'

const TESTRPC_HOST = 'localhost'
const TESTRPC_PORT = '8545'

class Kleroterion extends Component {

  state = {
    web3: false,
    balance: 0,
    addressContract: null,
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

  getDispute = contract => {
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
      </div>
    )
  }
}

export default Kleroterion
