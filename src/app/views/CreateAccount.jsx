import React from "react";
import {Formik, Form} from 'formik'; 
import  TextField  from './../components/Connexion/TextField'
import ReusableButton from '../components/Connexion/ReusableButton';

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

                            <div class="flex items-center mb-4">
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/>
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> J'accepte de recevoir les promotions de Pixel Perfect</label>
                            </div>

                            <div class="flex items-center mb-4">
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500"/>
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Je m'inscris à la newsletter</label>
                            </div>

                            <div class="flex items-center">
                                <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 "/>
                                <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">En cliquant sur Créer mon compte, je certifie avoir lu et accepté nosthe <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Conditions d’Utilisations et notre Politique de protections de données</a>.</label>
                            </div>

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