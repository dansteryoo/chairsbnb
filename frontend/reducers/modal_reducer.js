import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_action";


const modalReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    // let newState = Object.assign({}, oldState);
    
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal

        case CLOSE_MODAL:
            return [];

        default:
            return oldState;
    }
}

export default modalReducer;
