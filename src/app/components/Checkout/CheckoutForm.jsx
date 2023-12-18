import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { selectTotalCost} from "../../redux-store/cartSlice";
import { useSelector } from 'react-redux';

const CheckoutForm = () => {

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);

  const totalPrice = useSelector(selectTotalCost);
  

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Paiement réussi!");
          break;
        case "processing":
          setMessage("Votre paiement est en cours.");
          break;
        case "requires_payment_method":
          setMessage("Votre paiement a échoué, veuillez à nouveau.");
          break;
        default:
          setMessage("Quelque chose s'est mal passé.");
          break;
      }
    });
  }, [stripe]);


  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }



    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:5173/",
      },
    
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

  };

    const paymentElementOptions = {
      layout: "tabs"
    }
    

  return (
    <div className='flex justify-center'>
      <p className='flex flex-col justify-center'>total items : {totalPrice /100} </p>

      <form onSubmit={handleSubmit} className='flex flex-col justify-center text-red-600'>
        <PaymentElement id="payment-element" options={paymentElementOptions}/>
        <button className="block w-1/4 py-2 text-center text-white m-auto mt-2 rounded-lg bg-primary-light hover:bg-primary-dark">Payer</button>
              {/* Show any error or success messages */}
      {message && <div className='mt-5 text-xl font-semibold justify-center'>{message}</div>}
      </form>
    </div>
  );
};

export default CheckoutForm;