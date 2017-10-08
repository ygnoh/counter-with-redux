import React, { Component } from 'react'

import Value from './Value';
import Control from './Control';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <Value value={this.props.value} />
                <Control
                    handleUp={this.props.handleUp}
                    handleDown={this.props.handleDown}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.control.value,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleUp: () => {dispatch(actions.up())},
        handleDown: () => {dispatch(actions.down())},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);