import { useState } from "react";

export default function useForm(callback, initialValues) {
    const [values, setValues] = useState(initialValues);
    const [imagePreview, setImagePreview] = useState('');

    const changeHandler = async (e) => {
        if (e.target.name === 'image' && e.target.files) {
            const file = e.target.files[0];
            console.log(file);

            if (file) {
                const objectUrl = URL.createObjectURL(file);
                setImagePreview(objectUrl);

                setValues(state => ({
                    ...state,
                    'image': file
                }));
            }
        }
        else {
            setImagePreview(e.target.name === 'image' ? e.target.value : imagePreview);
            setValues(state => ({
                ...state,
                [e.target.name]: e.target.value
            }));
        }
    }

    const formAction = async (formData) => {
        await callback(values, formData);
        URL.revokeObjectURL(imagePreview);
    }

    const register = (fieldname) => {
        return {
            name: fieldname,
            onChange: changeHandler,
            value: values[fieldname],
        }
    }
    const imageUploadRegister = (fieldname) => {
        return {
            name: fieldname,
            onChange: changeHandler,
        }
    }

    const resetForm = () => {
        setValues(initialValues)
    }

    return {
        values,
        imageUploadRegister,
        changeHandler,
        resetForm,
        register,
        formAction,
        imagePreview
    }
}