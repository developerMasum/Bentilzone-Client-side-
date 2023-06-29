import React from 'react';
import Banner from '../../components/Banner/Banner';
import Fruits from '../../components/FruitSection/Fruits';
import HotDishes from '../../components/Dishes/HotDishes';
import Menu from '../../components/Menu/Menu';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='pt-12'>
               <Helmet>
        <title>Bentilzone Restaurant</title>
      </Helmet>
            <Banner />
            <Fruits />
            <HotDishes />
            <Menu />
            
        </div>
    );
};

export default Home;