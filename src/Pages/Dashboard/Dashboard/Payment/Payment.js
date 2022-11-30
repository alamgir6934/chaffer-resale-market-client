import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const { order, rsprice, OrderDate } = booking;
    console.log('booking', booking)
    return (
        <div>
            <h3 className="text-3xl">Payment for:{booking.order}</h3>
            <p className="text-xl">Please pay $:{booking.rsprice}  for your order on {booking.OrderDate}  </p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;