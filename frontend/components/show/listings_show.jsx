import React from 'react';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/src/constants';
import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates.css';

class ListingShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
            bookingDates: []
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.onFocusChange = this.onFocusChange.bind(this)
        this.onDatesChange = this.onDatesChange.bind(this)
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId)
        // document.addEventListener('mousedown', this.handleClick, false)
    }

    componentWillUnmount() {
        // document.removeEventListener('mousedown', this.handleClick, false)
    }

    onDatesChange({ startDate, endDate }) {
        this.setState({ startDate, endDate });
    }

    onFocusChange(focusedInput) {
        this.setState({ focusedInput });
    }

    handleSubmit(e) {
        e.preventDefault();
        // let { currentUser } = this.props;
        //     booking.start_date = booking.startDate
        //     booking.end_date = booking.endDate

        // let newBooking = { listingId, guest_id: currentUser.id, startDate, endDate };

        //     this.props.createBooking(newBooking);
    }

    render() {

        if (this.props.listing === undefined) {
            return <div></div>
        }

        let { listing } = this.props

        return (


    
    <div className='show-main'>

                {/* TOP SHOW IMAGES */}

                <div className='show-images-container'>

                    <div className='show-image-main'>
                        <img src={listing.images[0]}></img>
                    </div>
                    <div className='show-image image-1'>
                        <div className='each-show img-1'></div>
                    </div>
                    <div className='show-image image-2'>
                        <div className='each-show img-2'></div>
                    </div>
                    <div className='show-image image-3'>
                        <div className='each-show img-3'></div>
                    </div>
                    <div className='show-image image-4'>
                        <div className='each-show img-4'></div>
                    </div>

                </div>

        <div className='show-container'>

                    {/* LEFT SIDE CONTAINER */}

            <div className='show-left-side'>

                    <div className='show-name'>
                        <span>{listing.name}</span>
                    </div>
                    <div className='show-address'>
                        <span>{listing.address}</span>
                    </div>
                    <div className='show-description'>
                        <span>{listing.description}</span>
                    </div>
                            
                <div className='show-calendar-container'>
                    <div className='show-availability-div'>
                            <span>Availability</span>
                            <p>Enter your seat dates for accurate pricing and availability</p>
                        <div>
                        <div>
                            <DayPickerRangeController
                                startDate={this.state.startDate}
                                startDateId="mm/dd/yyyy"
                                endDate={this.state.endDate}
                                endDateId="mm/dd/yyyy"
                                focusedInput={this.state.focusedInput}
                                onDatesChange={this.onDatesChange}
                                onFocusChange={this.onFocusChange}
                                numberOfMonths={2}
                                hideKeyboardShortcutsPanel={true}
                                noBorder={true}
                            />
                        </div>
                            clearDates
                        </div>
                    </div>         
                </div>

                        {/* BOTTOM MESSAGE */}

                <div className='show-box-bottom-text'>
                            Botoom
                </div>

            </div>

                    {/* RIGHT SIDE CONTAINER */}

            <div className='show-right-side'>

                <div className='show-booking-box'>

                <div className='show-price-container'>
                    <span>${listing.price}</span> per night
                    <p className='show-price-rating'>
                    <img className='show-price-rating-star' src={window.show_star} />
                        5.00 
                        <span className='show-price-reviews'>
                            (396 reviews)
                        </span>
                    </p>  
                </div>

                            {/* RIGHT SIDE CHECKIN-CHECKOUT DATES */}

                            <form className='show-form'>

                                <div className='show-form-container'>
                                    <p className='show-form-label'>
                                        Dates
                                    </p>
                                    {/* BOOKING CALENDAR */}
                                <div className='date-range-picker'>
                                    <DateRangePicker
                                        startDate={this.state.startDate}
                                        startDateId="mm/dd/yyyy"
                                        endDate={this.state.endDate}
                                        endDateId="mm/dd/yyyy"
                                        focusedInput={this.state.focusedInput}
                                        onDatesChange={this.onDatesChange}
                                        onFocusChange={this.onFocusChange}
                                        numberOfMonths={1}
                                        hideKeyboardShortcutsPanel={true}
                                        startDatePlaceholderText="Check-in"
                                        endDatePlaceholderText="Checkout"
                                    />
                                </div>
                                <label className='show-form-label'>Guest
                                </label>
                                    <div className='show-form-dropdown'>
                                    <select className='show-form-guest-selector'>
                                        <option value disabled>Guest</option>
                                        <option value='1'>1 guest</option>
                                    </select>
                                </div>
                                <button
                                    className='show-form-btn'
                                    type='submit'
                                    value='Reserve'>
                                    Reserve
                                </button>
                                </div>
                            </form>


                            <div className='show-form-bottom'>
                                You won't be charged
                        </div>
                        <div id='clear-dates'>clearDates</div>
                </div>
            </div>

        </div>
    </div>
        )
    }
}

export default ListingShow;