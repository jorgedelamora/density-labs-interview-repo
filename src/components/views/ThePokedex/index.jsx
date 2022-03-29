import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';


import { fetch20Pokemons } from '../../../api';
import PokedexScreen from './PokedexScreen';
import PokedexButton from './PokedexButton';
import { deviceSize } from '../../../utils/responsive';

import './ThePokedex.scss';


const ThePokedex = () => {
    
    const [pokemonsInPage, setPokemonsInPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
    
    
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
                    {isMobile &&
                        <>
                            <PokedexScreen
                                pokemons={pokemonsInPage}
                            />
                            <div>
                                <PokedexButton isDisabled={!previousPage} onClick={() => setPage(previousPage)}>Previous</PokedexButton>
                                <PokedexButton isDisabled={!nextPage} onClick={() => setPage(nextPage)}>Next</PokedexButton>
                            </div>
                        </>
                    }
                    {!isMobile &&
                        <>
                            <PokedexButton isDisabled={!previousPage} onClick={() => setPage(previousPage)}>Previous</PokedexButton>
                            <PokedexScreen
                                pokemons={pokemonsInPage}
                            />
                            <PokedexButton isDisabled={!nextPage} onClick={() => setPage(nextPage)}>Next</PokedexButton>
                        </>
                    }
                </div>
            }
        </>
    )
}

export default ThePokedex;