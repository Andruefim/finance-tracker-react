import React, { useContext } from 'react';
import { BACKEND_URL } from '../../../../api/apiUrls';
import { postHeaders } from '../../../../services/http';

import { LoginData } from './LoginForm';

const useLoginRequest = () => {

    const login = async (values: LoginData, setError: (error: string) => void) => {
        try {
            const response = await fetch(`${BACKEND_URL}/api/Authenticate/login`, {
                method: 'POST',
                headers: postHeaders,
                body: JSON.stringify(values)
            });

            return await response.json(); 
        } catch (e) {
            setError(e as string)
        }
    }

    return {
        login
    }
}

export default useLoginRequest;