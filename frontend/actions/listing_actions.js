import * as APIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';


const receiveListings = (listings) => ({
    type: RECEIVE_LISTINGS,
    listings
});

const receiveListing = (listing) => ({
    type: RECEIVE_LISTING,
    listing
});


export const fetchListings = () => dispatch => (
    APIUtil.fetchListings()
        .then(listings => dispatch(receiveListings(listings))
    )
);

export const fetchListing = (listingId) => dispatch => (
    APIUtil.fetchListing(listingId)
        .then(listing => dispatch(receiveListing(listing))
    )
);

export const fetchSearch = (keywords, startDate, endDate) => dispatch => (
    APIUtil.fetchSearch(keywords, startDate, endDate)
        .then(listings => dispatch(receiveListings(listings))
    )
);