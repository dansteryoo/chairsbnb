import React from 'react';

class SplashForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            startDate: '',
            endDate: '',
            guest: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    update(f) {
        return e => this.setState({
            [f]: e.target.value
        });
    }

    // renderErrors() {
    //     return (
    //         <ul className='splash-form-errors'>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`splash-error-${i}`}>{error}</li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {

        return (
            <div className='splash-form-container'>
                <br />
                <div className='splash-form-title'>Book unique places to sit.</div>

                <form onSubmit={this.handleSubmit} className='splash-form'>
       
                    <div className='splash-form'>
                        <br />
                        <label className='splash-form-label'>WHERE
                        </label>
                        <input type='text'
                            className='splash-form-input'
                            value={this.state.location}
                            placeholder={'Anywhere'}
                            onChange={this.update('location')}
                        // required
                        />
                        
                        <br />
                    <div className='date-label-container'>
                        <label className='splash-form-label'>CHECK-IN
                        </label>
                            <label className='splash-form-label'>CHECKOUT
                        </label>
                    </div>
                        <div className='date-input-container'>
                            <div className='splash-form-checkin'>
                        <input type='date'
                            className='splash-form-input-date'
                            value={this.state.startDate}
                            placeholder={'mm/dd/yyyy'}
                            onChange={this.update('startDate')}
                        // required   
                        />
                            </div>
                            <div className='splash-form-checkout'>
                        <input type='date'
                            className='splash-form-input-date'
                            value={this.state.endDate}
                            placeholder={'mm/dd/yyyy'}
                            onChange={this.update('endDate')}
                        // required   
                        />
                            </div>
                    </div>
                        <br />
                        <label className='splash-form-label'>GUEST
                        </label>
                        <div className='splash-form-dropdown'>
                             <select className='guest-selector' onChange={this.update('guest')}>
                                <option value disabled>Guest</option>
                                <option value='1'>1</option>
                            </select>
                        </div>
                        <div className='splash-form-btn-container'>
                        <button className='splash-form-button' type='submit' value='search'>Search</button>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}

export default SplashForm;