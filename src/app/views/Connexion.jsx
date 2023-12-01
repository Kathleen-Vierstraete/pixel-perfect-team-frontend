import React from 'react';
import {Formik, Form} from 'formik'; 
import  TextField  from './../components/Connexion/TextField'

const Connexion= () => {


return (

    <div>
        <h1 className='text-2xl font-bold mt-10 text-center mb-10'>Connexion </h1>
        <Formik>
        
            {formik => 
        <div className='flex justify-center' >
            <div className='flex flex-col items-center pb-5 pt-5 mb-10 w-2/3  '>
                <div className="w-2/3 max-w-xs">

                        <Form>
                            <TextField  label="Adresse e-mail" name="email" type="email"/>
                            <TextField  label="Mot de passe" name="password" type="password"/>

                            <button className='px-4 py-2 bg-green-400 text-white text-xs font-bold uppercase rounded hover:bg-green-700 focus:outline-none focus:bg-green-700' type='submit'>Log in</button>
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