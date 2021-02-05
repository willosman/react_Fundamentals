import React, { useEffect, useState } from 'react';
import { CardColumns } from 'reactstrap';
import MortyChild from './MortyChild';


const MortyParent = () => { 

    const [characters, setCharacters] = useState([])

    const fetchMorty = () => {
        const url = "https://rickandmortyapi.com/api/character";
        fetch(url).then(res => res.json())
        .then(json => {
            setCharacters(json.results);
            console.log(json.results)})
    }

    useEffect(() => {
        fetchMorty();
    }, []); //[] is super important so page does not continously run React calls over and over. 

    const displayCards = () => {
        return characters.length > 0 ? characters.map((character) => <MortyChild mortyCharacter ={character}/>) : null;
    }

  return (
    <div>
      <button onClick={fetchMorty}>Fetch Morty</button>
      <CardColumns>
      {displayCards()}
      </CardColumns>
    </div>
  );
}
 
export default MortyParent;