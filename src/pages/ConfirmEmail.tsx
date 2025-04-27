import React, { useContext } from 'react';
import LoginForm, { LoginData } from '../features/auth/pages/login/LoginForm';
import useLoginRequest from '../features/auth/pages/login/useLoginRequest';
import { saveToken } from '../services/jwt';
import { useNavigate } from "react-router";
import { AuthContext } from '../context/AuthContext';
import { DASHBOARD } from '../constants/routes';
import ConfirmEmailForm from '../features/auth/pages/confirmEmail/ConfirmEmailForm';
import useConfirmEmail from '../features/auth/pages/confirmEmail/useConfirmEmail';

const ConfirmEmail = () => {
    const { handleConfirmEmail } = useConfirmEmail();

    return (
        <ConfirmEmailForm onSubmit={handleConfirmEmail}/>
    )
}

export default ConfirmEmail;
