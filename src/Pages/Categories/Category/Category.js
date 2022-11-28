import React, { useState } from 'react';
import AvailableProduct from '../AvailableProduct/AvailableProduct';
import CategoryBanner from '../CategoryBanner/CategoryBanner';

const Category = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className='grid mt-8 gap-6 grid-cols-1'>
            <CategoryBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></CategoryBanner>
            <AvailableProduct
                selectedDate={selectedDate}

            ></AvailableProduct>

        </div>
    );
};

export default Category;