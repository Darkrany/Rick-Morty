import React from 'react';
import {useQuery} from '@tanstack/react-query'
const Characters = () => {

    const getCharacters = () =>  {
        return fetch('https://rickandmortyapi.com/api/character')
            .then((res) => res.json())
            .then((data) => {
                return data.results.map((character) => ({
                    id: character.id,
                    name: character.name,
                    img: character.image,
                }));
            });
    }

    const { isLoading, error, data } = useQuery({ queryKey: ['character'], queryFn: getCharacters })

    if (isLoading) return 'Cargando...'

    if (error) return 'Ocurrio un error: ' + error.message

    return (
        <div>
            {data.map((character) => (
                <p>{character.name}</p>
            ))}
        </div>
    );
};

export default Characters;