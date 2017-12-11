
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Search from './components/Search.js'

class App extends Component {
  constructor () {
    super();
    this.state ={
      name: '',
    };
  }

  componentDidMount() {   //componentDidMount is fired after all children components have been "mounted"
    axios.get(`http://localhost:3030/api/pokemon`).then( response => {   // axios gets the models data from the api
      console.log(response);
      // filters through the array of data
      // let newList = results.data.results.filter( (e, i) => {
      //   this.state.list.push( e.name );
      // });
      // this.setState({
      //   list: this.state.list
      // });
      // console.log( 'The data: ', this.state.list );
    })
  }

  // addPokemon () {
  //   let postObj = {
  //     name: this.state.name
  //   };

  //   axios.post( '', postObj );
  // }

  render() {
    return (
      <div className="App">
        <h3 className="title">Pokemon Search</h3>
        
        <div className="main">
          <Search items={ this.state.list } />
        </div>
      </div>
    );
  }
}

export default App;
