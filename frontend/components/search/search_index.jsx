import React from 'react';
import SearchIndexItems from '../search/search_index_items';
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

            <div className='nav-search-container'>
    

                <div className='listings-search-leftside'>
                    <div className='header-number'>{listings.length} places to stay</div>

                        <div className='listings-search-result-boxes'>
                        {
                            listings.map(listing => (
                                <SearchIndexItems
                                    listing={listing}
                                    key={listing.id}
                                />
                            ))
                        }
                        </div>
                </div>

                {/*<div className='listings-search-map-rightside'>
                        <TreehouseSearchMapContainer
                            updateBounds={this.props.updateBounds}
                            fetchAllListings={this.props.fetchAllTreehouses}
                />
                    </div>*/}
                <div className='nav-search-google-maps'>
                    <p>GOOGLE MAPS HERE</p>
                </div> 


            </div>
        </div>
        )
    }

};

export default SearchIndex;