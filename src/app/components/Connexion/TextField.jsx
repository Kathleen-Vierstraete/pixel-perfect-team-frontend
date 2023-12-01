import React from 'react';
import { ErrorMessage, useField } from 'formik';

const TextField = ({label, ...props}) => {

    const [field, meta] = useField(props);
    console.log(meta);


    return (
        <div className='flex flex-col pb-5 place-items-start'>
            <label className='block text-gray-700 text-sm font-bold mb-2"' htmlFor={field.name}> {label} </label>
            <input 
            className=
            'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
            
            autoComplete='off' />

        </div>
    )

}

export default TextField;