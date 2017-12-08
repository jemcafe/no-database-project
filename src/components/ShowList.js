import React from 'react';

function ShowList (props) {
    let listItems = props.items.map( (item, i) => {
        return <p key={i} >{ item }</p>
    });

    return (
        <div>
            { listItems }
        </div>
    )
}

export default ShowList;