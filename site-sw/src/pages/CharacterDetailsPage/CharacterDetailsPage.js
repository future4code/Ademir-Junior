import React, { useState, useEffect } from 'react';
import { getCharacterDetails, getPlanetDetails } from "../../services/requests"


function CharacterDetailsPage(props) { 
    const [details, setDetails] = useState({})
    const [planet, setPlanet] = useState({})

    useEffect(() => {
        getCharacterDetails(props.url, setDetails)
    }, [props.url])

    useEffect(() => {
        getPlanetDetails(details.homeworld, setPlanet)
    }, [details.homeworld])

  return (
    <div>
      <h1>Detalhes de Personagens</h1>
      {details.name && planet.name}
      <div>
          <p>Nome: {details.name}</p>
          <p>Planeta de origem: {planet.name}</p>
      </div>
      <p>Carregando...</p>

      <button onClick={props.goToListPage}>Voltar para lista de personagens</button>
     </div>
  )
}

export default CharacterDetailsPage