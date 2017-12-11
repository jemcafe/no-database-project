import React from 'react';
import Button from './Button'

function ShowList (props) {
    let itemsList = props.items.map( (item, i) => {
        return (
            <p key={i}>
                { item }
                <Button buttonName="add"/>
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

export default ShowList;