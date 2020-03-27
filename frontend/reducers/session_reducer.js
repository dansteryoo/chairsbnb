import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, } from '../actions/session_actions';

let _nullUser = Object.freeze({ id: null });

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, newState, { id: action.currentUser.id });

        case LOGOUT_CURRENT_USER:
            return _nullUser;

        default:
            return newState;
    }
};

export default sessionReducer;
