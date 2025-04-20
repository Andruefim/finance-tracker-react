import React, { useContext } from 'react';
import { BACKEND_URL } from '../../../../api/apiUrls';
import { postHeaders } from '../../../../services/http';

import { RegisterData } from './RegisterForm';

const useRegisterRequest = () => {

    const register = async (values: RegisterData, setError: (error: string) => void) => {
        try {
            const response = await fetch(`${BACKEND_URL}/api/Authenticate/register`, {
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
        register
    }
}

export default useRegisterRequest;