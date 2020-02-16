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

    validateSubmit(e) {
        e.preventDefault();
        const err = this.state
        const validEmail = (/\S+@\S+\.\S+/.test(this.state.email));

        if (!validEmail) {
            err['email'] = 'Email address is not valid.'
        }

        if (this.state.password.length < 6) {
            err['password'] = 'Password must be at least 6 characters.'
        }

        if (this.state.firstName.length < 1) {
            err['firstName'] = 'First name must be filled out.'
        }

        if (this.state.lastName.length < 1) {
            err['lastName'] = 'Last name must be filled out.'
        }

        this.setState({ errors: err });

        if (Object.values(err).every(v => v.length < 1)) {
            this.handleSubmit();
        }
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
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="form-container">
                <div className="form-closing-x" onClick={() => this.props.closeModal()}>&#10005;</div>
                <br/>
                <div className="form-title">Sign up with an email</div>
                <form onSubmit={this.handleSubmit} className="form">
                    {this.renderErrors()}
                    <div className="form">
                        <br/>
                        <input type="email"
                            className="form-input"
                            value={this.state.email}
                            placeholder={"Email address"}
                            onChange={this.update('email')}
                            // required
                        />
                        <i id="form-icon-login" className="fas fa-envelope fa-lg"></i>
                        <br/>
                        <input type="text"
                                className="form-input"
                                value={this.state.firstName}
                                placeholder={"First name"}
                                onChange={this.update('firstName')}
                                // required
                            />
                        <i id="form-icon-login" className="fas fa-user fa-lg"></i>
                        <br/>
                        <input type="text"
                                className="form-input"
                                value={this.state.lastName}
                                placeholder={"Last name"}
                                onChange={this.update('lastName')}
                                // required
                            />
                        <i id="form-icon-login" className="fas fa-user fa-lg"></i>
                        <br/>
                        <input type="password"
                                className="form-input"
                                value={this.state.password}
                                placeholder={"Create a password"}
                                onChange={this.update('password')}
                                // required
                            />
                        <i id="form-icon-login" className="fas fa-lock fa-lg"></i>
                        <button className="form-button" type="submit" value={this.props.formType}>Sign Up</button>
                    </div>
                </form>
            <br />
            <div className="form-change-container">
                <p>Already have an Airbnb account?</p>
                    <button className="form-change-btn" onClick={() => this.props.openModal('Log In')}>
                    Log In
                    </button>
            </div>
            </div>
        );
    }
}

export default SignUpForm;
