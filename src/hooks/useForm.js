import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { storage } from "../../firebase.js";
import { v4 as uuid } from "uuid";

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

                const imageUrl = await uploadImageToFirebase(file);

                setValues(state => ({
                    ...state,
                    'image': imageUrl
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

    const uploadImageToFirebase = async (file) => {
        let finalImageUrl = '';
        try {
            const imageRef = ref(storage, `images/${uuid()}`);
            await uploadBytes(imageRef, file);
            finalImageUrl = await getDownloadURL(imageRef);

        } catch (error) {
            console.error("Upload failed:", error);
            setImagePreview('');
            finalImageUrl = '';

        } finally {
            setValues(state => ({ ...state, 'image': finalImageUrl }));
        }

        return finalImageUrl;
    }

    return {
        values,
        imageUploadRegister,
        changeHandler,
        resetForm,
        setValues,
        register,
        formAction,
        imagePreview,
    }
}