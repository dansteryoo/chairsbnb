import React from 'react';

class LogInForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
            let user = Object.assign({}, this.state);

        this.props.processForm(user)
            .then(() => this.props.closeModal());
    }

    update(f) {
        return e => this.setState({
            [f]: e.target.value
        });
    }

    renderErrors() {
        return (
            <ul className="form-errors">
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
                    <div className="form-title">Log In</div>
                    {this.renderErrors()}
                    <div className="form">
                        <br/>
                        <input type="text"
                                className="form-input"
                                value={this.state.email}
                                placeholder={"Email address"}
                                onChange={this.update('email')}
                            />
                        <br/>
                        <input type="password"
                                className="form-input"
                                value={this.state.password}
                                placeholder={"Password"}
                                onChange={this.update('password')}
                            />
                        <button className="form-button" type="submit" value={this.props.formType}>Log In</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LogInForm;
