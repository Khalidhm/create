import { Component } from 'react';


import Sounds from './sounds';
import Tile from './tile';


class Board extends Component {
  render(){
    return (
    <div className="Board">
      
        {Sounds.map((Sounds, index) => 
          
          <Tile  key={index} sound={Sounds}/>)}
          
       
      
     
    </div>
  );
}
  
}

export default Board;