import React from 'react';

function List (props) {
    let itemsList = props.items.map( (item, i) => {
        return (
            <p key={i}>
                { item }
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

export default List;