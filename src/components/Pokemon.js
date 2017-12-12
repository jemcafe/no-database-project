import React, {Component} from 'react';

class Pokemon extends Component {
    constructor () {
      super();
      this.state = {
        editMode: false
      };
    }

    toggleEdit () {
        if ( this.state.editMode === true ) {
            this.setState({ editMode: false });
            // The edit method from ManagePokemon is invoked 
            this.props.edit(this.props.inputVal, this.props.index);
        } else {
            this.setState({ editMode: true });
        }
        console.log( this.state.editMode );
    }

    render () {
        let { editMode } = this.state
        let { name, handleInput, inputVal, remove, edit, index } = this.props

        let mode = editMode ?  <input placeholder={ name } onChange={ (e) => handleInput(e.target.value) }/>  : name 
        let buttonName = editMode ?  'Confirm' : 'Edit'

        return (
            <div>
                { mode }
                <button onClick={ (e) => this.toggleEdit() }>{buttonName}</button>
                <button onClick={ (e) => remove( index ) }>Remove</button>
            </div>
        )
    }
}

export default Pokemon;