import React from 'react';
import AdvertisedItems from '../advertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Resales from '../Resales/Resales';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <Resales></Resales>
            <Contact></Contact>

        </div>
    );
};

export default Home;