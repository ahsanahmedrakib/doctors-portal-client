import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../Services/Services';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner'
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <AppoinmentBanner />
        </div>
    );
};

export default Home;