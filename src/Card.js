import React from 'react';
import './style.css';

export default function Card({ name, email, id }) {
  return (
    <div className="bg-dark-blue dib br3 pa3 ma2 grow tc bw2 shadow-5">
      <img
        alt="robots"
        width="200"
        src={`https://robohash.org/karnyong?set=set4`}
      />
      <div className="white">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
