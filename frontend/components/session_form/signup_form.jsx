import React from 'react';

 
class SignUpForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            formErrors: {
                email: '',
                password: '',
                firstName: '',
                lastName: ''
            }
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = Object.assign({}, this.state);
            user.first_name = user.firstName
            user.last_name = user.lastName

        this.props.processForm(user)
            .then(() => this.props.closeModal());
    };

    handleChange(e) {
        e.preventDefault();

        // f = field, v = values, e = event
        const { name, val } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'email':
                formErrors.email = 
                val.length < 1 ? 'Email address is not valid.' : '';
                break;
            case 'password':
                formErrors.password = 
                val.length < 6 ? 'Password must be at least 6 characters.' : '';
                break;
            case 'firstName':
                formErrors.firstname = 
                val.length < 1 ? 'First name must be filled out.' : '';
                break;
            case 'lastName':
                formErrors.lastname = 
                val.length < 1 ? 'Last name must be filled out.' : '';
                break;
        }

        this.setState({ formErrors, [name]: val });
    };

    // renderErrors() {

    //     return (
    //         <ul className='form-errors'>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>{error}</li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        
        const { formErrors } = this.state;

        return (
            <div className='form-container'>
                <div className='form-closing-x' onClick={() => this.props.closeModal()}>&#10005;</div>
                <br/>
                <div className='form-title'>Sign up with email</div>
                <form onSubmit={this.handleSubmit} noValidate className='form'>
                    <div className='form'>
                        <br/>
                        <input type='text'
                            className={formErrors.email.length > 0 ? 'error' : null}
                            placeholder={'Email address'}
                            onChange={this.handleChange}
                            name='email'
                            noValidate
                            // required
                        />
                        {formErrors.email.length > 0 && (
                            <span className='form-errors'>{formErrors.email}</span>
                        )}
                        <i id='form-icon-login' className='fas fa-envelope fa-lg'></i>
                        <br/>
                        <input type='text'
                                className={formErrors.firstName.length > 0 ? 'error' : null}
                                placeholder={'First name'}
                                onChange={this.handleChange}
                                name='firstName'
                                noValidate
                                // required
                            />
                        {formErrors.firstName.length > 0 && (
                            <span className='form-errors'>{formErrors.firstName}</span>
                        )}
                        <i id='form-icon-login' className='fas fa-user fa-lg'></i>
                        <br/>
                        <input type='text'
                                className={formErrors.lastName.length > 0 ? 'error' : null}
                                placeholder={'Last name'}
                                onChange={this.handleChange}
                                name='lastName'
                                noValidate
                                // required
                            />
                        {formErrors.lastName.length > 0 && (
                            <span className='form-errors'>{formErrors.lastName}</span>
                        )}
                        <i id='form-icon-login' className='fas fa-user fa-lg'></i>
                        <br/>
                        <input type='password'
                                className={formErrors.password.length > 0 ? 'error' : null}
                                placeholder={'Create a password'}
                                onChange={this.handleChange}
                                name='password'
                                noValidate
                                // required
                            />
                        {formErrors.password.length > 0 && (
                            <span className='form-errors'>{formErrors.password}</span>
                        )}
                        <i id='form-icon-login' className='fas fa-lock fa-lg'></i>
                        <button className='form-button' type='submit' value={this.props.formType}>Sign Up</button>
                    </div>
                </form>
            <br />
            <div className='form-change-container'>
                <p>Already have a ChairsBnB account?</p>
                    <button className='form-change-btn' onClick={() => this.props.openModal('Log In')}>
                    Log In
                    </button>
            </div>
            </div>
        );
    }
}

export default SignUpForm;


