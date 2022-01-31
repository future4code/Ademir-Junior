import React, {useState, useEffect } from 'react'
import { CharacterStyled } from "./styled"
import { getCharacterList } from "../../services/requests"


function CharacterListPage(props) { 
   const [characterList, setCharacterList] = useState([])

   useEffect(() => {
       getCharacterList(setCharacterList)
   },[])

   function showCharacters() {
       return characterList.map((character, index) => {
           return <CharacterStyled onClick={() => props.goToDetailsPage(character.url)} key={index}>{character.name}</CharacterStyled>
       })
    }

  return (
    <div>
      <h1>Lista de Personagens</h1>
      {showCharacters()}
     </div>
  );
}

export default CharacterListPage