import React from 'react';

class Buttons extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
           <button className = 'btn' onClick = {this.props.onButtonPress}>
               {this.props.children}
           </button>
        );
    }
}

export default Buttons