import React from "react";
import {Formik, Form} from 'formik'; 
import  TextField  from './TextField'
import ReusableButton from './ReusableButton';
import Checkbox from "./Checkbox";
import * as Yup from 'yup';
import { URL_BACK_CREATE_ACCOUNT } from "../../constants/urls/urlBackEnd";
import apiBackEnd from "../../api/backend/api.Backend";
import { EMAIL_REGEX } from "../../constants/regex";
import { URL_CONNEXION } from "../../constants/urls/urlFrontEnd";
import { useNavigate } from "react-router-dom";


const CreateAccountFormik  = () => {

    const navigate = useNavigate();

    const special = "!@#$%^&*(),;.?\":{}|<>"

    const validate = Yup.object({
        firstName: Yup.string()
                    .max(15, "Doit contenir moins de 15 caractères")
                    .required("Requis"),
        lastName: Yup.string()
                    .max(20, "Doit contenir moins de 20 caractères")
                    .required("Requis"),
        phone: Yup.string()
                    .max(10, "Doit contenir 10 chiffres")
                    .required("Requis"),
        email: Yup.string()
                    .email("Format email invalide")
                    .matches(EMAIL_REGEX, "adresse email invalide")
                    .required("Requis"),
        password: Yup.string()
                    .min(12, "Doit contenir au moins 12 caractères ")
                    .max(32, "Doit contenir maximum 32 caractères")
                    .matches(/[0-9]/, "Doit contenir au moins un chiffre ")
                    .matches(/[a-z]/, "Doit contenir au moins une minuscule")
                    .matches(/[A-Z]/, "Doit contenir au moins une majuscule")
                    .matches(/[!@#$%^&*(),;.?":{}|<>]/, 'Doit contenir au moins un caractère spécial')
                    .required("Requis"),
        passwordconfirm: Yup.string()
                    .oneOf([Yup.ref('password'), undefined], "Les mots de passe doivent correspondre")
                    .required("Requis"),
    })

      const onSubmit = (values) => {
        apiBackEnd.post(URL_BACK_CREATE_ACCOUNT, values)
          .then((response) => {
            if (response.status === 201) {
                navigate(URL_CONNEXION);
            }
          })
          .catch((error) => {
            console.error('User creation error:', error);
        });
    };

      return(
        <Formik 
            initialValues = {{
                firstName: '', 
                lastName: '', 
                email: '',
                phone: '',
                password: '',
                passwordconfirm: '',
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
                            <p className='mb-3'>Un caractère spécial parmi {special}</p>

                            <TextField  label="Confirmation de mot de passe" name="passwordconfirm" type="password"/>

                            {/* {console.log(formik.values)} */}

                            <Checkbox labelText="J’accepte de recevoir des promotions de la part de Pixel Perfect"/> 

                            <Checkbox labelText="Je m'inscris à la Newsletter"/>

                            <Checkbox labelText={
                                <span>
                                    En cliquant sur Créer mon compte, je certifie avoir lu et accepter nos <a href="#" className="underline">Conditions d’Utilisations</a> et notre <a href="#" className="underline">notre Politique de protections de données</a>.  
                                </span>
                            }/>
                            <ReusableButton type="submit">Créer mon compte</ReusableButton>

                        </Form>
                </div>
            </div>
        </div>
            }
    </Formik>
      );


}

export default CreateAccountFormik;