import React from "react";
import {Formik, Form} from 'formik'; 
import  TextField  from '../components/Connexion/TextField'
import ReusableButton from '../components/Connexion/ReusableButton';
import Checkbox from "../components/Connexion/Checkbox";
import * as Yup from 'yup';
import axios from 'axios';

const CreateAccount= () => {
    
    const validate = Yup.object({
        firstName: Yup.string()
                    .max(15, "Must be 15 characters or less")
                    .required("Required"),
        lastName: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required"),
        phone: Yup.string()
                    .max(10, "Must be 10 characters or less")
                    .required("Required"),
        email: Yup.string()
                    .email("Invalid email")
                    .required("Required"),
        password: Yup.string()
                    .min(8, "Password must be at least 8 characters")
                    .matches(/[0-9]/, "Password must have one digit")
                    .matches(/[a-z]/, "Password must have one lowercase character")
                    .matches(/[A-Z]/, "Password must have one uppercase character")
                    .required("Required"),
        // passwordconfirm: Yup.string()
        //             .oneOf([Yup.ref('password'), undefined], "Passwords must match")
        //             .required("Required"),
    })

    const onSubmit = (values) => {
        axios.post('http://localhost:8000/api/user/add', {
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          email: values.email,
          password: values.password,
        })
        .then(response => {
          console.log('User created successfully:', response.data);
        })
        .catch(error => {
          console.error('User creation error:', error);
        });
      }



    return (

        <div className='bg-white'>
        <h1 className='text-2xl font-bold mt-10 text-center mb-5'>Création de compte</h1>
        <p className='text-sm text-center mb-5'>Déjà inscrit? <a href="#" className="underline">Se connecter</a> </p>
        <Formik 
            initialValues = {{
                firstName: '', 
                lastName: '', 
                email: '',
                phone: '',
                password: '',
                // passwordconfirm: '',
            }}
            validationSchema={validate}
            onSubmit={onSubmit}
        >
        
            {formik => 
        <div className='flex justify-center' >
            <div className='flex flex-col items-center pb-5 pt-5 mb-10 w-full '>
                <div className="w-full max-w-xs">

                        <Form>
                            <TextField  label="Prénom" name="firstName" type="text"/>
                            <TextField  label="Nom" name="lastName" type="text"/>
                            <TextField  label="Téléphone" name="phone" type="text"/>
                            <TextField  label="Adresse e-mail" name="email" type="email"/>
                            <TextField  label="Mot de passe" name="password" type="password"/>

                            <p className='mt-3'>Le mot de passe doit contenir:</p>
                            <p className=''>Entre 12 et 32 caractères</p>
                            <p className=''>Au moins une majuscule et une minuscule</p>
                            <p className='mb-3'>Un caractère spécial</p>

                            {/* <TextField  label="Confirmation de mot de passe" name="passwordconfirm" type="password"/> */}

                            {console.log(formik.values)}

                            {/* <Checkbox labelText="J’accepte de recevoir des promotions de la part de Pixel Perfect"/> */}

                            {/* <Checkbox labelText="Je m'inscris à la Newsletter"/>

                            <Checkbox labelText={
                                <span>
                                    En cliquant sur Créer mon compte, je certifie avoir lu et accepter nos <a href="#" className="underline">Conditions d’Utilisations</a> et notre <a href="#" className="underline">notre Politique de protections de données</a>.  
                                </span>
                            }/> */}
                            <ReusableButton type="submit">Créer mon compte</ReusableButton>


{/*
                            <button className='px-4 py-2 bg-green-400 text-white text-xs font-bold uppercase rounded hover:bg-green-700 focus:outline-none focus:bg-green-700' type='submit'>Sign in</button> */}
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