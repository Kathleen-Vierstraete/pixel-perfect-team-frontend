import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import ReusableButton from './ReusableButton';
import * as Yup from 'yup';
import apiBackEnd from './../../api/backend/api.Backend';
import { URL_BACK_LOGIN_CHECK } from '../../constants/urls/urlBackEnd';
import { Link } from "react-router-dom";

const ConnexionFormik  = () => {

    const Alert = ({ message }) => {
        return (
          <div className="alert alert-success font-bold text-center ">
            {message}
          </div>
        );
    };
    
    const validate = Yup.object({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .required('Required'),
      });

    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const onSubmit = (values) => {
        apiBackEnd.post(URL_BACK_LOGIN_CHECK, values)
          .then((response) => {
            console.log('Login successful:', response.data);
            setShowAlert(true);
          })
          .catch((error) => {
            console.error('Login error:', error);
            setErrorMessage(error.message);
        });
    };

    return(
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validate}
            onSubmit={onSubmit}
        >
        {formik => (
          <div className='flex justify-center'>
            <div className='flex flex-col items-center pb-5 pt-5 mb-10 w-full'>
              <div className="w-full max-w-xs">
                <Form>
                    <TextField label="Adresse e-mail" name="email" type="email" />
                    <TextField label="Mot de passe" name="password" type="password" />

                    <ReusableButton type="submit">Connexion</ReusableButton>

                    <p className='m-3 text-center'>
                    Mot de passe oublié?{' '}
                    <a href="#" className='underline'>Réinitialiser</a>
                    </p>
                    <p className='m-3 text-center'>
                    Pas encore de compte Pixel Perfect? Inscrivez-vous!
                    </p>
                    <Link to="/create-account" >
                    <ReusableButton>S'inscrire</ReusableButton>
                    </Link>

                    <p className='m-3 text-center'>
                    Pour en savoir plus sur la gestion de vos données personnelles
                    et pour exercer vos droits, consultez notre{' '} 
                        <a href="#" className='underline'>Politique de protection des données.</a>
                    </p>

                    {showAlert && <Alert message="Connexion réussie !" />}
                    {errorMessage && <Alert message={errorMessage} />}                  
                </Form>
              </div>
            </div>
          </div>
        )}
    </Formik>
    )
}

export default ConnexionFormik;