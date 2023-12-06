import React from 'react';
import squid from "../assets/images/404_squid.png"
import { Link } from 'react-router-dom';
import { URL_HOME } from './../constants/urls/urlFrontEnd';

const Page404 = () => {

  return (
    <div>
        <div className=''>
            <img src={ squid } alt="404 squid image" className='mx-auto' />
        </div>
        <div className="flex justify-center pb-4">
            <span className='font-SilkScreen text-xl'>Page non trouvée</span>
        </div> 
        <div className="text-xl flex justify-center pt-4">
            <Link to="/" >  
                <p className='hover:underline'>Retour à la page d'accueil</p>
      
            </Link >
        </div>   
    </div>

    
  );
};

export default Page404;