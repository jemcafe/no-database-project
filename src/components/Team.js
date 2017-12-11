import React, { Component } from 'react';
import axios from 'axios';
import SearchList from './SearchList';
// import TeamList from './TeamList';

class Team extends Component {
  constructor (props) {
    super();
    this.state = {
      nameInput: ''
    };
  }

  changeName () {
    // let body = { name: val }; 
    // axios.edit('http://localhost:3030/api/newpokemon', body).then( response => {
      
    // }).catch( console.log() );
    console.log('change');
  }

  removePokemon () {
    // axios.delete().then( () => {

    // });
    console.log('remove');
  }

  render () {
    // mapped through the list of names in team
    let itemsList = this.props.team.map( (name, i) => {
      return (
        <p key={i}>
          { name }
          <button onClick={ (e) => this.changeName(name) }>Edit Name</button>
          <button onClick={ (e) => this.removePokemon(name) }>Remove</button>
        </p>
      )
    });

    return (
      <div>

        <h3 className="title">Your Team</h3>
        <h5>
          { itemsList }
        </h5>

      </div>
    )
  }
}

export default Team;