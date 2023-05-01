import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {

  const {name, hp, sprites} = poke;
  const [front, setFront] = useState(true);
  
  

  return (
    <Card>
      <div onClick={() => setFront(!front)}>
        <div className="image">
          <img src={
            front ? (sprites.front) : (sprites.back)
          } alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
