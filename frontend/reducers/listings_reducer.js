import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';

const listingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_LISTINGS:
            debugger
            return action.listings;

        case RECEIVE_LISTING:
            debugger
            newState[action.listing.id] = action.listing
            return newState;

        default:
            return oldState;
    }
};

export default listingsReducer;
