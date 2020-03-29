import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class NavSearchSession extends React.Component {
     constructor(props) {
         super(props);

        this.state = { 
            searchKeywords: '',
            searchInputLength: ['navsearch-bar-container'],
            renderSearchIndex: false
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
        this.setState({ renderSearchIndex: true });
    };

    update(f) {
        return e => this.setState({
            [f]: e.target.value
        });
    };

    render() {

        if (this.state.renderSearchIndex) {
            return <Redirect to='/listings/search' />
        };
        
        const { openModal } = this.props;
        
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
            <ul className='nav-session-links'>
                <li className='nav-session-signup-li' onClick={() => openModal('Sign Up')}>
                    Sign Up
                </li>
                <li className='nav-session-login-li' onClick={() => openModal('Log In')}>
                    Log In
                </li>
            </ul>
        </nav>
        )
    }
};

export default NavSearchSession;


