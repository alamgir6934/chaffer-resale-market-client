import React from 'react';

const AdvertisedItems = () => {
    return (
        <div className='py-7'>
            <div>
                <h1 className='text-5xl text-center italic'>BOOK OF THE MONTH</h1>
            </div>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="carousel grid lg:grid-cols-3 grid-cols-2 md:grid-cols-2">
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/fF0qjqT/open-book-icon-education-symbol-flat-design-vector-illustration-53876-136267.webp" alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/9Gxth3w/book-diagonal-view-silhouette-with-bookmark-318-46214.webp" alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/qgxJ4DR/book-halloween-doodle-set-32991-1006.webp" alt="Burger" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Advertised Item here</h1>
                        <p className="py-6">1. Optimize your independent bookstore's online business presence. </p>
                        <br />
                        <p className="py-6">1. Optimize your independent bookstore's online business presence. </p>
                        <br />
                        <p className="py-6">1. Optimize your independent bookstore's online business presence. </p>
                        <br />
                        <p className="py-6">1. Optimize your independent bookstore's online business presence. </p>
                        <br />
                        <p className="py-6">1. Optimize your independent bookstore's online business presence. </p>
                        <br />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItems;



