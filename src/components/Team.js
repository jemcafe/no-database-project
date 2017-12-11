import React, { Component } from 'react';
import axios from 'axios';

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

  render () {
    // maps through the list of names in team
    let itemsList = this.props.team.map( (name, i) => {
      return (
        <p key={i}>
          { name }
          <button onClick={ (e) => this.props.edit( this.state.nameInput ) }>Edit Name</button>
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