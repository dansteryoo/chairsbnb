import React from 'react';
import { Link } from 'react-router-dom';

const SearchIndexItems = ({ listing }) => {

    const overallRating = (listing.reviews.map(each => each.review.overall_rating)
        .reduce((acc, each) => acc += each, 0) / listing.reviews.length)
        .toFixed(2);
        
    return (
        <li className='search-li'>
            <div>
                <Link to={`/listings/${listing.id}`}>
                    <div className='search-image'>
                        <img src={listing.images[0]} />
                    </div>
                </Link>
            </div>
            <div className='search-info'>
                <div className='search-address'>
                    <span>
                        {listing.address}
                    </span>
                    <span className="search-rating">
                        <img className="search-star" src={window.rating_star} />
                        {overallRating}<span>(239)</span>
                    </span>
                </div>

                <div className='search-name'>
                    <span>{listing.name}</span>
                </div>

                <div className='search-description'>
                    <span>1 guest <span>&#183;</span> 1 chair</span>
                </div>

                <div className='search-description-bottom'/>

                <div className='search-cancellation'>
                    <span>Includes cancellation flexibility</span>
                </div>

                <div className='search-price'>
                    <span>${listing.price}</span> / night
                </div>
            </div>
        </li>
    )
}

export default SearchIndexItems;
