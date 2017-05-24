import React, { Component, PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'

export default class GridList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='courts'>
        {this.props.content.map(card =>
          <div key={card.title} className='court' style={{background: `url(${card.img}) no-repeat`}}>
            <div></div>
            <div className='court-footer'>
              {card.title}
            </div>
          </div>
        )}
       </div>
    );
  }
}

GridList.propTypes = {
  content: PropTypes.array.isRequired,
}
