import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import Team from './Team'
// import List from './List';

class ManagePokemon extends Component {
  constructor () {
    super();
    this.state = {
      list: [],
      team: [],
      userInput: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterList = this.filterList.bind(this);
    this.addPokemon = this.addPokemon.bind(this);
    this.editName = this.editName.bind(this);
    this.removePokemon = this.removePokemon.bind(this);
  }

  handleChange ( val ) {
    this.setState({ userInput: val });
  }

  filterList () {
    let { userInput } = this.state;
    let newList;
    // If userInput is empty, nothing in the list is shown. When there is userInput, the filtered list is shown.
    // Else Looks for pokemon that begins with the user's input
    if ( userInput ===  '' || userInput ===  ' ' ) {
      this.setState({ list: [] });
    } else {
      newList = this.props.names.filter( (e) => (e.toLowerCase().slice(0, userInput.length) === userInput ) );
      this.setState({ list: newList });
    }
  }

  addPokemon ( val ) {
    // The name of the pokemon is added to the local server's array and the team list
    let body = { name: val }; 
    axios.post('http://localhost:3030/api/newpokemon', body).then( response => {
      console.log( response );
      this.setState({ team: response.data });
    }).catch( console.log() );
    console.log('added');
  }
  
  editName ( val, index ) {
    let body = { name: val };
    axios.put(`http://localhost:3030/api/changename/${ index }`, body).then( (response) => {
      console.log( response );
      this.setState({ team: response.data });
    });
  console.log(val, index);
  }
  
  removePokemon ( index ) {
    axios.delete(`http://localhost:3030/api/removepokemon/${ index }`).then( (response) => {
      console.log( response );
      this.setState({ team: response.data });
    });
    console.log('removed');
  }

  render () {
    return (
      <div className="managepokemon">
        
        <Search items={ this.state.list } 
                handleInput={ this.handleChange } 
                filter={ this.filterList } 
                add={ this.addPokemon } />

        <Team team={ this.state.team } 
              handleInput={ this.handleChange } 
              inputVal={ this.state.userInput } 
              remove={ this.removePokemon } 
              edit={ this.editName } />

      </div>
    )
  }
}

export default ManagePokemon;