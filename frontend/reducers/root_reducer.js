import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SessionErrorsReducer from './session_errors_reducer';
import ModalReducer from './modal_reducer';
import UsersReducer from './users_reducer';
import ListingsReducer from './listings_reducer';
import BookingsReducer from './bookings_reducer';
import ReviewsReducer from './reviews_reducer';


const RootReducer = combineReducers({
    users: UsersReducer,
    session: SessionReducer,
    errors: SessionErrorsReducer,
    modal: ModalReducer,
    listings: ListingsReducer,
    bookings: BookingsReducer,
    reviews: ReviewsReducer,
});

export default RootReducer;
