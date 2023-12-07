import React from "react";
import CreateAccountFormik from './../components/Connexion/CreateAccountFormik'
import { Link } from "react-router-dom";

const CreateAccount= () => {

    return (

        <div className='bg-white'>
        <h1 className='text-2xl font-bold mt-10 text-center mb-5'>Création de compte</h1>
        <p className='text-sm text-center mb-5'>Déjà inscrit? <Link to="/connexion" className="underline">Se connecter</Link></p>
        <CreateAccountFormik />
    </div>
    )
};

export default CreateAccount;

<Link to="/connexion">Se connecter</Link>
