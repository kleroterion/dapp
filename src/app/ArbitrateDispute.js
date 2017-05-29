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
import Identicon from './Identicon'
import Divider from 'material-ui/Divider'
import Toggle from 'material-ui/Toggle'
import SideBar from './SideBar'
import GridCard from './GridCard'
import Slider from 'material-ui/Slider'
import config from '../../config'
import Footer from './Footer'
//import CourtBuyable from "../../build/contracts/BuyableCourt.json";

import '../www/styles/Kleroterion.scss'

class ArbitrateDispute extends React.Component {
  state = {
    slider: 50,
  };

  handleSlider = (event, value) => {
    this.setState({slider: value});
  };

  render () {
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
                <h1>Arbitrate Dispute</h1>
              </div>
            </div>
            <h1 style={{textAlign: 'center'}}>What is the best developer on Ethereum ?</h1>
            <div className='cards-dispute'>
              <div className='cards-dispute-item'>
                <Card style={{filter: `grayscale(${this.state.slider}%)`}}>
                  <CardHeader
                    title="Vitalik Buttarin"
                    subtitle="Funder"
                    avatar="https://pbs.twimg.com/profile_images/421617820644810752/rncc5OWi.jpeg"

                  />
                  <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                  >
                    <img src="https://i2.wp.com/www.ethereum-france.com/wp-content/uploads/2016/05/Vitalik-Buterin.jpg?fit=968%2C544&ssl=1" />
                  </CardMedia>
                  <CardTitle title="Card title" subtitle="Card subtitle" />
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
                  <CardActions>
                    <FlatButton label="Attachment1" />
                    <FlatButton label="Attachment2" />
                  </CardActions>
                </Card>
                <p className='percent'>{100 - this.state.slider} %</p>
              </div>
              <div className='cards-dispute-item'>
                <Card style={{filter: `grayscale(${100 - this.state.slider}%)`}}>
                  <CardHeader
                    title="Vlad Zamfir"
                    subtitle="Developer"
                    avatar="https://pbs.twimg.com/profile_images/683736320691298305/jHM6N6FK.png"
                  />
                  <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                  >
                    <img src="https://epicenter.tv/app/uploads/2016/03/vlad-zamfir-video-podcast.jpg" />
                  </CardMedia>
                  <CardTitle title="Card title" subtitle="Card subtitle" />
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
                  <CardActions>
                    <FlatButton label="Attachment1" />
                    <FlatButton label="Attachment2" />
                  </CardActions>
                </Card>
                <p className='percent'>{this.state.slider} %</p>
              </div>
            </div>
            <div>
              <Slider
                defaultValue={50}
                min={0}
                max={100}
                step={1}
                value={this.state.slider}
                onChange={this.handleSlider}
              />
            </div>
            <div>
              <RaisedButton label="Save the arbitration" primary={true} fullWidth={true} style={{margin: '0 0 40px 0'}}/>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default ArbitrateDispute
