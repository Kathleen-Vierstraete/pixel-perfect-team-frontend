import React from "react";
import CreateAccountFormik from './../components/Connexion/CreateAccountFormik'
import { Link } from "react-router-dom";
import { URL_CONNEXION } from "../constants/urls/urlFrontEnd";

const CreateAccount= () => {

    return (

    <div className='bg-white'>
        <h1 className='text-2xl font-bold mt-10 text-center mb-5 text-primary-dark font-SilkScreen'>Création de compte</h1>
        <p className='text-sm text-center mb-5 font-numito font-semibold' >Déjà inscrit? <Link to={URL_CONNEXION} className="underline">Se connecter</Link></p>
        <CreateAccountFormik />
    </div>
    )
};

export default CreateAccount;


