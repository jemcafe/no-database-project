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
      searchInput: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterList = this.filterList.bind(this);
    this.addPokemon = this.addPokemon.bind(this);
    this.changeName = this.changeName.bind(this);
    this.removePokemon = this.removePokemon.bind(this);
  }

  handleChange ( val ) {
    this.setState({ searchInput: val });
  }

  filterList () {
    let { searchInput } = this.state;
    let newList;
    // If userInput is empty, nothing in the list is shown. When there is userInput, the filtered list is shown.
    if ( searchInput ===  '' || searchInput ===  ' ' ) {
      this.setState({ list: [] });
    } else {
      // Looks for pokemon that begins with the user's input
      newList = this.props.items.filter( (e) => (e.toLowerCase().slice(0, this.state.searchInput.length) === this.state.searchInput ) );
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
  }

  changeName ( val ) {
    console.log('change');
//     let body = { name: val };
//     let id = ;
//     axios.put(`api/changename/${  }`, body).then( (response) => {
//       console.log( response );
//       this.setState({ team: response.data });
//     });
  }
  
  removePokemon ( index ) {
    console.log('remove');
    axios.delete(`http://localhost:3030/api/removepokemon/${ index }`).then( (response) => {
      console.log( response );
      this.setState({ team: response.data });
    });
  }

  render () {
    return (
      <div>
        
        <Search items={ this.state.list } input={ this.handleChange } filter={ this.filterList } add={ this.addPokemon } />
        <Team team={ this.state.team } remove={ this.removePokemon } edit={ this.changeName } />

      </div>
    )
  }
}

export default ManagePokemon;