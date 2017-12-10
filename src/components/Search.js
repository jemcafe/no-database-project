import React, { Component } from 'react';
import ShowList from './ShowList.js'

class Search extends Component {
  constructor () {
    super();
    this.state = {
      list: [],
      userInput: ''
    };
  }

  handleChange ( val ) {
    this.setState({ userInput: val });
  }

  filterList () {
    // If userInput is empty, nothing in the list is shown. When there is userInput, the filtered list is shown.
    let { userInput } = this.state;
    if ( userInput ===  '' || userInput ===  ' ' ) {
      this.state.list =  [];
    } else {
      this.state.list = this.props.items.filter( (e) => e.toLowerCase().includes( this.state.userInput ) );
    }
    this.setState({ list: this.state.list });
  }

  render () {
    return (
      <div>
        <input className="search-input" onChange={ (e) => this.handleChange(e.target.value) } />
        <button className="search" onClick={ (e) => this.filterList() }>Search</button>
        <ShowList items={ this.state.list } />
      </div>
    )
  }
}

export default Search;