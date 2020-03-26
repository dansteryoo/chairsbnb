

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

export const fetchSearchResult = (searchKeywords, startDate, endDate) => (
    $.ajax({
        type: 'GET',
        url: `/api/search`,
        data: {
            keywords: searchKeywords,
            start_date: startDate,
            end_date: endDate
        }
    })
);
