import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            username: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    update(f) {
        return e => this.setState({
            [f]: e.currentTarget.value
        });
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form">
                    Welcome to ChairsBnB!
                        <br/>
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div className="login-form">
                        <br/>
                    <label>Username:
                        <input type="text"
                                className="login-input"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                    </label>
                        <br/>
                    <label>Password:
                        <input type="password"
                                className="login-input"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                    </label>
                        <button className="form-button" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
