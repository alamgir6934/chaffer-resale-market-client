import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import ProductModal from '../ProductModal/ProductModal';
import CategoryOption from './CategoryOption';

const AvailableProduct = ({ selectedDate }) => {
    // const [productOption, setProductOption] = useState([])
    const [book, setBook] = useState(null);
    const date = format(selectedDate, 'PP');
    // console.log(productOption[0].product)

    const { data: productOption = [], isLoading, refetch } = useQuery({
        queryKey: ['ProductOptions', date],
        queryFn: () => fetch(`https://chaffer-resale-server.vercel.app/ProductOptions?date=${date}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Order date {format(selectedDate, 'PP')}</p>
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
                        selectedDate={selectedDate}
                        setBook={setBook}
                        book={book}
                        refetch={refetch}
                    ></ProductModal>
                }

            </div>

        </section>
    );
};

export default AvailableProduct;