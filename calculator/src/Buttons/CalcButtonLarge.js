import React from 'react';
import Buttons from './CalcButton';

class LargeButtons extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
           <Buttons type = 'large' onClick = {this.props.onButtonPress}>
               {this.props.children}
           </Buttons>
        );
    }
}

export default LargeButtons