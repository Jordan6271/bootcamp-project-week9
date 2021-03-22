import React from 'react';

class Buttons extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
           <button className = 'btn'>
               {this.props.children}
           </button>
        );
    }
}

export default Buttons