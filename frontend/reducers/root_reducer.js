import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SessionErrorsReducer from "./session_errors_reducer";
import ModalReducer from './modal_reducer';
import UsersReducer from "./users_reducer";


const RootReducer = combineReducers({
    users: UsersReducer,
    session: SessionReducer,
    errors: SessionErrorsReducer,
    modal: ModalReducer
});

export default RootReducer;
