import React from 'react';

class BookingCancel extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.deleteBooking(this.props.bookingId)
            .then(() => this.props.closeModal());
    };
    
    render() {

    return (
        <div className='booking-cancel-confirmation'>
            <div className='booking-cancel-title'>
                <span>Please confirm cancellation</span>
            </div>
            <button className='booking-cancel-yes' 
                type='submit'
                onClick={this.handleSubmit}>
                Cancel booking
            </button>
            <button className='booking-cancel-no' 
                type='submit'
                onClick={() => this.props.closeModal()}>
                Back to bookings
            </button>
        </div>
        )
    }
};

export default BookingCancel;