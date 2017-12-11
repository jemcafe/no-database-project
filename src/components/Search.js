import React, { Component } from 'react';
import axios from 'axios';
import SearchList from './SearchList';
import Team from './Team'
// import List from './List';
import Button from './Button';

class Search extends Component {
  constructor () {
    super();
    this.state = {
      list: [],
      team: [],
      searchInput: ''
    };
    this.filterList = this.filterList.bind(this);
    this.addPokemon = this.addPokemon.bind(this);
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

  render () {
    return (
      <div>
        <h3 className="title">Pokemon Search</h3>
        <input className="search-input" onChange={ (e) => this.handleChange(e.target.value) } />
        <Button buttonName="search" handle={ this.filterList } />
        <SearchList items={ this.state.list } add={ this.addPokemon } />

        <Team team={ this.state.team }/>
      </div>
    )
  }
}

export default Search;