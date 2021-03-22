import React from 'react';

class Computation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className = "computation-area">
                {this.props.children}
            </div>
        );
    }
}

export default Computation;