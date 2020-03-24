import * as ListingsAPIUtil from '../util/listings_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';


export const receiveListings = (listings) => ({
    type: RECEIVE_LISTINGS,
    listings
});

export const receiveListing = (listing) => ({
    type: RECEIVE_LISTING,
    listing
});


export const fetchListings = () => dispatch => (
    ListingsAPIUtil.fetchListings()
        .then(listings => dispatch(receiveListings(listings))
    )  
);

export const fetchListing = (listingId) => dispatch => (
    ListingsAPIUtil.fetchListing(listingId)
        .then(listing => dispatch(receiveListing(listing))
    )
);


export const fetchSearchResult = (keywords, startDate, endDate) => dispatch => (
    ListingsAPIUtil.fetchSearchResult(keywords, startDate, endDate)
        .then(listings => dispatch(receiveListings(listings))
    )
);