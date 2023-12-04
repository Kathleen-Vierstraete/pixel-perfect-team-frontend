import React from "react";
import {Formik, Form} from 'formik'; 
import  TextField  from './../components/Connexion/TextField'
import ReusableButton from '../components/Connexion/ReusableButton';
import Checkbox from "../components/Connexion/Checkbox";

const CreateAccount= () => {
    return (

        <div className='bg-white'>
        <h1 className='text-2xl font-bold mt-10 text-center mb-10'>Création de compte</h1>
        <Formik>
        
            {formik => 
        <div className='flex justify-center' >
            <div className='flex flex-col items-center pb-5 pt-5 mb-10 w-full '>
                <div className="w-full max-w-xs">

                        <Form>
                            <TextField  label="Prénom" name="Prénom" type="text"/>
                            <TextField  label="Nom" name="nom" type="text"/>
                            <TextField  label="Adresse e-mail" name="email" type="email"/>
                            <TextField  label="Mot de passe" name="password" type="password"/>

                            <p className='mt-3'>Le mot de passe doit contenir:</p>
                            <p className=''>Entre 12 et 32 caractères</p>
                            <p className=''>Au moins une majuscule et une minuscule</p>
                            <p className='mb-3'>Un caractère spécial</p>

                            <TextField  label="Confirmation de mot de passe" name="passwordconfirm" type="password"/>

                            <Checkbox labelText="J’accepte de recevoir des promotions de la part de Pixel Perfect"/>

                            <Checkbox labelText="Je m'inscris à la Newsletter"/>

                            <Checkbox labelText={
                                <span>
                                    En cliquant sur Créer mon compte, je certifie avoir lu et accepter nos <a href="#" className="underline">Conditions d’Utilisations</a> et notre <a href="#" className="underline">notre Politique de protections de données</a>.  
                                </span>
                            }/>



                            <ReusableButton>Créer mon compte</ReusableButton>
                        </Form>
                </div>
            </div>
        </div>
            }
        </Formik>
    </div>
    )

};

export default CreateAccount;