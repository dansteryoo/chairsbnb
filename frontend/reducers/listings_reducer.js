import { RECEIVE_LISTINGS, RECEIVE_LISTING, CLEAR_LISTING_STATE} from '../actions/listing_actions';

const listingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_LISTINGS:
            return action.listings;

        case RECEIVE_LISTING:
            newState[action.listing.id] = action.listing
            return newState;

        case CLEAR_LISTING_STATE:
            return {};

        default:
            return oldState;
    }
};

export default listingsReducer;
