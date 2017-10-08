import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Value from './Value';
import Control from './Control';

const defaultProps = {
    value: 0,
};

const propTypes = {
    value: PropTypes.number,
};

class Counter extends Component {
    render () {
        return (
            <div>
                <Value value={this.props.value}/>
                <Control />
            </div>
        )
    }
}

Counter.defaultProps = defaultProps;
Counter.propTypes = propTypes;

export default Counter