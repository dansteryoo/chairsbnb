import React from 'react';
import { Link } from 'react-router-dom';

const ListingsIndexItem = ({ listing }) => {

    return (
        <div className="listing-li">
            <Link to={`/listings/${listing.id}`}>
                <div className="listing-image"
                    style={{ listingImage: `url(${listing.images[0]})` }}>
                    </div>
            </Link>
            <div className="listing-address">
                <span>{listing.address}</span>
            </div>
            <div className="listing-name">
                <span>{listing.name}</span>
            </div>
            <div className="listing-price">
                <span>${listing.price}</span> / night
            </div>
        </div>
    )
}

export default ListingsIndexItem;
