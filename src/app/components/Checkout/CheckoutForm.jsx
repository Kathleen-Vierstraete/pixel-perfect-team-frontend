import {PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  return (
    <div className='flex justify-center'>
    <form className='flex flex-col justify-center text-red-600'>
      <PaymentElement/>
      <button className="block w-1/4 py-2 text-center text-white m-auto mt-2 rounded-lg bg-primary-light hover:bg-primary-dark">Payer</button>
    </form>
    </div>
  );
};

export default CheckoutForm;