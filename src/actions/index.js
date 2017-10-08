import * as actions from './ActionTypes';

export function up() {
    return {
        type: actions.UP,
    };
}

export function down() {
    return {
        type: actions.DOWN,
    };
}