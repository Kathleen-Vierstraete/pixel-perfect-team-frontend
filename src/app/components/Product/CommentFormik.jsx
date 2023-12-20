import React,{ useState } from "react";
import { Formik, Form, Field } from 'formik';
import TextField from './../Connexion/TextField';
import ReusableButton from './../Connexion/ReusableButton';
import * as Yup from 'yup';
import { FaRegStar, FaStar } from 'react-icons/fa';
import apiBackEnd from "../../api/backend/api.Backend";
import { URL_BACK_CREATE_COMMENT } from "../../constants/urls/urlBackEnd";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux-store/authenticationSlice";
import { setHearderToken } from "../../services/tokenServices";


const CommentFormik = () => {
    const token = useSelector(selectToken);
    const [error, setError] = useState();
    const [rate, setRate] = useState();
    const special = "!@#$%^&*(),;.?\":{}|<>"

    const radioChange = (e) => {
        setRate(e.target.value);
    }

    const validate = Yup.object({
        rate: Yup.number()
            .min(1, "Note trop basse")
            .max(5, "Note trop haute")
            .required("Requis"),
        title: Yup.string()
            .max(20, "Doit contenir moins de 20 caractères")
            .required("Requis"),
        body: Yup.string()
            .required("Requis")
    })


    const onSubmit = (values) => {
        // values.rate=rate;
        console.log(values);
        apiBackEnd.post(URL_BACK_CREATE_COMMENT, values, setHearderToken(token))
            .then((response) => {
                if (response.status === 201) {
                    console.log(response.data);
                }
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 400) {
                        setError('Une erreur inattendue s\'est produite. Veuillez changer d\'email.');
                    } else {
                        setError('Une erreur inattendue s\'est produite.');
                    }
                } else if (error.request) {
                    setError('Pas de réponse du serveur.');
                } else {
                    setError('Une erreur inattendue s\'est produite.');
                }
            });
    };

    return (
        <Formik
            initialValues={{
                rate: '',
                title: '',
                body: '',
            }}
            validationSchema={validate}
            onSubmit={onSubmit}
        >

            {formik =>
                <div className='flex justify-center' >
                    <div className='flex flex-col items-center pb-5 pt-5 mb-10 w-full '>
                        <div className="w-full max-w-xs">

                            <Form>
                                <TextField label="Titre" name="title" type="text" />
                                <TextField label="Body" name="body" type="textarea" />
                                    {/* <div className="flex text-secondary">
                                        <label for="1">{rate >= 1 ?<FaStar />:<FaRegStar />}</label>
                                        <label for="2">{rate >= 2 ?<FaStar />:<FaRegStar />}</label>
                                        <label for="3">{rate >= 3 ?<FaStar />:<FaRegStar />}</label>
                                        <label for="4">{rate >= 4 ?<FaStar />:<FaRegStar />}</label>
                                        <label for="5">{rate >= 5 ?<FaStar />:<FaRegStar />}</label>
                                    </div>
                                    <div className="hidden">
                                        <input onChange={(e) => radioChange(e)} type="radio" value="1" id="1" name="star"/>
                                        <input onChange={(e) => radioChange(e)} type="radio" value="2" id="2" name="star"/>
                                        <input onChange={(e) => radioChange(e)} type="radio" value="3" id="3" name="star"/>
                                        <input onChange={(e) => radioChange(e)} type="radio" value="4" id="4" name="star"/>
                                        <input onChange={(e) => radioChange(e)} type="radio" value="5" id="5" name="star"/>
                                    </div> */}
                                <TextField className="" type="number" name="rate" min="1" max="5" />
                                {error && <div style={{ color: 'red' }}>{error}</div>}
                                <ReusableButton type="submit">Créer mon compte</ReusableButton>

                            </Form>
                        </div>
                    </div>
                </div>
            }
        </Formik>
    );


}

export default CommentFormik;