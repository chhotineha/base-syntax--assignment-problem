import React from 'react';
import './firstApp.css'
const sumoftwoNumber = (props) => {
    return (
        <div className="display">
            <p onClick={props.click}>squareroot of two numbers{props.firstnumber} and {props.secondnumber} is {Math.sqrt(props.firstnumber)} and {Math.sqrt(props.secondnumber)}</p>
            <input type="text" onChange={props.changed} />
        </div>
    );

}
export default sumoftwoNumber;