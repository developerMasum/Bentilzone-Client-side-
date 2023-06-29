import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div className='pt-20'>
            <Helmet>
        <title>Bentilzone Restaurant | About Us</title>
      </Helmet>
          <div className="text-center">
        <h5 className="text-xl font-semibold">About us</h5>
        <hr className="inline-block w-20 border border-orange-600 border-t-2 mb-2" />
      </div>
      <h2 className='text-lg text-center'>This Section is coming soon.......</h2>
        </div>
    );
};

export default AboutUs;