import React from 'react';

class LogInForm extends React.Component {
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
            .then(() => {this.props.closeModal()});

        this.setState({ password: '' });
    }

    update(f) {
        return e => this.setState({
            [f]: e.currentTarget.value
        });
    }

    renderErrors() {
        return (
            <ul className="error-messages">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        <span>{error}</span>
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="form">
                    <br/>
                <span>Please Log In.</span>
                    {this.renderErrors()}
                    <div className="form">
                        <br/>
                    <label>Username:
                        <input type="text"
                                className="form-input"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                    </label>
                        <br/>
                    <label>Password:
                        <input type="password"
                                className="form-input"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                    </label>
                        <button className="form-button" type="submit">Log In</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LogInForm;
