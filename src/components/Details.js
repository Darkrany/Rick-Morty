import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {  useQuery } from '@tanstack/react-query';



export default function Details() {

const { id } = useParams();
const navigate = useNavigate();

const getCharactersDetails = () =>  {
  return fetch('https://rickandmortyapi.com/api/character/'+id)
      .then((res) => res.json())
      
}

const { isLoading, error, data } = useQuery({ queryKey: ['character'], queryFn: getCharactersDetails })

if (isLoading) return 'Cargando...'

if (error) return 'Ocurrio un error: ' + error.message



  return (
   <>
   
   <p>{data.id}</p>
   <p>{data.name}</p>

  

   </>
  )
}
