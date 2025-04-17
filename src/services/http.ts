import { getToken } from "./jwt"

export const getAuthHeaders = () => {
    const token = getToken();

    return {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }
}

export const postHeaders = {
    'Content-Type': 'application/json',
    ...getAuthHeaders()
}