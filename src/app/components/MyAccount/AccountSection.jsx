import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '../Connexion/TextField';
import apiBackEnd from "../../api/backend/api.Backend";
import { URL_BACK_PERSON } from '../../constants/urls/urlBackEnd';
import { useState } from 'react';
import { setHearderToken } from '../../services/tokenServices';

const AccountSection = ({ user, setUser, token }) => {
    const [errorUser, setErrorUser] = useState("");
    const validate = Yup.object({
        id: Yup.number(),
        firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        phoneNumber: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("Required"),
        email: Yup.string()
            .email("Invalid email")
            .required("Required"),
    })
    const onSubmit = async (values) => {
        try {
            if (user.firstName !== values.firstName ||
                user.lastName !== values.lastName ||
                user.credential.email !== values.email ||
                user.phoneNumber !== values.phoneNumber) {
                apiBackEnd.patch(URL_BACK_PERSON(values.id), values, setHearderToken(token))
                    .then(res => {
                        setUser(res.data)
                        setErrorUser("")
                    }).catch(error => {
                        console.error('Error deleteting addresse:', error);
                        setErrorUser("Impossible de modifier vos donnée");
                    })
            }
        } catch (error) {
            console.error('User creation error:', error);
        }
    }

    return (
        <Formik
            initialValues={{
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.credential.email,
                phoneNumber: user.phoneNumber,
            }}
            validationSchema={validate}
            onSubmit={onSubmit}
        >
            <Form className="bg-white flex flex-col items-center gap-4 p-4 shadow-md shadow-blue-500/40 rounded-xl">
                <h4>Mon compte</h4>
                <div className="flex flex-col items-center  gap-4 sm:flex-row sm:gap-10 md:justify-star ">
                    <TextField className="border-x-0 border-t-0 border-b-2 border-primary focus:ring-0 focus:border-secondary" label="Prénom" name="firstName" type="text" />
                    <TextField className="border-x-0 border-t-0 border-b-2 border-primary focus:ring-0 focus:border-secondary" label="Nom" name="lastName" type="text" />

                </div>
                <div className='w-full max-w-md'>
                    <TextField className="w-full border-x-0 border-t-0 border-b-2 border-primary focus:ring-0 focus:border-secondary" label="E-mail" name="email" type="email" />
                </div>
                <div className="w-full max-w-md">
                    <TextField className="w-full border-x-0 border-t-0 border-b-2 border-primary focus:ring-0 focus:border-secondary" label="Télephone" name="phoneNumber" type="text" />
                </div>
                <button className="btn-primary-outline py-2 px-6" type="submit">Valider</button>
                {errorUser.length > 0 ? <p className="text-error font-extrabold">{errorUser}</p> : <></>}
            </Form>
        </Formik>

    );
}

export default AccountSection;