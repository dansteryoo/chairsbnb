

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

export const fetchSearch = (keywords, startDate, endDate) => (
    $.ajax({
        type: 'GET',
        url: `/api/search`,
        data: {
            keywords: keywords,
            start_date: startDate,
            end_date: endDate
        }
    })
);
