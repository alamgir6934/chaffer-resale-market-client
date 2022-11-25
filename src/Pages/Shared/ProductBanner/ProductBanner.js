import React from 'react';
import { DayPicker } from 'react-day-picker';

const ProductBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header
            style={{
                background: `url('https://i.ibb.co/zNG3Xm4/purple-back-school-product-display-podium-stand-horizontal-image-from-side-pencils-books-611870-2762.webp')`,
                backgroundSize: 'cover'
            }}


            className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src='https://i.ibb.co/YcvCZnC/book-with-scene-dragon-knight-1308-96282.webp' className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ProductBanner;