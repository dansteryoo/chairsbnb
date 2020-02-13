import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            username: '',
            password: '',
            email: '',
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
        // this.props.history.push("/");
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
                    <br />
                <span>Please Sign Up.</span>
                    {this.renderErrors()}
                    <div className="form">
                        <br />
                    <label>First Name:
                        <input type="text"
                                className="form-input"
                                value={this.state.firstName}
                                onChange={this.update('firstName')}
                            />
                    </label>
                        <br />
                    <label>Last Name:
                        <input type="text"
                                className="form-input"
                                value={this.state.lastName}
                                onChange={this.update('lastName')}
                            />
                    </label>
                        <br />
                    <label>Email:
                        <input type="email"
                                className="form-input"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                    </label>
                        <br />
                    <label>Username:
                        <input type="text"
                                className="form-input"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                    </label>
                        <br />
                    <label>Password:
                        <input type="password"
                                className="form-input"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                    </label>
                        <button className="form-button" type="submit" value={this.props.formType}>Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
