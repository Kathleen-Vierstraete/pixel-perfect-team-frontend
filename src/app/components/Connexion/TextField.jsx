import React from 'react';
import { ErrorMessage, useField } from 'formik';

const TextField = ({label, ...props}) => {

    const [field, meta] = useField(props);
    console.log(meta);


    return (
        <div className='flex flex-col pb-5 place-items-start'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={field.name}> {label} </label>
            <input 

            className= "w-full h-10 rounded-full border border-blue-gray-500 bg-white  placeholder-shown:border placeholder-shown:border-blue-gray-200 text-black placeholder-shown:border-t-blue-gray-500`"

            
            autoComplete='off' />

        </div>
    )

}

export default TextField;