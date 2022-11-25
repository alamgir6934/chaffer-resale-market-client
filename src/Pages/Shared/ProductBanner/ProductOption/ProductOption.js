import React from 'react';
import { Link } from 'react-router-dom';

const ProductOption = ({ appointmentOption }) => {
    const { title, _id } = appointmentOption
    return (
        <div>
            <li><Link to={`/ProductOptions.json/${_id}`}>{title}</Link></li>
        </div>
    );
};

export default ProductOption;