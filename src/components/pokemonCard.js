import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';


const PokemonCard = (props) => (

  <Card className='centred'
    color='olive'>
    <Image src={props.pokemon.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.pokemon.name}</Card.Header>
      <Card.Meta>
        <p> height : {props.pokemon.height}</p>
      </Card.Meta>
      <Card.Description>
      </Card.Description>
    </Card.Content>

  </Card>

)



export default PokemonCard;