import React from 'react';
import {useInfiniteQuery} from '@tanstack/react-query';

const getCharacters = async ({ pageParam = 1 }) =>  {
    return await fetch(`https://rickandmortyapi.com/api/character?page=${pageParam}`)
        .then((res) => res.json())
        .then(data => ({ data: data.results, nextPage: data.info.next }));
};



const Characters = () => {
    

    const {
      data,
      error,
      fetchNextPage,
      hasNextPage,
      isFetching,
      isFetchingNextPage,
    } = useInfiniteQuery('character', getCharacters);

    if (isFetching && !isFetchingNextPage) return 'Cargando...'

    if (error) return 'Ocurrio un error: ' + error.message
    
    return (
        <div>
            {data.map((character) => (
                
                    <p key={character.id}>{character.name}</p>
                )
            )}
        </div>
    );
};    

export default Characters;