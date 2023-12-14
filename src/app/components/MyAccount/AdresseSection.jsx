import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '../Connexion/TextField';
import apiBackEnd from "../../api/backend/api.Backend";
import { URL_BACK_ADD_ADDRESSE, URL_BACK_UPDATE_ADDRESSE } from "../../constants/urls/urlBackEnd";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../redux-store/authenticationSlice";
import { setHearderToken } from "../../services/tokenServices";
import { DisplayAddresse } from "./DisplayAddresse";

const AddresseSection = ({ addresses, toggleUpToDate }) => {
    const user = useSelector(selectUser);
    const token = useSelector(selectToken);
    const [isAdded, setIsAdded] = useState(false);
    const toggleAdded = () => {
        setIsAdded(!isAdded);
    }
    const validate = Yup.object({
        id: Yup.number(),
        streetNumber: Yup.number()
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
            apiBackEnd.post(URL_BACK_ADD_ADDRESSE(user.id), values, setHearderToken(token))
                .then(res => {
                    toggleUpToDate();
                    toggleAdded()
                }).catch(error => {
                    console.error('Error adding addresse:', error);
                    toggleAdded()
                })
        } catch (error) {
            console.error('Error adding addresse:', error);
            toggleAdded()
        }
    }

    return (
        <div className="bg-white flex flex-col items-center gap-4 p-4 shadow-md shadow-blue-500/40 rounded-xl">
            <h4>Mes adresses</h4>
            {addresses.map(addresse => (
                <DisplayAddresse key={addresse.id} addresse={addresse} validate={validate} toggleUpToDate={toggleUpToDate} />
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