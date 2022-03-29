import React, { useEffect, useState } from 'react';


import { fetch20Pokemons } from '../../../api';
import PokedexScreen from './PokedexScreen';
import PokedexButton from './PokedexButton';

import './ThePokedex.scss';

const ThePokedex = () => {

    const [pokemonsInPage, setPokemonsInPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);



    useEffect(() => {
        const setInitialPage = async () => {
            await setPage();
        }

        setInitialPage();
    }, []);

    const setPage = async (direction) => {
        const pageData = await fetch20Pokemons(direction);
        setPokemonsInPage(pageData.pokemons);
        setPreviousPage(pageData.previousPage);
        setNextPage(pageData.nextPage);
    }

    return (
        <>
            {pokemonsInPage &&
                <div className='the-pokedex-container'>
                    <PokedexButton isDisabled={!previousPage} onClick={() => setPage(previousPage)}>Previous</PokedexButton>
                    <PokedexScreen
                        pokemons={pokemonsInPage}
                    />
                    <PokedexButton isDisabled={!nextPage}  onClick={() => setPage(nextPage)}>Next</PokedexButton>
                </div>
            }
        </>
    )
}

export default ThePokedex;