import React from 'react'

function Button (props) {
    return <button className="button" onClick={(e) => props.handle()}>{ props.buttonName }</button>
}

export default Button;