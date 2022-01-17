import React from 'react';
import './index'

export default ({ title, items }) => {
  return (
    <div className='movieRow'>
      <h2>{title}</h2>
      <div className='movieRow--listarea'>
        <div className='movieRow--list'></div>
        {items.results.length > 0 && items.results.map((item, key) => (
          <div key={key} className='movieRow--item'>
            <img src={`https://image.tmdb.org/t/p/w300${item.poster_}`}></img>
          </div>
        ))}
      </div>
    </div>
  );
}