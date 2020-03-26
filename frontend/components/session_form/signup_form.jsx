import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentWillUnmount() {
        this.props.clearErrors();
    };

    handleSubmit(e) {
        e.preventDefault();

        let user = Object.assign({}, this.state);
        user.first_name = user.firstName
        user.last_name = user.lastName

        this.props.processForm(user)
            .then(() => this.props.closeModal());
    };

    update(f) {
        return e => this.setState({
            [f]: e.target.value
        })
    };

    renderErrors() {
        if (this.props.errors === undefined) {
            this.props.errors = []
        }
        return (
            <ul className='form-errors'>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    }

    render() {

        const yearsArr = [];
        const daysArr = [];
        for (let i = 2020; i > 1900; i--) {
            yearsArr.push(i);
        }

        for (let i = 1; i <= 31; i++) {
            daysArr.push(i);
        }

        const years = yearsArr.map(year => {
            return (<option key={year} value={year}>{year}</option>)
        })

        const days = daysArr.map(day => {
            return (<option key={day} value={day}>{day}</option>)
        })

        return (
            <div className='form-container'>
                <div className='form-closing-x' onClick={() => this.props.closeModal()}>&#10005;</div>
                <br />
                <div className='form-title'>Sign up with email</div>
                    <form onSubmit={this.handleSubmit} className='form'>
                    <br />
                    {this.renderErrors()}
                    <br />
                    <div className='form'>
                        <input type='email'
                            className='form-input'
                            value={this.state.email}
                            placeholder={'Email address'}
                            onChange={this.update('email')}
                            name='email' 
                        // noValidate
                        // required
                        />
                        <i id='form-icon-login' className='fas fa-envelope fa-lg'></i>
                        <br />
                        <input type='text'
                            className='form-input'
                            value={this.state.firstName}
                            placeholder={'First name'}
                            onChange={this.update('firstName')}
                            name='firstName'
                        // noValidate
                        // required
                        />
                        <i id='form-icon-login' className='fas fa-user fa-lg'></i>
                        <br />
                        <input type='text'
                            className='form-input'
                            value={this.state.lastName}
                            placeholder={'Last name'}
                            onChange={this.update('lastName')}
                            name='lastName'
                        // noValidate
                        // required
                        />
                        <i id='form-icon-login' className='fas fa-user fa-lg'></i>
                        <br />
                        <input type='password'
                            className='form-input'
                            value={this.state.password}
                            placeholder={'Create a password'}
                            onChange={this.update('password')}
                            name='password'
                        // noValidate
                        // required
                        />
                        <i id='form-icon-login' className='fas fa-lock fa-lg'></i>
                        <br />
                        <p className='birthday'>Birthday</p>
                        <p className='birthday-text'>To sign up, you need to be at least 18. Other people who use ChairsBnB won’t see your birthday.</p>
                            <br />
                        <div className='birthday-selector'>
                        <div className='bday-month'>
                                <select className='month-selector'>
                                    <option disabled value=''>Month</option>
                                <option value='1'>January</option>
                                <option value='2'>February</option>
                                <option value='3'>March</option>
                                <option value='4'>April</option>
                                <option value='5'>May</option>
                                <option value='6'>June</option>
                                <option value='7'>July</option>
                                <option value='8'>August</option>
                                <option value='9'>September</option>
                                <option value='10'>October</option>
                                <option value='11'>November</option>
                                <option value='12'>December</option>
                            </select>
                        </div>
                        <div className='bday-day'>
                                <select className='day-selector'>
                                    <option disabled value=''>Day</option>
                                {days}
                            </select>
                        </div>
                        <div className='bday-year'>
                                <select className='year-selector'>
                                    <option disabled value=''>Year</option>
                                {years}
                            </select>
                        </div>
                        </div>
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

export default SignUp;

