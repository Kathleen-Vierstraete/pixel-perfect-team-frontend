import React, { useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Spinner } from '../components/animation/Spinner';

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(true);

    const stripePromise = loadStripe(
        "pk_test_51OMRVALyzOhw50jnAqxDVuiKOyhKUlHbaN1ECZtEsaFKgEnEK1fu4ALIcaEddj2aRmBBgaxo2WjZjQaBWOAzWk2D00K4pv5eXl"
      );

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        axios
          .post("http://localhost:8000/api/stripe/create", {
            headers: { "Content-Type": "application/json" },
            data: {
              currency: "eur",
              amount: 1999,
              description: "bla bla bla",
            },
          })
          .then((response) => {
            setClientSecret(response.data.clientSecret);
            setIsLoading(false);
            console.log("reponse axios :",response.data.clientSecret);
          })
          .catch((error) => {
            console.error("Error fetching client secret:", error);
          });
      }, []);
    
      const options = {
        // passing the client secret obtained from the server
        clientSecret: clientSecret,
      };

    console.log(clientSecret);
    console.log(options);

    return (

        isLoading ? (
            <Spinner message="Chargement" />
        ) : (
          <Elements stripe={stripePromise} options={options}>
            <form>
              <PaymentElement />
              <button>Submit</button>
            </form>
          </Elements>
        )
    )
}

export default Checkout;