import React from 'react';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import { START_DATE } from 'react-dates/src/constants';
import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates.css';
import ReviewItem from './review_item'
import NavSearchSessionContainer from '../navbar/navsearch_session';
import NavSearchLogoutContainer from '../navbar/navsearch_logout_container';
import ShowMap from '../map/show_map.js'
import { Redirect } from 'react-router-dom';

class ListingShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
            startDateId: null,
            endDateId: null,
            bookingDates: [],
            renderBookings: false
            
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.onFocusChange = this.onFocusChange.bind(this)
        this.dayIsBlocked = this.dayIsBlocked.bind(this)
    };

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId)
    };

    onFocusChange(focusedInput) {
        this.setState({ focusedInput });
    };

    dayIsBlocked(day) {
        const { bookings, listing } = this.props;

        for (let i = 0; i < bookings.length; i++) {
            if (bookings[i].listing_id === listing.id) {
                if (this.state.startDate
                    && this.state.startDate.isBefore(bookings[i].start_date, 'day')) {
                    if (day.isBetween(bookings[i].start_date, bookings[i].end_date, 'day', '[]')) {
                        return true;
                    } else if (day.isAfter(bookings[i].end_date, 'day')) {
                        return true;
                    } else if (day.isSame(bookings[i].end_date, 'day')) {
                        return true;
                    };
                } else {
                    if (day.isBetween(bookings[i].start_date, bookings[i].end_date, 'day', '[]')) {
                        return true;
                    };
                };
            }
        }
        return false;
    };

    update(f) {
        return e => this.setState({
            [f]: e.target.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();

        const { startDate, endDate } = this.state;
        if (!startDate || !endDate) {
            this.setState({ focusedInput: START_DATE });
        } else {
            if (this.props.currentUser === undefined) {
                this.props.openModal('Sign Up');
            } else {
                let listing_id = this.props.match.params.listingId;
                let start_date = startDate.format('YYYY/MM/DD');
                let end_date = endDate.format('YYYY/MM/DD');
                let guest_id = this.props.currentUser.id;
                let newBooking = (listing_id, start_date, end_date, guest_id);

                this.props.createBooking(newBooking);
                this.setState({ renderBookings: true });
            }
        }
    };

    render() {
        
        if (this.props.listing === undefined) {
            return <div></div>
        };

        if (this.state.renderBookings) {
            return <Redirect to='/bookings' />
        };
        
        const { listing, currentUser, openModal, logout } = this.props;
        const { lat, long, address } = this.props.listing;

        
        const overallRating = (listing.reviews.map(each => each.review.overall_rating)
            .reduce((acc, each) => acc += each, 0) / listing.reviews.length)
            .toFixed(2);

        const navLinks = () => {
            if (currentUser) {
                return <NavSearchLogoutContainer logout={logout}/>
            } else {
                return <NavSearchSessionContainer openModal={openModal}/>
            }
        };
        
        return (
    
        <div className='show-main'>

                { navLinks() }

                {/* TOP SHOW IMAGES */}

                <div className='show-images-container'>

                    <div className='show-image-main'>
                        <img src={listing.images[0]}></img>
                    </div>
                    <div className='show-image image-1'>
                        <img src={listing.images[1]}></img>
                    </div>
                    <div className='show-image image-2'>
                        <img src={listing.images[2]}></img>
                    </div>
                    <div className='show-image image-3'>
                        <img src={listing.images[3]}></img>
                    </div>
                    <div className='show-image image-4'>
                        <img src={listing.images[4]}></img>
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
                        <p>Description</p>
                        <span>{listing.description}</span>
                    </div>

                        <div className='show-top-content'>
                            <div className='top-content-title'>
                                <span>Sitting arrangements</span>
                            </div>
                                <div className='top-content-info'>
                                    <i className='fas fa-chair fa-lg'></i>
                                    <span>Seating 1</span>
                                    <p>1 single chair</p>
                                </div>
                        </div>

                <div className='show-calendar-container'>
                    <div className='show-availability-div'>
                            <span>Availability</span>
                            <p>Enter your seat dates for accurate pricing and availability</p>
                        <div>
                        <DayPickerRangeController
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                focusedInput={this.state.focusedInputStart}
                                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                                onFocusChange={focusedInput => this.setState({ focusedInput })}
                                numberOfMonths={2}
                                isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
                                isDayBlocked={day => this.dayIsBlocked(day)}
                                hideKeyboardShortcutsPanel={true}
                                noBorder={true}
                            />
                        </div>
                    </div>         
                </div>

                        {/* REVIEWS */}

                <div className='show-reviews'>
                    <p className='show-review-title'>
                        Reviews
                    </p>

                    <div className='show-review-title-ratings'>
                        <div className='ratings-num'>
                            <img src={window.show_star} />
                            <span>{overallRating}</span>
                        </div>
                        <div className='reviews-separator'/>
                        <div className='reviews-num'>
                            <span>239</span>
                        </div>
                        <p>reviews</p>
                    </div>

                    <div className='show-review-ratings-chart'> 
                        <img src={listing.images[5]}></img>
                    </div>
                        <span>
                            <ul className='review-ul'>
                                {
                                    listing.reviews.map(each => (
                                        <ReviewItem
                                            review={each.review}
                                            author={each.author}
                                            key={each.review.id}
                                        />
                                    ))
                                }
                            </ul>
                        </span>
                    </div>
                        <div className='show-bottom-google'>
                            <span>The neighborhood</span>
                            <p>{address}</p>
                                {/* 
                                                            {window.googleAPIKey}
                            <MapContainer lat={lat} long={long} address={address} />

                                */}

                            <ShowMap lat={lat} long={long} address={address} />
                            <p>Exact location information is provided after a booking is confirmed</p>
                        </div>

                        <div className='show-bottom-content'>
                            <div className='bottom-content-title'>
                                <span>Things to keep in mind</span>
                            </div>
                                <div className='bottom-content-info'>
                                    <span>Check-in: </span>
                                        <p>After 12:00 PM</p>
                                    <br />
                                    <span>Checkout: </span>
                                        <p>2:00 PM</p>
                                </div>
                                
                            {/* CHAIR RULES CONTAINER */}

                            <div className='bottom-rules'>
                                    <span>Chair Rules</span>
                                <div className='chair-rules-content'>
                                    <div className='chair-rules-top'>
                                        <div className='chair-rules-top-left'>
                                            <img className='chair-rules-baby' src={window.baby} />
                                                <p>Not suitable for infants (under 2 years)</p>
                                        </div>
                                        <div className='chair-rules-top-right'>
                                        <img className='chair-rules-smoking' src={window.smoking} />
                                            <p>No smoking</p>
                                        </div>
                                    </div>   
                                    <div className='chair-rules-bottom'>
                                        <img className='chair-rules-pets' src={window.pets} />
                                            <p>No pets</p>
                                        <img className='chair-rules-party' src={window.party} />
                                            <p>No parties or events</p>
                                    </div>
                                </div>
                            </div>

                                <div className='bottom-cancellation'>
                                    <span>Cancellations</span>
                                    <p>Free cancellation available anytime for this seat.</p>
                                </div>
                        </div>
            </div>

                    {/* RIGHT SIDE CONTAINER */}

            <div className='show-right-side'>

                <div className='show-booking-box'>

                <div className='show-price-container'>
                    <span>${listing.price}</span> per night
                    <p className='show-price-rating'>
                    <img src={window.show_star} />
                                    {overallRating}
                        <span className='show-price-reviews'>
                            (239 reviews)
                        </span>
                    </p>  
                </div>

                            {/* RIGHT SIDE CHECKIN-CHECKOUT DATES */}

                            <form onSubmit={this.handleSubmit} className='show-form'>

                                <div className='show-form-container'>
                                    <p className='show-form-label'>
                                        Dates
                                    </p>

                                    {/* BOOKING CALENDAR */}

                                <div className='date-range-picker'>
                                    <DateRangePicker
                                        startDate={this.state.startDate}
                                        startDateId='MM/DD/YYYY'
                                        endDate={this.state.endDate}
                                        endDateId='MM/DD/YYYY'
                                        focusedInput={this.state.focusedInput}
                                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                                        numberOfMonths={1}
                                        hideKeyboardShortcutsPanel={true}
                                        startDatePlaceholderText='Check-in'
                                        endDatePlaceholderText='Checkout'
                                        isDayBlocked={day => this.dayIsBlocked(day)}
                                    />
                                </div>
                                <label className='show-form-label'>Guest
                                </label>
                                    <div className='show-form-dropdown'>
                                        <select className='show-form-guest-selector' onChange={this.update('guest')}>
                                            <option>Guest</option>
                                            <option value='1'>1</option>
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
                            <button className='show-clear-button'
                                onClick={() => this.setState({
                                    startDate: null,
                                    endDate: null,
                                    focusedInput: null
                                })}> Clear dates</button>
                    </div>
                </div>
            </div>
         </div>
        )
    }
}

export default ListingShow;