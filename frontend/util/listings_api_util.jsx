

export const fetchListings = () => (
    $.ajax({
        url: `/api/listings`,
        method: 'GET'
    })
);

export const fetchListing = (listingId) => (
    $.ajax({
        url: `/api/listings/${listingId}`,
        method: 'GET'
    })
);

export const createListing = (listing) => (
    $.ajax({
        url: `api/listings/`,
        method: 'POST',
        data: { listing }
    })
);

export const updateListing = (listing) => (
    $.ajax({
        url: `api/listings/${listing.id}`,
        method: 'PATCH',
        data: { listing }
    })
);

export const updateListing = (listingId) => (
    $.ajax({
        url: `api/listings/${listingId}`,
        method: 'DELETE'
    })
);
