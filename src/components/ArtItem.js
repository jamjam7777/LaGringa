import React from 'react'

function ArtItem({ image, name, price}) {
  return (
    <div className='artItem'>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1> {name} </h1>
        <p> ${price} </p>
    </div>
  );
}

export default ArtItem;