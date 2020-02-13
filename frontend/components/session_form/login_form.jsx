import React from 'react';

class LogInForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            username: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
            let user = Object.assign({}, this.state);
            user.first_name = user.firstName
            user.last_name = user.lastName

        this.props.processForm(user)
        // this.props.history.push("/");
    }

    handleModalClose(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    update(f) {
        return e => this.setState({
            [f]: e.target.value
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
                        <button className="form-button" type="submit" value={this.props.formType}>Log In</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LogInForm;
