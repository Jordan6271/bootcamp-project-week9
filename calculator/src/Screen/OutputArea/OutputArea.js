import React from 'react';

function Output (props) {
    return (
        <div className = "output-area">
            {props.children}
        </div>
    );
}

export default Output;