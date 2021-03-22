import React from 'react';
import Buttons from './CalcButton';

class LargeButtons extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
           <Buttons type = 'large'>
               {this.props.children}
           </Buttons>
        );
    }
}

export default LargeButtons