import * as ReviewsAPIUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';


export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});


export const fetchReviews = () => dispatch => (
    ReviewsAPIUtil.fetchReviews()
        .then(reviews => dispatch(receiveReviews(reviews))
    )
);

export const fetchReview = (reviewId) => dispatch => (
    ReviewsAPIUtil.fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review))
    )
);

export const createReview = (review) => dispatch => (
    ReviewsAPIUtil.createReview(review)
        .then(review => dispatch(receiveReview(review))
    )
);

export const updateReview = (review) => dispatch => (
    ReviewsAPIUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review))
    )
);

export const deleteReview = (reviewId) => dispatch => (
    ReviewsAPIUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId))
    )
);