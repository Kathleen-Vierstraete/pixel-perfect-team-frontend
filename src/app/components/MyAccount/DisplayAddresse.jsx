import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { MiniSpinner } from "../animation/MiniSpinner";
import TextField from "../Connexion/TextField";
import { Form, Formik } from "formik";
import { URL_BACK_UPDATE_ADDRESSE } from "../../constants/urls/urlBackEnd";
import { setHearderToken } from "../../services/tokenServices";
import apiBackEnd from "../../api/backend/api.Backend";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux-store/authenticationSlice";

export const DisplayAddresse = ({ addresse, validate, toggleUpToDate, token }) => {
    const [isEditingSpinner, setIsEditingSpinner] = useState(false);
    const [editingAddressId, setEditingAddressId] = useState(null);
    const [errorUser, setErrorUser] = useState("");
    

    const toggleEditing = (id) => {
        if (editingAddressId !== id || editingAddressId == null) {
            setEditingAddressId(id);
            return
        }
        setEditingAddressId(null);
    }

    const onUpdate = async (value) => {
        console.log(value);
        setIsEditingSpinner(true)
        try {
            apiBackEnd.put(URL_BACK_UPDATE_ADDRESSE(value.id), value, setHearderToken(token))
                .then(res => {
                    setIsEditingSpinner(false)
                    toggleEditing(value.id)
                    toggleUpToDate();
                    setErrorUser("")
                }).catch(error => {
                    console.error('Error editing addresse:', error);
                    setIsEditingSpinner(false)
                    setErrorUser("Impossible de modifier l'adresse")
                })
        } catch (error) {
            console.error('Error editing addresse:', error);
            setErrorUser("Impossible de modifier l'adresse")
        }
    }

    const onDelete = async (id) => {
        try {
            apiBackEnd.delete(URL_BACK_UPDATE_ADDRESSE(id), setHearderToken(token))
                .then(res => {
                    toggleUpToDate();
                    setErrorUser("")
                }).catch(error => {
                    console.error('Error deleteting addresse:', error);
                    setErrorUser("Impossible de supprimer l'adresse");
                })
        } catch (error) {
            console.error('Error deleteting addresse:', error);
            setErrorUser("Impossible de supprimer l'adresse");
        }
    }

    return (
        <div className="bg-secondary p-2 rounded-xl max-w-xs w-full flex justify-between">
            {editingAddressId !== addresse.id ? (
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
                    <Form className="flex gap-4 flex-col items-center">
                        <div className="flex flex-wrap justify-center gap-4">
                            <TextField className="border-x-0 border-t-0 border-b-2 border-primary focus:ring-0 focus:border-secondary" label="Numéro de la rue" name="streetNumber" type="number" />
                            <TextField className="border-x-0 border-t-0 border-b-2 border-primary focus:ring-0 focus:border-secondary" label="Nom de la rue" name="streetName" type="text" />
                            <TextField className="border-x-0 border-t-0 border-b-2 border-primary focus:ring-0 focus:border-secondary" label="Ville" name="city" type="text" />
                            <TextField className="border-x-0 border-t-0 border-b-2 border-primary focus:ring-0 focus:border-secondary" label="Code postal" name="zipcode" type="number" />
                        </div>
                        <button className="btn-primary-outline py-2 px-6 flex items-center gap-4" type="submit">Modifier {isEditingSpinner && <MiniSpinner />}</button>
                        {errorUser.length > 0 ? <p className="text-error font-extrabold">{errorUser}</p> : <></>}
                    </Form>
                </Formik>
            )}
            <div className="flex flex-col justify-between">
                <button onClick={() => toggleEditing(addresse.id)} className="text-primary-dark hover:scale-125"><FaPen size={20} /></button>
                <button onClick={() => onDelete(addresse.id)} className="text-primary-dark hover:scale-125"><RiDeleteBinLine size={20} /></button>
            </div>
        </div>
    );
}