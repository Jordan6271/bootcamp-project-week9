import React from 'react';

class Computation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className = "computation-area">
                1000 + 100 + 10 + 4
            </div>
        );
    }
}

export default Computation;