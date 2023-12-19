import React, { useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Spinner } from '../components/animation/Spinner';
import CheckoutForm from '../components/Checkout/CheckoutForm';
import { useSelector } from 'react-redux';
import { selectItems } from "../redux-store/cartSlice";

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(true);

    const stripePromise = loadStripe(
        "pk_test_51OMRVALyzOhw50jnAqxDVuiKOyhKUlHbaN1ECZtEsaFKgEnEK1fu4ALIcaEddj2aRmBBgaxo2WjZjQaBWOAzWk2D00K4pv5eXl"
      );

    const [clientSecret, setClientSecret] = useState("");

    const paniers = useSelector(selectItems);

    useEffect(() => {
      axios
        .post("http://localhost:8000/api/stripe/create", {

                  "products": [
                    {
                      "amount": 997
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

    const options = {
      // passing the client secret obtained from the server
      clientSecret: clientSecret,
    };

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