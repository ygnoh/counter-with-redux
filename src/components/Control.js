import React, { Component } from 'react';

class Control extends Component {
    render () {
        return (
            <div>
                <button onClick={this.props.handleUp}>+</button>
                <button onClick={this.props.handleDown}>-</button>
            </div>
        )
    }
}

export default Control