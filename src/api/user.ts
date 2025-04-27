import { User } from "../features/auth/types";
import { getAuthHeaders } from "../services/http";
import { BACKEND_URL } from "./apiUrls";

export const fetchUser = async (): Promise<User | undefined> => {
    try {
        const response = await fetch(`${BACKEND_URL}/api/Authenticate/user`, {
            method: 'POST',
            headers: getAuthHeaders()
        });

        return await response.json(); 
    } catch (e) {
        console.log(e as string)
    }
}