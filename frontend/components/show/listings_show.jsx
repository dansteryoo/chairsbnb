import React from 'react';

class ListingShow extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     startDate: '',
        //     endDate: '',
        //     bookingDates: []
        // };

        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId)
    }


    // handleSubmit(e) {
    //     e.preventDefault();
        // let { currentUser } = this.props;
            // booking.start_date = booking.startDate
            // booking.end_date = booking.endDate

        // let newBooking = { listingId, guest_id: currentUser.id, startDate, endDate };

        //     this.props.createBooking(newBooking);
        // };

    render() {

        if (this.props.listing === undefined) {
            return <div></div>
        }

        let { listing } = this.props

        return (


    <div className='show-main'>

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

            <div className='show-left-side'>

                    <div className='show-name'>
                        <span>{listing.name}</span>
                    </div>

                    <div className='show-address'>
                        <span>{listing.address}</span>
                    </div>

                    <hr className='show-hr-below-address' />
                            
                    <div className='show-description'>
                        <span>{listing.description}</span>
                    </div>

                    <hr className='show-hr-below-address' />
                            
                <div className='show-calendar-container'>
                        CALENDAR CONTAINER
                    <div className='show-availability-div'>
                            Availability
                    </div>
                    <div>
                            RANGE
                    </div>
                    <div>
                            CLEAR
                    </div>
                        
                </div>

                <div className='show-booking-box'>

                        BOOKING BOX
                        <div className='show-price-container'>
                            <span>${listing.price}</span> / night
                        </div>
                            <hr className='show-box-hr' />

                    <form>
                        <div className='show-form-container'>
                            SHOW FORM CONTAINER
                        <div className='show-search-box-label'>
                            <span>Dates</span>
                        </div>
                            
                            DATE RANGE
                        <div className='show-search-box-label'>
                            <span>Guest</span>
                        </div>
                    
                            <button
                                className='show-box-booking-btn'
                                type='submit'
                                value='Reserve' />
                        </div>
                    </form>

                        <div className='show-box-bottom-text'>
                            BOTTOM MESSAGE
                        </div>

                </div>


            </div>
        </div>
    </div>
        )
    }
}

export default ListingShow;