import React from 'react'

function Button (props) {
    return (
        <div>
            <button className="button" onClick={(e) => props.handle()}>{ props.buttonName }</button>
        </div>
    );
}

export default Button;