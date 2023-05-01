import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm ({onAddPokemon}) {

  const [missingPokemon, setMissingPokemon] = useState({
    name: "",
    hp: 0,
    frontUrl: "",
    backUrl: "",
  });

  function handleFormChange (e) {
    setMissingPokemon({
      ...missingPokemon,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit (e) {
    e.preventDefault();

    const newPokemon = {
      name: missingPokemon.name,
      hp: missingPokemon.hp,
      sprites: {
        front: missingPokemon.frontUrl,
        back: missingPokemon.backUrl,
      },
    };

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
    .then(r => r.json())
    .then(onAddPokemon);

    setMissingPokemon({
      name: "",
      hp: 0,
      frontUrl: "",
      backUrl: "",
    })
  }




  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleFormChange} value={missingPokemon.name}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleFormChange} value={missingPokemon.hp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFormChange} 
            value={missingPokemon.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleFormChange} 
            value={missingPokemon.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
