import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
    };
    
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = Object.assign({}, this.state);
            user.first_name = user.firstName
            user.last_name = user.lastName
            
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
                    <br />
                    <div className="form-title">Sign Up</div>
                    {this.renderErrors()}
                    <div className="form">
                        <br />
                        <input type="email"
                            className="form-input"
                            value={this.state.email}
                            placeholder={"Email address"}
                            onChange={this.update('email')}
                        />
                        <br />
                        <input type="text"
                                className="form-input"
                                value={this.state.firstName}
                                placeholder={"First name"}
                                onChange={this.update('firstName')}
                            />
                        <br />
                        <input type="text"
                                className="form-input"
                                value={this.state.lastName}
                                placeholder={"Last name"}
                                onChange={this.update('lastName')}
                            />
                        <br />
                        <input type="password"
                                className="form-input"
                                value={this.state.password}
                                placeholder={"Create a password"}
                                onChange={this.update('password')}
                            />
                        <button className="form-button" type="submit" value={this.props.formType}>Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
