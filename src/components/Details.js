import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import './css/DetailsStyles.css';
import Header from './Header';

export default function Details() {

  const { id } = useParams();
  const navigate = useNavigate();

  const getCharactersDetails = () => {
    return fetch('https://rickandmortyapi.com/api/character/' + id)
      .then((res) => res.json())

  }

  const { isLoading, error, data } = useQuery({ queryKey: ['character'], queryFn: getCharactersDetails })

  if (isLoading) return 'Cargando...'

  if (error) return 'Ocurrio un error: ' + error.message



  return (
    <>
             
        {/* <div className="placeholder-container">
          <h1 id="character-name-placeholder" className="character-name-placeholder"></h1>
        </div> */}
        <div className="grid">




          <div id="character-name-container" className="character-name-container">
            <div className="character-name">
              <h2>{data.name}</h2>
            </div>
          </div>

          <div id="character-image-container" className="character-image-container">
            <img className="character-image"

              src={data.image}
              alt={data.image}
            ></img>
          </div>



          <div id="character-description-container" className="character-description-container">
            <div className="character-labels">
              <h3 className="character-label">Género: {data.gender}</h3>
              <h3 className="character-label">Especie: {data.species} </h3>
              <h3 className="character-label">Estado: {data.status}</h3>

            
            </div>
          </div>



        </div>

    </>
  )
}
