import React from 'react';
import { Link } from 'react-router-dom';

import ReviewFormContainer from './review_form_container';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';

const listingShow = ({ listing, listingId, fetchlisting, reviews }) => {
    const listings = {
        [listingId]: listing
    };

    return (
        <div className="single-listing-show">
            <div className="single-listing-map">
                <Link to="/">Back to listings Index</Link>
                <listingMap
                    listings={listings}
                    listingId={listingId}
                    singlelisting={true}
                    fetchlisting={fetchlisting}
                />
            </div>
            <div className="right-half listing-details">
                <listingDetail listing={listing} reviews={reviews} />
                <ReviewLink
                    component={ReviewFormContainer}
                    to={`/listinges/${listingId}/review`}
                    label="Leave a Review"
                />
                <ProtectedRoute
                    path="/listinges/:listingId/review"
                    component={ReviewFormContainer}
                />
            </div>
        </div>
    );
};

export default listingShow;
