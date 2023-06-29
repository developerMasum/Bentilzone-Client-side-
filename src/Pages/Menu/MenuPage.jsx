import React from 'react';
import AllMenu from './AllMenu';
import ItemPage from './ItemPage';
import { Helmet } from 'react-helmet-async';

const MenuPage = () => {
  return (
    <div>
         <Helmet>
        <title>Bentilzone Restaurant | Menu</title>
      </Helmet>
    <div className='pt-14'>
    <AllMenu />
    <ItemPage />
    </div>
      
    </div>
  );
};

export default MenuPage;