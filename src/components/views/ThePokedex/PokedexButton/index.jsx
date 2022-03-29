import React from 'react'

import './PokedexButton.scss';

const PokedexButton = ({children, onClick, isDisabled}) => {

  const disabledClass = isDisabled ? 'disabled' : ''

  return (
    <button className={`pokedex-button ${disabledClass}`} onClick={onClick} disabled={isDisabled}>
       <h3>{children}</h3> 
    </button>
  )
}

export default PokedexButton;