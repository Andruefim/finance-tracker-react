import React from 'react';
import RegisterForm, { RegisterData } from '../features/auth/pages/register/RegisterForm';
import useRegisterRequest from '../features/auth/pages/register/useRegisterRequest';
import { useNavigate } from "react-router";
import { LOGIN } from '../constants/routes';

const Register = () => {
    const navigate = useNavigate();
    const { register } = useRegisterRequest();

    const handleRegister = async (formData: RegisterData, setError: (error: string) => void) => {
        const response = await register(formData, setError);

        if (response.message) navigate(LOGIN);
    }

    return (
        <RegisterForm onRegisterSubmit={handleRegister}/>
    )
}

export default Register;
