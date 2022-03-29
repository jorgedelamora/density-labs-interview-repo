import React from 'react'

import CloseButton from '../../../../commons/CloseButton';
import Abilities from './Abilities';
import PokemonImage from '../PokemonImage';

import './PokemonDetails.scss';

const PokemonDetails = ({details, closeDetails}) => {
  
  console.log(details);
  
  return (
    <div className='pokemon-details-container'>
      <h1 className='title'>{details.name}</h1>
      <div className='content'>
        <Abilities abilities={details.abilities} />
        <div className='images'>
          <PokemonImage image={details.sprites.front_default} />
          <PokemonImage image={details.sprites.back_default} />
        </div>
      </div>
      <div className='close-button'>
        <CloseButton onClick={closeDetails}/>
      </div>
    </div>
  )
}

export default PokemonDetails;