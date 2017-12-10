import React from 'react';

function ShowList (props) {
    let itemsList = props.items.map( (item, i) => {
        return <p key={i} >{ item }</p>
    });

    return (
        <div>
            { itemsList }
        </div>
    )
}

export default ShowList;