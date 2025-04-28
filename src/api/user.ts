import { RegisterData } from "../features/auth/pages/register/RegisterForm";
import { User } from "../features/auth/types";
import { http } from "../services/http";

export const fetchUser = async (): Promise<User | undefined> => {
    return http.get<User>('/api/Authenticate/user')
}

export const register = async (values: RegisterData, setError: (error: string) => void): Promise<{message: string} | undefined> => {
    return http.post<RegisterData, {message: string}>('/api/Authenticate/register', values, setError)
}