import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';


const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;

        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review
            return newState;

        case REMOVE_REVIEW:
            delete newState[action.reviewId]
            return newState;

        default:
            return newState;
    }
};

export default reviewsReducer;