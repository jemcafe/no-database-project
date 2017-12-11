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

  handleChange ( val ) {
    this.setState({ searchInput: val });
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
    // maps through the list of names in team
    let itemsList = this.props.team.map( (name, i) => {
      return (
        <p key={i}>
          { name }
          <button onClick={ (e) => this.changeName( this.state.nameInput ) }>Edit Name</button>
          <button onClick={ (e) => this.props.remove( i ) }>Remove</button>
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