import React, { useEffect, useState } from 'react';
import CategoryProductDetails from './CategoryProductDetails';

const CategoriesProduct = () => {
    const [productcatagory, setProductCatagory] = useState([])
    // const [book, setBook] = useState(null);
    useEffect(() => {
        fetch('ProductOptions.json')
            .then(res => res.json())
            .then(data => setProductCatagory(data))
    }, [])
    return (
        <section className='my-16'>
            {/* <p className='text-center text-secondary font-bold'>Available appointment on {format(selectedDate, 'PP')}</p> */}
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    productcatagory.map(option => <CategoryProductDetails
                        key={option._id}
                        productcatagory={option}
                    // setBook={setBook}
                    ></CategoryProductDetails>)
                }

            </div>

        </section>
    );
};

export default CategoriesProduct;