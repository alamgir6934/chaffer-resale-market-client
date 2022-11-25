import React from 'react';
import AvailableProduct from '../AvailableProduct/AvailableProduct';
import CategoryBanner from '../CategoryBanner/CategoryBanner';

const Category = () => {
    return (
        <div>
            <CategoryBanner></CategoryBanner>
            <AvailableProduct></AvailableProduct>

        </div>
    );
};

export default Category;