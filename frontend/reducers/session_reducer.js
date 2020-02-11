import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, } from '../actions/sessions_action';

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    let _nullUser = Object.freeze({ id: null });

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };

        case LOGOUT_CURRENT_USER:
            return _nullUser;

        default:
            return oldState;
    }
};

export default sessionReducer;
