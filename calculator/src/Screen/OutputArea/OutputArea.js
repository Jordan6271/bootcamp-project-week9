import React from 'react';

class Output extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className = "output-area">
                {this.props.children}
            </div>
        );
    }
}

export default Output;