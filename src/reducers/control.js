import * as actions from '../actions/ActionTypes';

const initialState = {
    value: 0,
};

export default function control(state=initialState, action) {
    switch (action.type) {
        case actions.UP:
            return {
                value: state.value + 1,
            };
        case actions.DOWN:
            return {
                value: state.value - 1,
            };
        default:
            return initialState;
    }
}