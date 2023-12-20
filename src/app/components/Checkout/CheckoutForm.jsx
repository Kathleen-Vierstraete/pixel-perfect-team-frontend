import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { clearCart } from '../../redux-store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectPurchaseId } from "../../redux-store/cartSlice";
import { URL_BACK_SET_PURCHASE_STATUS } from '../../constants/urls/urlBackEnd';
import apiBackEnd from '../../api/backend/api.Backend';
import { setHearderToken } from '../../services/tokenServices';
const CheckoutForm = ({ token }) => {

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const purchaseId = useSelector(selectPurchaseId);

  const [message, setMessage] = useState(null);

  //init for the clientSecret
  const clientSecret = new URLSearchParams(window.location.search).get(
    "payment_intent_client_secret"

  );

  const paymentElementOptions = {
    layout: "tabs"
  }

  //behavior if stripe isn't found
  useEffect(() => {
    if (!stripe) {
      return;
    }

    //default behavior if the clientSecret isn't found
    if (!clientSecret) {
      return;
    }

    //managing stripe payment intent
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
    // preventing the page from refreshing
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    //const to be able to clear cart and redirect
    const returnHome = () => {
      apiBackEnd.put(URL_BACK_SET_PURCHASE_STATUS(purchaseId),{name:"en cours"}, setHearderToken(token))
        .catch(error => {
          console.error("Error update purchase : ", error)
        })
      dispatch(clearCart())
      return "http://localhost:5173/account"
    }

    //stripe const to handle paiement
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: returnHome(),
      },

    })

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
  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center text-red-600'>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button className="block w-1/4 py-2 text-center text-white m-auto mt-2 rounded-lg bg-primary-light hover:bg-primary-dark">Payer</button>
        {/* Show any error or success messages */}
        {message && <div className='mt-5 text-xl font-semibold justify-center'>{message}</div>}
      </form>
    </div>
  );
};

export default CheckoutForm;