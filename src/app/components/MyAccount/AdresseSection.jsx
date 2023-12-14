import { useState } from "react";
import { FaPlus, FaPen } from "react-icons/fa";
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '../Connexion/TextField';
import apiBackEnd from "../../api/backend/api.Backend";
import { URL_BACK_ADD_ADDRESSE, URL_BACK_UPDATE_ADDRESSE } from "../../constants/urls/urlBackEnd";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../redux-store/authenticationSlice";
import { setHearderToken } from "../../services/tokenServices";
import { RiDeleteBinLine } from "react-icons/ri";
import { Spinner } from "../animation/Spinner";
import { MiniSpinner } from "../animation/MiniSpinner";

const AddresseSection = ({ addresses, toggleUpToDate }) => {
    const user = useSelector(selectUser);
    const token = useSelector(selectToken);
    const [isAdded, setIsAdded] = useState(false);
    const [isEditingSpinner, setIsEditingSpinner] = useState(false);
    const [editingAddressId, setEditingAddressId] = useState(null);
    const toggleAdded = () => {
        setIsAdded(!isAdded);
    }
    const toggleEditing = (id) => {
        if (editingAddressId === null || editingAddressId !== id) {
            setEditingAddressId(id)
            return
        }
        setEditingAddressId(null)
    }
    const validate = Yup.object({
        id: Yup.number(),
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

    const onDelete = async (id) => {
        try {
            apiBackEnd.delete(URL_BACK_UPDATE_ADDRESSE(id), setHearderToken(token))
                .then(res => {
                    console.log(res.data)
                    toggleUpToDate();
                }).catch(error => {
                    console.error('Error deleteting addresse:', error);
                })
        } catch (error) {
            console.error('Error deleteting addresse:', error);
        }
    }

    const onUpdate = async (value) => {
        setIsEditingSpinner(true)
        try {
            apiBackEnd.put(URL_BACK_UPDATE_ADDRESSE(value.id), value, setHearderToken(token))
                .then(res => {
                    setIsEditingSpinner(false)
                    toggleEditing(value.id)
                    toggleUpToDate();
                }).catch(error => {
                    console.error('Error editing addresse:', error);
                })
        } catch (error) {
            console.error('Error editing addresse:', error);
        }
    }

    const onSubmit = async (values) => {
        try {
            apiBackEnd.post(URL_BACK_ADD_ADDRESSE(user.id), values, setHearderToken(token))
                .then(res => {
                    toggleUpToDate();
                }).catch(error => {
                    console.error('Error adding addresse:', error);
                })
        } catch (error) {
            console.error('Error adding addresse:', error);
        }
    }

    return (
        <div className="bg-white flex flex-col items-center gap-4 p-4 shadow-md shadow-blue-500/40 rounded-xl">
            <h4>Mes adresses</h4>
            {addresses.map(addresse => (
                <div key={addresse.id} className=" bg-secondary p-2 rounded-xl max-w-xs w-full flex justify-between">
                    {!editingAddressId || editingAddressId !== addresse.id ? (
                        <div className="flex flex-col justify-start">
                            <span className="font-semibold">{addresse.streetNumber} {addresse.streetName}</span>
                            <span className="font-semibold">{addresse.city} {addresse.zipcode}</span>
                        </div>
                    ) : (
                        <Formik
                            initialValues={{
                                id: addresse.id,
                                streetNumber: addresse.streetNumber,
                                streetName: addresse.streetName,
                                city: addresse.city,
                                zipcode: addresse.zipcode,
                            }}
                            validationSchema={validate}
                            onSubmit={onUpdate}
                        >
                            <Form className="flex gap-4 flex-col">
                                <div className="flex flex-wrap justify-center gap-4">
                                    <TextField className="border-x-0 border-t-0 border-b-2 border-primary focus:ring-0 focus:border-secondary" label="Numéro de la rue" name="streetNumber" type="text" />
                                    <TextField className="border-x-0 border-t-0 border-b-2 border-primary focus:ring-0 focus:border-secondary" label="Nom de la rue" name="streetName" type="text" />
                                    <TextField className="border-x-0 border-t-0 border-b-2 border-primary focus:ring-0 focus:border-secondary" label="Ville" name="city" type="text" />
                                    <TextField className="border-x-0 border-t-0 border-b-2 border-primary focus:ring-0 focus:border-secondary" label="Code postal" name="zipcode" type="text" />
                                </div>

                                <button className="btn-primary-outline py-2 px-6 self-center flex items-center gap-4" type="submit">Modifier {isEditingSpinner && <MiniSpinner />}</button>

                            </Form>
                        </Formik>
                    )}
                    <div className="flex flex-col justify-between">
                        <button onClick={() => toggleEditing(addresse.id)} className="text-primary-dark hover:scale-125"><FaPen size={20} /></button>
                        <button onClick={() => onDelete(addresse.id)} className="text-primary-dark hover:scale-125"><RiDeleteBinLine size={20} /></button>

                    </div>

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