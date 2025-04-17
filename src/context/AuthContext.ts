import { createContext, useState } from 'react';
import { User } from '../features/auth/types';

export interface IAuthContext {
    user: User | null;
    setUser: (user: User) => void;
} 

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuthContext = (): IAuthContext => {
    const [user, setUser] = useState<User | null>(null);

    return {
        user,
        setUser
    }
}