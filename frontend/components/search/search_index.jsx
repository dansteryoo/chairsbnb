import React from 'react';
import SearchIndexItems from '../search/search_index_items';
import NavSearchSessionContainer from '../navbar/navsearch_session_container';
import NavSearchLogoutContainer from '../navbar/navsearch_logout_container';
import SearchMap from '../map/search_map.js'

class SearchIndex extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchListings();
    };

    render() {
        
        let { listings, openModal, currentUser, logout } = this.props;

        const navLinks = () => {
            if (currentUser) {
                return <NavSearchLogoutContainer logout={logout} />
            } else {
                return <NavSearchSessionContainer openModal={openModal} />
            }
        };

    return (
        <div className='search-body'>

            { navLinks() }

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
                <div className='nav-search-google-maps'>
                    <SearchMap />
                </div> 

            </div>
        </div>
        )
    }
};

export default SearchIndex;