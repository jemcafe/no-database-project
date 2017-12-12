import React, { Component } from 'react';
import Pokemon from './Pokemon'

class Team extends Component {
  constructor () {
    super();
    this.state = {
      editMode: false
    };
  }

  render () {
    // maps through the list of names in team
    // Each component is given the name of a pokemon
    let itemsList = this.props.team.map( (nam, i) => {
        return ( <Pokemon key={ i } 
                        name={ nam } 
                        handleInput={ this.props.handleInput } 
                        inputVal={ this.props.inputVal } 
                        remove={ this.props.remove } 
                        edit={ this.props.edit } 
                        index={ i } /> )
    });

    return (
      <div className="pokemon-team">

        <h3 className="title">Your Team</h3>
        <h5>
          { itemsList }
        </h5>

      </div>
    )
  }
}

export default Team;