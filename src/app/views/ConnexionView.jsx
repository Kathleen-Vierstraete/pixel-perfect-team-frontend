import React from 'react';
import ConnexionFormik from './../components/Connexion/ConnexionFormik'

const Connexion = () => {

  return (
    <div className='bg-white'>
      <h1 className='font-SilkScreen text-2xl font-bold mt-2 text-center mb-10 text-primary-dark '>Connexion</h1>
      <ConnexionFormik />
    </div>
  );
};

export default Connexion;