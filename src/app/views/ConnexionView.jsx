import React from 'react';
import ConnexionFormik from './../components/Connexion/ConnexionFormik'

const Connexion = () => {

  return (
    <div className='bg-white'>
      <h1 className='text-2xl font-bold mt-10 text-center mb-10'>Connexion</h1>
      <ConnexionFormik />
    </div>
  );
};

export default Connexion;