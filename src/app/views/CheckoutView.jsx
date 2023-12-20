import React, { useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import { Spinner } from '../components/animation/Spinner';
import CheckoutForm from '../components/Checkout/CheckoutForm';
import { useSelector } from 'react-redux';
import { selectTotalCost } from "../redux-store/cartSlice";
import { URL_BACK_STRIPE } from '../constants/urls/urlBackEnd';
import apiBackEnd from '../api/backend/api.Backend';
import { clientKey } from '../constants/stripeConstants';


const Checkout = () => {
    const [isLoading, setIsLoading] = useState(true);

    //init stripe client key
    const stripePromise = loadStripe(
      clientKey
      );

    const [clientSecret, setClientSecret] = useState("");

    //finding the total amount of the current basket
    const totalPrice = useSelector(selectTotalCost);

    const options = {
      // passing the client secret obtained from the server
      clientSecret: clientSecret,
    };

    //calling the API from the back
    useEffect(() => {
      apiBackEnd.post(URL_BACK_STRIPE, {
                  "products": [
                    {
                      "amount": totalPrice + 2900
                    },
                  ]
                })      
        .then((response) => {
          setClientSecret(response.data.clientSecret);
          setIsLoading(false);
          console.log("reponse axios :", response.data.clientSecret);
        })
        .catch((error) => {
          console.error("Error fetching client secret:", error);
        });
    }, []);

    return (

        isLoading ? (
            <Spinner message="Chargement" />
        ) : (
          <Elements stripe={stripePromise} options={options}>
              <CheckoutForm />
          </Elements>
        )
    )
}

export default Checkout;