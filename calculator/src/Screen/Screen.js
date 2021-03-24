import React from 'react';
import Output from './OutputArea/OutputArea';
import Computation from './ComputationArea/ComputationArea';

const Screen = (props) => (
    <section className = "screen-area">
        <Output>
            {props.output}
        </Output>
        <Computation>
            {props.computation}
        </Computation>
    </section>
);

export default Screen;