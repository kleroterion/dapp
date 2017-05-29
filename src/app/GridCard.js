import React, { Component, PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'

const GridList = props =>
  (
    <div className='cards'>
      {props.content.map(card =>
        <div onClick={event => {window.location='/#/arbitrate-dispute'}} key={card.title} className='card' style={{background: `url(${card.img}) no-repeat center`, backgroundSize: 'cover'}}>
          <div></div>
          <div className='card-footer'>
            {card.title}
          </div>
        </div>
      )}
     </div>
   )

export default GridList
