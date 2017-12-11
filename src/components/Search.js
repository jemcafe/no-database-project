import React, { Component } from 'react';
import ShowList from './ShowList.js'
import Button from './Button.js'

class Search extends Component {
  constructor () {
    super();
    this.state = {
      list: [],
      searchInput: ''
    };
    this.filterList = this.filterList.bind(this);
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

  render () {
    return (
      <div>
        <input className="search-input" onChange={ (e) => this.handleChange(e.target.value) } />
        <Button buttonName="search" handle={ this.filterList }/>
        <ShowList items={ this.state.list } />
      </div>
    )
  }
}

export default Search;