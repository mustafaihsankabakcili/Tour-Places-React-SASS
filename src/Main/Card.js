import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <div className="title">
            <h1>{props.title}</h1>
        </div>
        <img src={props.image} alt="images"/>
        <div className="card-over">
            <p>
                {props.desc}
            </p>
        </div>
    </div>
  )
}

export default Card