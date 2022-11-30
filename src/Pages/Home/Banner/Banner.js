import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/zNG3Xm4/purple-back-school-product-display-podium-stand-horizontal-image-from-side-pencils-books-611870-2762.webp")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there is a Chaffer resale not worry to sale product</h1>
                    <p className="mb-5">something where you list your product in an eCommerce store with a title providing all the required information regarding your product, thus helping users to perceive your product better.</p>
                    <PrimaryButton>Get started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;


