import { useFormikContext } from "formik";
import { useRef } from "react";

export const ImageSelect = () => {
    const formikProps = useFormikContext();
    const fileInputRef = useRef(null);

    const handleImage = (e) => {
        const file = e.target.files[0];
        formikProps.setFieldValue("pictures[0].file", file);
        fileInputRef.current.value = '';
    };

    return (
        <input
            type="file"
            name="pictures[0].file"
            ref={fileInputRef}
            onChange={handleImage}
        />
    );
};