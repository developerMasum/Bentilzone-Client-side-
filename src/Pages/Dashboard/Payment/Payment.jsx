

import React from 'react';
import useCart from '../../../components/Hooks/useCart';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const [cart] = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const deliveryChrg = 15;
  const sumTotal = (total * 1.5) + deliveryChrg ;
  const price = sumTotal.toFixed(2);

  const stripePromise = loadStripe('VITE_PAYMENT_KEY = pk_test_51NETnwCEAAX8Cl7jSxvoucvTwPPYRS3YGv9UFQSOCfRX8AtyqCHdDtVrIH1MsEtKkbCwmB726emUpe4PHtXsl1cP00E6fGITRd');
  // console.log(stripePromise);
    return (
        <div>
          <div>
          
          <h2 className="text-3xl mb-8"> Payment here </h2>
          <Elements stripe={stripePromise}>
              <CheckoutForm  cart={cart} price={price} ></CheckoutForm>
          </Elements>
      </div>
        </div>
    );
};

export default Payment;