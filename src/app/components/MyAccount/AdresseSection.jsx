import { useState } from "react";
import { FaPlus, FaPen } from "react-icons/fa";
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '../Connexion/TextField';
import apiBackEnd from "../../api/backend/api.Backend";
import { URL_BACK_ADD_ADDRESSE } from "../../constants/urls/urlBackEnd";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../redux-store/authenticationSlice";
import { setHearderToken, setHearderTokenWithBody } from "../../services/tokenServices";

const AddresseSection = ({ addresses ,toggleUpToDate}) => {
    const user = useSelector(selectUser);
    const token = useSelector(selectToken);
    const [isAdded, setIsAdded] = useState(false);
    const toggleAdded = () => {
        setIsAdded(!isAdded);
    }
    const validate = Yup.object({
        streetNumber: Yup.string()
            .required("Required"),
        streetName: Yup.string()
            .required("Required"),
        city: Yup.string()
            .required("Required"),
        zipcode: Yup.string()
            .max(5, "Must be 5 characters")
            .min(5, "Must be 5 characters")
            .required("Required"),
    })

    const onSubmit = async (values) => {
        try {
            apiBackEnd.post(URL_BACK_ADD_ADDRESSE(user.id),values, setHearderToken(token))
                .then(res => {
                    toggleUpToDate();
                }).catch(error => {
                    console.error('Error adding addresse:', error);
                })
        } catch (error) {
            console.error('User creation error:', error);
        }
    }

    return (
        <div className="bg-white flex flex-col items-center gap-4 p-4 shadow-md shadow-blue-500/40 rounded-xl">
            <h4>Mes adresses</h4>
            {addresses.map(addresse => (
                <div key={addresse.id} className=" bg-secondary p-2 rounded-xl max-w-xs w-full flex justify-between">
                    <div key={addresse.id} className="flex flex-col justify-start">
                        <span className="font-semibold">{addresse.streetNumber} {addresse.streetName}</span>
                        <span className="font-semibold">{addresse.city} {addresse.zipcode}</span>
                    </div>
                    <button className="text-primary-dark hover:scale-125"><FaPen /></button>
                </div>
            ))}
            <button className="btn-primary-outline py-2 px-6 self-end flex items-center gap-2"
                onClick={toggleAdded}>
                <FaPlus />
                Ajouter une adresse
            </button>
            {isAdded &&
                <Formik
                    initialValues={{
                        streetNumber: '',
                        streetName: '',
                        city: '',
                        zipcode: '',
                    }}
                    validationSchema={validate}
                    onSubmit={onSubmit}
                >
                    <Form className="flex gap-4 flex-col">
                        <div className="flex flex-wrap justify-center gap-4">
                            <TextField className="border-x-0 border-t-0 border-b-2 border-primary focus:ring-0 focus:border-secondary" label="Numéro de la rue" name="streetNumber" type="text" />
                            <TextField className="border-x-0 border-t-0 border-b-2 border-primary focus:ring-0 focus:border-secondary" label="Nom de la rue" name="streetName" type="text" />
                            <TextField className="border-x-0 border-t-0 border-b-2 border-primary focus:ring-0 focus:border-secondary" label="Ville" name="city" type="text" />
                            <TextField className="border-x-0 border-t-0 border-b-2 border-primary focus:ring-0 focus:border-secondary" label="Code postal" name="zipcode" type="text" />
                        </div>
                        <button className="btn-primary-outline py-2 px-6 self-center" type="submit">Ajouter</button>
                    </Form>
                </Formik>
            }
        </div>
    );
};

export default AddresseSection;