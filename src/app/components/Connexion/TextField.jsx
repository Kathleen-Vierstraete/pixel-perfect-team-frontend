import React from 'react';
import { ErrorMessage, useField } from 'formik';

const TextField = ({label, ...props}) => {

    const [field, meta] = useField(props);

    return (
        <div className='flex flex-col pb-5 place-items-start'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={field.name}> {label} </label>
            <input 

            className= {
            meta.touched && meta.error 
            ? "block w-full p-2 text-gray-900 border rounded-xl sm:text-md focus:shadow-outlineborder-4 border-red-600"
            :"block w-full p-2 text-gray-900 border border-gray-300 rounded-xl sm:text-md"}
            {...field} {...props}
            autoComplete='off' />
            <ErrorMessage component="div" name={field.name} className='error text-red-500'/>

        </div>
    )

}

export default TextField;

