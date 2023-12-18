import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import TextField from '../Connexion/TextField';
import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import apiBackEnd from '../../api/backend/api.Backend';
import { URL_BACK_ADMINISTRATORS, URL_BACK_PRODUCT_CREATE } from '../../constants/urls/urlBackEnd';
import { Spinner } from '../animation/Spinner';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux-store/authenticationSlice';
import { storage } from '../../firebase/firebase';
import { uuidv4 } from "@firebase/util";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { ImageSelect } from './ImageSelector';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Le nom est requis'),
    reference: Yup.string().required('La référence est requise'),
    price: Yup.number().required('Le prix est requis'),
    description: Yup.string().required('La description est requise'),
    stock: Yup.number().required('Le stock est requis'),
    length: Yup.number(),
    height: Yup.number(),
    width: Yup.number(),
    weight: Yup.number(),
    creationDate: Yup.number(),
    is_archived: Yup.boolean(),
    is_collector: Yup.boolean(),
    creator_ids: Yup.array(),
    editor_id: Yup.number(),
    tag_ids: Yup.array(),
    category_id: Yup.number(),
    pictures: Yup.array().of(
        Yup.object().shape({
            name: Yup.string(),
            url: Yup.string().url('L\'URL de l\'image n\'est pas valide'),
            file: Yup.mixed(),
            alt: Yup.string()
        })
    ),

});

function ProductForm() {
    const [data, setdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const token = useSelector(selectToken);
    const handleSubmit = async (values) => {
        if (values.pictures[0].file !== null) {
            const img = values.pictures[0].file;
            console.log("first",img)
            try {
                const imgRef = ref(storage, `images/${uuidv4()}`);
                await uploadBytes(imgRef, img);
                const url = await getDownloadURL(imgRef);
                values.pictures[0].url = url;
            } catch (error) {
                console.error('Error uploading image:', error);
            }
            console.log(JSON.stringify(values));
        }
        try {
            const response = await apiBackEnd.post(URL_BACK_PRODUCT_CREATE, values);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    useEffect(() => {
        apiBackEnd.get(URL_BACK_ADMINISTRATORS, { headers: { 'Authorization': `Bearer ${token}` } })
            .then((response) => {
                setdata(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                if (error.response) {
                    console.error('Server responded with an error:', error.response.data);
                    console.error('Status code:', error.response.status);
                } else if (error.request) {
                    console.error('No response received from the server');
                } else {
                    console.error('Error setting up the request:', error.message);
                }
            });
    }, []);

    return (
        <div>
            {isLoading ? (
                <Spinner />
            ) : (
                <Formik
                    initialValues={
                        {
                            category_id: '',
                            editor_id: '',
                            name: '',
                            reference: '',
                            price: '',
                            description: '',
                            stock: '',
                            length: '',
                            height: '',
                            width: '',
                            weight: '',
                            creationDate: '',
                            tag_ids: [],
                            creator_ids: [],
                            isArchived: false,
                            isCollector: false,
                            pictures: [{
                                name: "",
                                url: "",
                                file: "",
                                alt: ""
                            }]
                        }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}

                >
                    <div className='flex justify-center'>
                        <div className='flex flex-col items-center pb-5 pt-5 mb-10'>
                            <div className="max-w-xs"></div>
                            <Form >
                                <TextField label="Nom" name="name" type="text" />
                                <TextField label="Reference" name="reference" type="text" />
                                <TextField label="Prix" name="price" type="number" />
                                <TextField label="Description" name="description" type="text" />
                                <TextField label="stock" name="stock" type="number" />
                                <TextField label="Longueur" name="length" type="number" />
                                <TextField label="Hauteur" name="height" type="number" />
                                <TextField label="Largeur" name="width" type="number" />
                                <TextField label="Poids" name="weight" type="number" />
                                <TextField label="Date de création" name="creationDate" type="number" />
                                <div className="mb-4 flex items-center">
                                    <label htmlFor="isArchived">est Archived : </label>
                                    <Field className="form-checkbox h-4 w-4 mx-2 my-1 text-indigo-600 transition duration-150 ease-in-out" type="checkbox" name="isArchived" />
                                    <ErrorMessage name="isArchived" component="div" />
                                </div>
                                <div className="mb-4 flex items-center">
                                    <label htmlFor="isCollector">est Collector : </label>
                                    <Field className="form-checkbox h-4 w-4 mx-2 my-1 text-indigo-600 transition duration-150 ease-in-out" type="checkbox" name="isCollector" />
                                    <ErrorMessage name="isCollector" component="div" />
                                </div>
                                <div className='mb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category_id">Categorie:</label>
                                    <Field as="select" id="category_id" name="category_id" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500">
                                        <option value="" label="Select a category" disabled />
                                        {data.category.map((option) => (
                                            <option key={option.id} label={(!option.label) ? option.name : option.label} value={option.id}>
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage className='text-red-500 text-sm mt-1' name="category_id" component="div" />
                                </div>
                                <div className='mb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="creator_ids">creator :</label>
                                    <Field as="select" id="creator_ids" name="creator_ids" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500" multiple>
                                        <option value="" label="Select a creator" disabled />
                                        {data.creator.map((option) => (
                                            <option key={option.id} label={(!option.label) ? option.name : option.label} value={option.id}>
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage className='text-red-500 text-sm mt-1' name="creator_ids" component="div" />
                                </div>
                                <div className='mb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="editor_id">Editor :</label>
                                    <Field as="select" id="editor_id" name="editor_id" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500">
                                        <option value="" label="Select a editor" disabled />
                                        {data.editor.map((option) => (
                                            <option key={option.id} label={(!option.label) ? option.name : option.label} value={option.id}>
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage className='text-red-500 text-sm mt-1' name="editor_id" component="div" />
                                </div>
                                <div className='mb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag_ids">tag :</label>
                                    <Field as="select" id="tag_ids" name="tag_ids" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500" multiple>
                                        <option value="" label="Select a tag" disabled />
                                        {data.tag.map((option) => (
                                            <option key={option.id} label={(!option.label) ? option.name : option.label} value={option.id}>
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage className='text-red-500 text-sm mt-1' name="tag_ids" component="div" />
                                </div>
                                <TextField label="Nom de l'image" name="pictures[0].name" type="text" />
                                <TextField label="Description de l'image" name="pictures[0].alt" type="text" />
                                <ImageSelect label="Image du produit"/>
                               <button className='bg-gray-200 border-2 border-gray-200 lg-around' type="submit">Soumettre</button>
                            </Form>
                        </div>
                    </div>
                </Formik >
            )
            }
        </div >
    )

}
export default ProductForm;