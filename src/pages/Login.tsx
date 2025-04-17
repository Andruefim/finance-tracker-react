import React, { useContext } from 'react';
import LoginForm, { LoginData } from '../features/auth/pages/login/LoginForm';
import useLoginRequest from '../features/auth/pages/login/useLoginRequest';
import { saveToken } from '../services/jwt';
import { useNavigate } from "react-router";
import { AuthContext } from '../context/AuthContext';
import { DASHBOARD } from '../constants/routes';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useLoginRequest();
    const { setUser } = useContext(AuthContext);

    const handleLogin = async (formData: LoginData, setError: (error: string) => void) => {
        const user = await login(formData, setError);
        if (!user) return;

        saveToken(user.token);
        setUser(user);
        navigate(DASHBOARD);
    }

    return (
        <LoginForm onLoginSubmit={handleLogin}/>
    )
}

export default Login;
