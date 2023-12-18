import { ErrorMessage, useFormikContext } from "formik";
import { useRef } from "react";

export const ImageSelect = ({label}) => {
    const formikProps = useFormikContext();
    const fileInputRef = useRef(null);

    const handleImage = (e) => {
        const file = e.target.files[0];
        formikProps.setFieldValue("pictures[0].file", file);
    };

    return (
        <div className="flex flex-col mb-4">
             <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="pictures[0].file"> {label} </label>
            <input
                type="file"
                id="pictures[0].file"
                name="pictures[0].file"
                ref={fileInputRef}
                onChange={handleImage}
            />
            <ErrorMessage component="div" name="pictures[0].file" className='error text-red-500' />
        </div>
    );
};