import React from 'react';

const ReviewItem = ({ review }) => {

    let month = review.created_at.slice(5, 7)
    switch (month) {
        case '01':
            month = 'January'
            break;
        case '02':
            month = 'February'
            break;
        case '03':
            month = 'March'
            break;
        case '04':
            month = 'April'
            break;
        case '05':
            month = 'May'
            break;
        case '06':
            month = 'June'
            break;
        case '07':
            month = 'July'
            break;
        case '08':
            month = 'August'
            break;
        case '09':
            month = 'September'
            break;
        case '10':
            month = 'October'
            break;
        case '11':
            month = 'November'
            break;
        case '12':
            month = 'December'
            break;
        }

    return (
        <li className='review-li'>
            <div className='review-info'>
                <div className="review-profile">
                    <img src={window.show_star} />
                
                    <div className='review-author'>
                        <p>{review.author_id}</p>
                        <div className='review-date'>
                            <span>{month} </span>
                            <span>{review.created_at.slice(0, 4)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='review-body'>
                <span>{review.body}</span>
            </div>

            <div className='show-review-each' />
        </li>
    )
}

export default ReviewItem;