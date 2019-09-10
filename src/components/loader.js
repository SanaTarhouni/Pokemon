import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';


const LoadingSpinner = () => {

 return ( 
      <Loader className='spinner' size='large' active>Loading Pokemons </Loader>
 )
}
export default LoadingSpinner ;