import React, { useState }  from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';
import { useDebounce } from "use-debounce";



const STATUS_OPTIONS = [
  {
    label: 'Estado',
    value: ''
  },
  
  {
    label: 'Vivo',
    value: 'alive',
  },
  {
    label: 'Muerto',
    value: 'dead',
  },
  {
    label: 'Desconocido',
    value: 'unknown',
  },

]



const Characters = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [searchDebounced] = useDebounce(search, 750);

  const getCharacters = async ({ pageParam }) => {
    const url = 'https://rickandmortyapi.com/api/character';
    const res = await fetch(pageParam + `&name=${searchDebounced}&status=${status}`);
  
    // la api de rick y morty no devuelve un 200 cuando no hay resultados, 
    // devuelve un 404
    if (res.status === 404)
      throw new Error('No hay resultados para la búsqueda!')
    return res.json();
  };  



  const handleChange = event => {
    setSearch(event.target.value);
  };


  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["character", searchDebounced, status],
    queryFn: getCharacters,
    initialPageParam: "https://rickandmortyapi.com/api/character?page=1",
    getNextPageParam: (lastPage) => lastPage.info.next,
  });

  // if (isFetching && !isFetchingNextPage) return "Cargando...";

  if (error) return "Ocurrio un error: " + error.message;

  return (
    <>
     

        <input id="text" 
        name="search"
        className="search"
        type="search" 
        placeholder="Busqueda de personaje..." 
        onChange={handleChange}
        value={search}     
        />


        <select className="select" onChange={e => {
          const index = e.target.selectedIndex;

          setStatus(STATUS_OPTIONS[index].value)
        }}>
          {STATUS_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>







      <div className="card-container">
        {data && data.pages.map((group) =>
          group.results.map((character) => (
            <Link key={character.id} to={`/details/${character.id}`}>
              <div className="card" key={character.name}>
                <div className="img-container">
                  <img
                    className="img"
                    src={character.image}
                    alt={character.image}
                  ></img>
                  <div className="description card">
                    <span className="title">{character.name}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {hasNextPage && <button className="button-53" role="button" onClick={() => fetchNextPage()}>
        Cargar más
      </button>}
    </>
  );
};

export default Characters;
