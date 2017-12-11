
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Search from './components/Search'
import Add from './components/Add'

class App extends Component {
  constructor () {
    super();
    this.state ={
      listOfPokemon: [],
      name: '',
    };
  }

  componentDidMount() {   //componentDidMount is fired after all children components have been "mounted"
    axios.get(`http://localhost:3030/api/pokemon`).then( response => {   // axios gets the models data from the api
      console.log(response.data);
      let listOfNames = response.data.map( pokemon => {
        pokemon.name = pokemon.name.split('');
        pokemon.name[0] = pokemon.name[0].toUpperCase();
        pokemon.name = pokemon.name.join('');
        return pokemon.name
      });
      this.setState({
        listOfPokemon: listOfNames
      });
      console.log( 'The list of names: ', this.state.listOfPokemon );
    })
  }

  render() {
    return (
      <div className="App">

        <div className="main">
          <Add />
          
          <Search items={ this.state.listOfPokemon } />
        </div>

      </div>
    );
  }
}

export default App;
