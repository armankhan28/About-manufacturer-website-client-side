import React from 'react';
import people1 from '../../Images/people1.png'
import people2 from '../../Images/people2.png'
import people3 from '../../Images/people3.png'
import Review from './Review';
const Reviews = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            review: '',
            location:'california',
            img: people1
        },
        {
            _id:2,
            name: 'Winson Herry',
            review: '',
            location:'california',
            img: people3
        },
        {
            _id:3,
            name: 'Winson Herry',
            review: '',
            location:'california',
            img: people2
        },
    ]
    return (
        <div className='mt-10'>
            <h2 className='font-bold text-4xl text-center'>Customer Review</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                        ></Review>)
                }
            </div>
        </div>
        
    );
};

export default Reviews;