import React from 'react';
import { Link } from 'react-router-dom';

const CategoryOption = ({ productOption }) => {
    const { title, image, product, name } = productOption
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <img className='h-52' src={image} alt="" />
                <h2 className="text-2xl text-secondary font-bold text-center">{title}</h2>
                {/* <p>{product.length > 0 ? product[0] : 'try another day'}</p> */}
                <p>{product.length}{product.length > 1 ? 'book' : 'book'}available</p>
                {/* <p><small>price: ${price}</small></p> */}
                <div className="card-actions justify-center">
                    {/* <label
                    disabled={product.length === 0}
                    onClick={() => setTreatment(appointmentOption)}
                    htmlFor="Booking-modal" className="btn">Book Appointment</label> */}
                    <button className='btn btn-primary text-white'>Booknow</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryOption;