import React, { Component, PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'

export default class GridList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='cards'>
        {this.props.content.map(card =>
          <div key={card.title} className='card' style={{background: `url(${card.img}) no-repeat`}}>
            <div></div>
            <div className='card-footer'>
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
