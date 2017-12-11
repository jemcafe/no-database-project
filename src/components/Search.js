import React, { Component } from 'react';
import Button from './Button';

class Search extends Component {
    constructor () {
        super();
        this.state = {
            nameInput: ''
        };
    }

    render () {
        let itemsList = this.props.items.map( (item, i) => {
            return (
                <p key={i}>
                    { item }
                    <button onClick={ (e) => this.props.add(item) }>Add</button>
                </p>
            )
        });

        return (
            <div>
                <h3 className="title">Pokemon Search</h3>
                <input onChange={ (e) => this.props.input(e.target.value) } />
                <Button buttonName="search" handle={ this.props.filter } />
                <h5>
                { itemsList }
                </h5>
            </div>
        )
    }
}

export default Search;