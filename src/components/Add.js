import React, {Component} from 'react';
import axios from 'axios';
import List from './List.js'
import Button from './Button.js'

// This component is not used
// For testing purposes only

class Add extends Component {
    constructor(){
        super();
        this.state = {
            name: ''
        }
        this.addPokemon = this.addPokemon.bind(this);
    }

    handleChange ( val ) {
      this.setState({ name: val });
    }
    
    addPokemon () {
      let body = { name: this.state.name }; 
      axios.post('http://localhost:3030/api/newpokemon', body).then( response => {
        console.log( response );
      }).catch( console.log() );
    }
    
    render() {
      return (
        <div>
          <input onChange={ (e) => this.handleChange(e.target.value) }/>
          <Button buttonName="add" handle={ this.addPokemon }/>
        </div>
      );
    }
}

export default Add;