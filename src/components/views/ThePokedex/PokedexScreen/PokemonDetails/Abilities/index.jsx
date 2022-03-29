import React from 'react'


import './Abilities.scss';

const index = ({ abilities }) => {
    return (
        <div className='abilities'>
            <h2>abilities</h2>
            <div>{
                abilities.map((ability) => {
                    return (
                        <h4 key={ability.ability.name}>{ability.ability.name}</h4>
                    )
                })
            }
            </div>
        </div>
    )
}

export default index