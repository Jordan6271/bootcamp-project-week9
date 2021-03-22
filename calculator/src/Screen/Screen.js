import React from 'react';
import Output from './OutputArea/OutputArea';
import Computation from './ComputationArea/ComputationArea';

class Screen extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section className = "screen-area">
                <Output />
                <Computation />
            </section>
        );
    }
}

export default Screen;