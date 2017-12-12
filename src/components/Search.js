import React from 'react';
import Button from './Button';

function Search (props) {
    let itemsList = props.items.map( (item, i) => {
        return (
            <p key={i}>
                { item }
                <button onClick={ (e) => props.add(item) }>Add</button>
            </p>
        )
    });

    return (
        <div>
            <h3 className="title">Pokemon Search</h3>
            <input onChange={ (e) => props.handleInput(e.target.value) } />
            <Button buttonName="search" handle={ props.filter } />
            <h5>
            { itemsList }
            </h5>
        </div>
    )
}

export default Search;