import React from 'react';
import Button from './Button'

function SearchList (props) {
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
            <h5>
            { itemsList }
            </h5>
        </div>
    )
}

export default SearchList;