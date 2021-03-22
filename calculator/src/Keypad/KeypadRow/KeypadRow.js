import React from 'react';

class KeypadRow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="keypad-row">
                {this.props.children}
            </div>
        );
    }
}

export default KeypadRow