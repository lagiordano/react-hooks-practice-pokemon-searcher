import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {


  const renderedPokemon = pokemon.map( poke => <PokemonCard poke={poke} key={poke.id} /> );

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {renderedPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
