
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Search from './components/Search.js'

class App extends Component {
  constructor () {
    super();
    this.state ={
      list: [],
    };
  }

  componentDidMount() {   //componentDidMount is fired after all children components have been "mounted"
    axios.get(`https://api.sketchfab.com/v3/models`).then( results => {   // axios gets the models data from the api
      console.log(results.data.results);
      // filters through the array of data
      let newList = results.data.results.filter( (e, i) => {
          this.state.list.push( e.name );
        });
      this.setState({
        list: this.state.list
      });
      console.log( 'The data: ', this.state.list );
    })
  }

  render() {
    return (
      <div className="App">
        <h3 className="title">Search for Model</h3>
        
        <div className="main">
          <Search items={ this.state.list } />
        </div>
      </div>
    );
  }
}

export default App;
