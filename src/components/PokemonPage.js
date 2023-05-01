import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  

  useEffect ( () => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then( json => setPokemon(json));
  }, []);


  function handleAddPokemon (newPokemon) {
    setPokemon([...pokemon, newPokemon]);
  }

  
  let visiblePokemon = pokemon.filter( poke => poke.name.toLowerCase().includes(search.toLowerCase()));

  
  

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search setSearch={setSearch} search={search} />
      <br />
      <PokemonCollection pokemon={visiblePokemon} />
    </Container>
  );
}

export default PokemonPage;
