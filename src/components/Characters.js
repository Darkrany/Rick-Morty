import React from 'react';
import {useInfiniteQuery} from '@tanstack/react-query';

const Characters = () => {
const getCharacters = async ({ pageParam }) => {
    const res = await fetch (pageParam)
       return res.json()
};


    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['character'],
        queryFn: getCharacters,
        initialPageParam: 'https://rickandmortyapi.com/api/character?page=1',
        getNextPageParam: (lastPage) => lastPage.info.next
    });


    if (isFetching && !isFetchingNextPage) return 'Cargando...'

    if (error) return 'Ocurrio un error: ' + error.message


    return (
        <>
        <div className="card-container">
            {
                data.pages.map((group) =>
                group.results.map((character) =>
                <div className="card" key={character.name}>
                    <div className="img-container">
                    <img className="img" src={character.image} alt={character.image}></img>
                    <div className ="description card">
                    <span className="title">{character.name}</span>
                    </div>
                    </div>
                </div>
                    
                        )
                )
            }
            
        </div>
        <button class="button-53" role="button" onClick={() =>fetchNextPage()}>Cargar más</button>
        </>
    );
};

export default Characters;