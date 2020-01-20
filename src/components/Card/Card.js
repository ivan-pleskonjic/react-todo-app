import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <h1 className="title">{props.title}</h1>
      <div className="body">
        {props.children}
      </div>
    </div>
  );
}

export default Card;