import { useEffect, useState } from "react"
import apiBackEnd from "../api/backend/api.Backend"
import { URL_BACK_ADD_ADDRESSE, URL_BACK_GET_ADDRESS, URL_BACK_SET_PURCHASE_ADDRESS } from "../constants/urls/urlBackEnd"
import { useSelector } from "react-redux"
import { selectToken, selectUser } from "../redux-store/authenticationSlice"
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextField from "../components/Connexion/TextField"
import { setHearderToken } from "../services/tokenServices"
import { FaCheck } from "react-icons/fa"
import { selectPurchaseId, selectTotalCost, selectTotalQuantity } from "../redux-store/cartSlice"
import { URL_CHECKOUT, URL_CONNEXION } from "../constants/urls/urlFrontEnd"
import { useNavigate } from "react-router-dom"

export const AddressView = () => {
    const totalPrice = useSelector(selectTotalCost)
    const validate = Yup.object({
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
    const totalQuantity = useSelector(selectTotalQuantity);
    const navigate = useNavigate();
    const token = useSelector(selectToken);
    const user = useSelector(selectUser);
    const purchaseId = useSelector(selectPurchaseId)
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(0);
    const [isAdded, setIsAdded] = useState(false);
    const [newAddress, setNewAddress] = useState(false);
    const toggle = () => {
        setIsAdded(!isAdded)
    }
    useEffect(() => {
        apiBackEnd.get(URL_BACK_GET_ADDRESS(user.id), setHearderToken(token))
            .then(res => {
                setAddresses(res.data);
                setNewAddress(false)
            }).catch(error => {
                console.error('Error get address :', error)
            })
    }, [newAddress])

    const onSubmit = async (values) => {
        try {
            await apiBackEnd.post(URL_BACK_ADD_ADDRESSE(user.id), values, setHearderToken(token))
            setNewAddress(true)
            setIsAdded(false)

        } catch (error) {
            console.error('Error adding addresse:', error);
        }
    }

    const checkout = async () => {
        try {
            await apiBackEnd.put(URL_BACK_SET_PURCHASE_ADDRESS(purchaseId, selectedAddress), {}, setHearderToken(token))
            navigate(URL_CHECKOUT)
        } catch (error) {
            console.error('Error choice addresse:', error);
        }
    }

    return (
        <div className="flex flex-col px-5 lg:flex-row lg:justify-around">
            <div className="lg:w-3/5">
                <h3>Passer la commande</h3>
                <button onClick={toggle} className="btn btn-primary-outline">Ajouter addrese</button>
                {isAdded &&
                    <div>
                        <span>*champs obligatoires</span>
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
                            <Form className="px-5">
                                <TextField label="Numéro de la rue *" name="streetNumber" type="number" />
                                <TextField label="Nom de la rue *" name="streetName" type="text" />
                                <div className="flex justify-between gap-10">
                                    <TextField label="Ville *" name="city" type="text" />
                                    <TextField label="Code postal *" name="zipcode" type="number" />
                                </div>
                                <button className="btn-primary-outline py-2 px-6 flex items-center gap-4" type="submit">Ajouter </button>
                            </Form>
                        </Formik >
                    </div>
                }

                {addresses.length > 0 &&
                    <div className="flex flex-col gap-4">
                        <h3>Adresses existantes</h3>
                        {addresses.map(address => (
                            <div
                                className={`bg-secondary p-2 rounded-lg border-2 ${selectedAddress === address.id ? 'border-primary' : ' border-secondary'}`}
                                key={address.id}
                                onClick={() => setSelectedAddress(address.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="flex justify-between items-center">
                                    <span>{address.streetNumber} {address.streetName} {address.city} {address.zipcode}</span>
                                    {selectedAddress === address.id && <FaCheck className="text-primary mr-2" />}
                                </div>

                            </div>
                        ))}
                    </div>
                }
            </div>

            <div>
                {totalQuantity === 0 ? <></> :
                    <div className="hidden min-w-[18em] flex-col rounded-2xl lg:flex lg:border lg:border-primary lg:p-4">
                        <>
                            <div className="flex justify-between mt-6">
                                <span className="font-bold ">Prix total ({totalQuantity} article)</span>
                                <span>{totalPrice / 100}€</span>
                            </div>
                            <div className="flex justify-between mt-2"><span className="">Frais de livraison</span> <span>Gratuit</span></div>
                            <div className="flex justify-between mt-2"><span className="">Taxe</span> <span>29€</span></div>
                            <div className="flex justify-between mt-2"><span className="font-bold">Prix TTC</span><span>{(totalPrice + 2900) / 100}€</span></div>
                            <div className="flex flex-col my-6 gap-2 lg:hidden">

                            </div>
                            <hr className="h-px  my-8 border-1 border-slate-600 lg:hidden" />
                            <div className="flex flex-col lg:order-first">
                                <span onClick={checkout} className="btn-primary-outline self-center w-11/12 text-xl">Continuer pour payer</span>
                            </div>
                        </>
                    </div>
                }
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex justify-between mt-10 font-semibold lg:hidden">
                    <span>Total de la commande</span>
                    <span>{totalPrice / 100}€</span>

                </div>
                <span onClick={checkout} className="btn-primary-outline self-center px-5 text-xl">Continuer pour payer</span>
            </div>
        </div>
    )
}