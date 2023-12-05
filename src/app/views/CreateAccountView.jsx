import React from "react";
import CreateAccountFormik from './../components/Connexion/CreateAccountFormik'

const CreateAccount= () => {

    return (

        <div className='bg-white'>
        <h1 className='text-2xl font-bold mt-10 text-center mb-5'>Création de compte</h1>
        <p className='text-sm text-center mb-5'>Déjà inscrit? <a href="#" className="underline">Se connecter</a> </p>
        <CreateAccountFormik />
    </div>
    )
};

export default CreateAccount;