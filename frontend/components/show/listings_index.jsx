import React from 'react';
import ListingsIndexItems from '../show/listing_index_items';
import NavSearchContainer from '../navbar/navsearch_container';

class ListingsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

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
                <ul className="listings-ul">
                        {
                            listings.map(listing => (
                                <ListingsIndexItems
                                    listing={listing}
                                    key={listing.id}
                                />
                            ))
                        }
                </ul>
            </div>
        )
    }

}

export default ListingsIndex;