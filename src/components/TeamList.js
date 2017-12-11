import React from 'react';

function TeamList (props) {
    let itemsList = props.items.map( (item, i) => {
        return (
            <p key={i}>
                { item }
                <button onClick={ (e) => props.editName(item) }>Edit Name</button>
                <button onClick={ (e) => props.remove(item) }>Remove</button>
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

export default TeamList;