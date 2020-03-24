import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';
 

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    // let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            if (action.errors === undefined) {
                return ['There is already a user with this email address.']
            } else {
                return action.errors;
            }

        case RECEIVE_CURRENT_USER:
            return [];

        case CLEAR_ERRORS:
            return [];
            
        default:
            return oldState;
    }
};

export default sessionErrorsReducer;

