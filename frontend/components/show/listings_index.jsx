import React from 'react';
import ListingsIndexItems from '../show/listing_index_items';
import NavSearchContainer from '../navbar/navsearch_container';

class ListingsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchListings();
    }

    render() {
        const { listings } = this.props;

        return (
            <div className="listings-index-container">
                    <NavSearchContainer />
                    <div className="listings-index-header">
                        <span>Places to sit around the world</span>
                    </div>
                    <div className="listings-index-subheader">
                        <span>Book a seating arrangement led by local hosts on your next trip.</span>
                    </div>
                <div className="listings-ul">
                    <div> 
                        {
                            listings.map(listing => (
                                <ListingsIndexItems
                                    listing={listing}
                                    key={listing.id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default ListingsIndex;