import React from 'react';
import { Link } from 'react-router-dom';

const ListingsIndexItems = ({ listing }) => {
    return (
        <li className='listing-li'>
            <Link to={`/listings/${listing.id}`}>
            <div className='listing-image'> 
                <img src={listing.images[0]}/>
            </div>
       
            </Link>
            <div className='listing-info'>
                <div className='listing-address'>
                    <span>{listing.address}</span>
                        <span className="listing-rating">
                            <img className="rating-star" src={window.rating_star} />
                        5.00</span>
                </div>
            
                <div className='listing-name'>
                    <span>{listing.name}</span>
                </div>
                <div className='listing-price'>
                    <span>${listing.price}</span> / night
                </div>
            </div>
        </li>
    )
}

export default ListingsIndexItems;
