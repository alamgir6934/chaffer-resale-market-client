import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ProductModal from '../ProductModal/ProductModal';
import CategoryOption from './CategoryOption';

const AvailableProduct = () => {
    // const [productOption, setProductOption] = useState([])
    const [book, setBook] = useState(null);
    // console.log(productOption[0].product)

    const { data: productOption = [], isLoading } = useQuery({
        queryKey: ['ProductOptions'],
        queryFn: () => fetch('http://localhost:5000/ProductOptions')
            .then(res => res.json())
    })


    return (
        <section className='my-16'>
            {/* <p className='text-center text-secondary font-bold'>Available appointment on {format(selectedDate, 'PP')}</p> */}
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    productOption.map(option => <CategoryOption
                        key={option._id}
                        productOption={option}
                        setBook={setBook}
                    ></CategoryOption>)
                }



                {
                    book &&
                    <ProductModal
                        // selectedDate={selectedDate}
                        setBook={setBook}
                        book={book}
                    // refetch={refetch}
                    ></ProductModal>
                }

            </div>

        </section>
    );
};

export default AvailableProduct;