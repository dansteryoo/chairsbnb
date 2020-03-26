import React from 'react';
import NavSearchContainer from '../navbar/navsearch_container';
import ListingsIndexItems from './listing_index_items';

class SearchIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchListings();
    }

    render() {

        let { listings } = this.props;

    return (
            <div className="listings-search-container">
            <NavSearchContainer />

                <div className="listings-search-results-leftside">
                    <h1 className="num-places-to-stay-header">{listings.length} places to stay</h1>
                {
                    listings.map(listing => (
                        <ListingsIndexItems
                            listing={listing}
                            key={listing.id}
                        />
                    ))
                }
                </div>

                {/*<div className="listings-search-map-rightside">
                    <TreehouseSearchMapContainer
                        updateBounds={this.props.updateBounds}
                        fetchAllListings={this.props.fetchAllTreehouses}
            />
                </div>*/}
            </div>
        );
    }

}

export default SearchIndex;