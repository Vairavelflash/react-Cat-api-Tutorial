import React from 'react';
import './style.css';

export default function SearchBox({searchChange,searchfield}) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search cats"
        onChange={searchChange}
      />
    </div>
  );
}
