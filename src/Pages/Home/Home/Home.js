import React from 'react';
// import { useLoaderData } from 'react-router-dom';
import AdvertisedItems from '../advertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';


import Contact from '../Contact/Contact';
import Resales from '../Resales/Resales';


const Home = () => {
    // const allCategory = useLoaderData();
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            {/* <h2>Total product category:{allCategory.length}</h2> */}
            {/* {
                allCategory.map(category => <ResaleCategoryCard
                    key={category._id}
                    category={category}
                ></ResaleCategoryCard>)
            } */}
            <Resales></Resales>
            <Contact></Contact>

        </div>
    );
};

export default Home;