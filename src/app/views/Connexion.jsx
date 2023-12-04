import React from 'react';
import {Formik, Form} from 'formik'; 
import  TextField  from './../components/Connexion/TextField'
import ReusableButton from '../components/Connexion/ReusableButton';

const Connexion= () => {


return (

    <div className='bg-white'>
        <h1 className='text-2xl font-bold mt-10 text-center mb-10'>Connexion</h1>
        <Formik>
        
            {formik => 
        <div className='flex justify-center' >
            <div className='flex flex-col items-center pb-5 pt-5 mb-10 w-full '>
                <div className="w-full max-w-xs">

                        <Form>
                            <TextField  label="Adresse e-mail" name="email" type="email"/>
                            <TextField  label="Mot de passe" name="password" type="password"/>

                            <ReusableButton>Connexion</ReusableButton>

                            <p className='m-3 text-center '>Mot de passe oublié? <a href= "#" className='underline' > Réinitialiser</a>
                            </p>    
                            
                            <p className='m-3 text-center '>Pas encore de compte Pixel Perfect? Inscrivez-vous!</p>
                            
                            <ReusableButton>S'inscire</ReusableButton>

                            <p className='m-3 text-center '>Pour en savoir plus sur la gestion de vos données personnelles et pour exercer vos droits, consultez notre <a href= "#" className='underline'  >Politique de protection des données.</a> 
                            </p>    
                                
                        </Form>
                </div>
            </div>
        </div>
            }
        </Formik>
    </div>
)    
};

export default Connexion;

