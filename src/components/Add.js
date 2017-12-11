import React, {Component} from 'react';
import axios from 'axios';
import List from './List.js'
import Button from './Button.js'

class Add extends Component {
    constructor(){
        super();
        this.state = {
            name: ''
        }
        this.addPokemon = this.addPokemon.bind(this);
    }

    handleChange ( val ) {
      this.setState({ name: val });
    }

    // insert post function
    // post ( ) {
    //     let { title, subTitle, image, text } = this.state;
    //     let body = {
    //         title: title,
    //         subTitle: subTitle,
    //         image: image,
    //         text: text
    //     };
    //     axios.post('/api/blogs', body).then( response => {
    //         this.props.history.push(`/blog/${response.data.id}`)
    //     }).catch( console.log() );
    // }
    
    addPokemon () {
      let body = { name: this.state.name }; 
      axios.post('http://localhost:3030/api/newpokemon', body).then( response => {
        console.log( response );
      }).catch( console.log() );
    }
    
    render() {
      return (
        <div>
          <input onChange={ (e) => this.handleChange(e.target.value) }/>
          <Button buttonName="add" handle={ this.addPokemon }/>
        </div>
      );
    }
}

export default Add;