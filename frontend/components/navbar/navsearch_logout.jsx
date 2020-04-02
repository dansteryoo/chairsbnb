import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class NavSearchLogout extends React.Component {
     constructor(props) {
         super(props);

        this.state = { 
            searchKeywords: '',
            searchInputLength: ['navsearch-bar-container']
        }

         this.handleSearch = this.handleSearch.bind(this);
         this.toggleSearchLength = this.toggleSearchLength.bind(this);
    };

    toggleSearchLength() {
        if (!this.state.searchInputLength[1]) {
            this.setState({ searchInputLength: ['navsearch-bar-container', 'navsearch-bar-container-long']});
        } else {
            this.setState({ searchInputLength: ['navsearch-bar-container']});
        }
    };

    handleSearch(e) {
        e.preventDefault();
        // this.props.fetchSearchResult(this.state.searchKeywords);
        this.props.history.push('/listings/search');
    };
    
    update(f) {
        return e => this.setState({
            [f]: e.target.value
        });
    };

    render() {
        
        const { logout } = this.props;
        
    return (
        <nav className='navsearch-container' >
            <Link to='/' className='navsearch-home'>
                <h1>ChairsBnB</h1>
            </Link>
                <div className={this.state.searchInputLength.join(' ')}>
                    <img className='navsearch-icon' src={window.search_icon} height='20' />
                    <form className='navbar-search-form' onSubmit={this.handleSearch}>
                        <div className='navbar-search-input-container'>
                            <input
                                className='navsearch-input'
                                type='text'
                                placeholder='Search by city, address, or landmark'
                                value={this.state.keyword}
                                onChange={this.update('searchKeywords')}
                                onFocus={this.toggleSearchLength}
                                onBlur={this.toggleSearchLength}
                            />
                        </div>
                    </form>
                </div>
            <ul className='navsearch-links'>
                <Link to='/bookings' className='navsearch-bookings-btn'>
                    <span>Bookings</span>
                </Link>
                <li className='navsearch-logout-btn' onClick={() => logout()}>
                    Log Out
                </li>            
            </ul>
        </nav>
        )
    }
};

export default NavSearchLogout;


