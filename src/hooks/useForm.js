import { useState } from "react";

export default function useForm(callback, initialValues) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const formAction = async (formData) => {
        await callback(values, formData)
    }

    function register(fieldName) {
        return {
            name: fieldName,
            value: values[fieldName],
            onChange: changeHandler,
        }
    }

    return {
        values,
        register,
        formAction,
    }
}