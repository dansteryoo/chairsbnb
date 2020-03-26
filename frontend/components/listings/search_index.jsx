import React from 'react';
import ListingsIndexItems from './listing_index_items';
import NavSearchSessionContainer from '../navbar/navsearch_session_container';

class SearchIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchListings();
    }

    render() {

        let { listings, openModal } = this.props;

    return (
        <div className='search-body'>

            <NavSearchSessionContainer openModal={openModal} />

            <section className='nav-search-container'>
            </section>

            <div className="listings-search-container">

                <div className="listings-search-results-leftside">
                    <div className="header-number">{listings.length} places to stay</div>
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
        </div>
        )
    }

};

export default SearchIndex;