import React from 'react';
import {Formik, Form} from 'formik'; 
import  TextField  from './../components/Connexion/TextField'
import ReusableButton from '../components/Connexion/ReusableButton';

const Connexion= () => {


return (

    <div>
        <h1 className='text-2xl font-bold mt-10 text-center mb-10'>Connexion</h1>
        <Formik>
        
            {formik => 
        <div className='flex justify-center' >
            <div className='flex flex-col items-center pb-5 pt-5 mb-10 w-full '>
                <div className="w-2/3 max-w-xs">

                        <Form>
                            <TextField  label="Adresse e-mail" name="email" type="email"/>
                            <TextField  label="Mot de passe" name="password" type="password"/>

                            <ReusableButton>Connexion</ReusableButton>
                            <p className='m-3'>Mot de passe oublié? 
                                <a href= "#" > Réinitialiser</a>
                            </p>

                            <p className='m-3'>Pas encore de compte Pixel Perfect? Inscrivez-vous !
                            </p>
                            <ReusableButton>S'inscire</ReusableButton>

                            <p className='m-3'>Pour en savoir plus sur la gestion de vos données personnelles et pour exercer vos droits, consultez notre 
                                <a href= "#" > Politique de protection des données.
                                </a>
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


{/* <button className="relative z-10 w-full h-10 flex items-center justify-center rounded-full bg-white border font-bold ">
Connexion
</button> */}