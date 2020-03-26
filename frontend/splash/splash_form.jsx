import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { Redirect } from 'react-router-dom';

class SplashForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            startDate: '',
            endDate: '',
            guest: false,
            searchKeywords: false,
            renderSearchIndex: false,
            focusedInput: null,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount(){
        
        // this.props.clearErrors()
    }


    update(f) {
        return e => this.setState({
            [f]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let { startDate, endDate, searchKeywords, guest } = this.state;

        if (startDate && endDate) {
            startDate = startDate.format('yyyy/mm/dd');
            endDate = endDate.format('yyyy/mm/dd');
        }
        
        this.props.fetchSearchResult(searchKeywords, startDate, endDate);
        this.setState({ renderSearchIndex: true });
    };

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
        console.log(this.state.renderSearchIndex)
        if (this.state.renderSearchIndex) {
            return <Redirect to="/listings/search" />
        }
        
        return (
            <div className='splash-form-container'>
                <br />
                <div className='splash-form-title'>Book unique places to sit.</div>

                <form className='splash-form' onSubmit={this.handleSubmit}>
           
                    <div className='splash-form'>
                        <br />
                        <label className='splash-form-label'>WHERE
                        </label>
                        <input type='text'
                            className='splash-form-input'
                            placeholder={'Anywhere'}
                            onChange={this.update('searchKeywords')}
                            value={this.state.searchKeywords}
                        />
                        
                        <br />
                    <div className='date-label-container'>
                        <label className='splash-form-label'>
                            CHECK-IN
                        </label>
                            <label className='splash-form-label'>
                                CHECKOUT
                            </label>
                    </div>

                        <div className="splash-form-datepicker">
                            <DateRangePicker
                                startDate={this.state.startDate}
                                startDateId="mm/dd/yyyy"
                                endDate={this.state.endDate}
                                endDateId="mm/dd/yyyy"
                                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                                focusedInput={this.state.focusedInput}
                                onFocusChange={focusedInput => this.setState({ focusedInput })}
                                numberOfMonths={1}
                                hideKeyboardShortcutsPanel={true}
                                required
                            />
                        </div>

                        <br />
                        <label className='splash-form-label'>
                            GUEST
                        </label>
                        <div className='splash-form-dropdown'>
                            <select className='guest-selector' onChange={this.update('guest')}>
                                <option>Guest</option>
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