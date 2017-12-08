import React from 'react';

function Search (props) {
    return (
        <div>
            <input className="search-input" onChange={ e => props.input(e.target.value) }/>
            <button className="search">Search</button>
        </div>
    )
}

export default Search;