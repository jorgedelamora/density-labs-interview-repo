import React from 'react'

import { Tooltip } from 'antd';

import './PokemonListItem.scss';

const PokemonListItem = ({ pokemon, onClick }) => {

  const handleClick = (e) => {
    onClick(e, pokemon.name);
  }

  return (
    <div className='pokemon-list-item-container' onClick={(e) => handleClick(e)}>
      <Tooltip title='click for image, double click for details' color='rgba(0,0,0,0.9)' mouseLeaveDelay={0}>
        <h4>{pokemon.name}</h4>
      </Tooltip>
    </div>
  )
}

export default PokemonListItem;