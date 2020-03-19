import React from 'react';
import { Link } from 'react-router-dom';

class NavSearch extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {
        this.props.logout()
    }

    render() {
        
        return (
            <nav className="navsearch-container" >
                <Link to="/" className="navsearch-home">
                    <h1>ChairsBnB</h1>
                </Link>
                <ul className="navsearch-links">
                    <li className="navsearch-logout-btn" onClick={this.handleLogout}>
                        Log Out
                    </li>            
                </ul>
            </nav>
        )
    }
}

export default NavSearch;


