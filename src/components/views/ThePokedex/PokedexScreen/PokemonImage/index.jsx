import React from 'react';

import './PokemonImage.scss';

const index = ({image}) => {
  return (
    <div className='pokemon-image-container'>
      <img src={image}/>
    </div>
  )
}

export default index;