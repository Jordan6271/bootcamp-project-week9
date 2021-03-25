import React from 'react';

function Computation (props) {
    return (
        <div className = "computation-area">
            {props.children}
        </div>
    );
}

export default Computation;