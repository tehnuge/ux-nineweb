import React from 'react'
import './Card.css'

const Card = props => {
  return <div className="card">
    <div className="card-body text-center">
      <i style={{ fontSize: '50px'}} className={props.card.icon}></i>
      <h2 className="card-title">{props.card.name}</h2>
      <div className="card-text">
          {props.card.li.map(val => {
            return <div key={val}>{val}</div>
          })}
      </div>
      <a href={props.card.href} className="btn btn-primary">Learn more</a>
    </div>
  </div>
}

export default Card