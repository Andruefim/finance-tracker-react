import { createContext, useState } from 'react';
import { fetchUser } from '../api/user';
import { User } from '../features/auth/types';

export interface IAuthContext {
    user: User | null;
    setUser: (user: User) => void;
    refetchUser: () => void;
} 

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuthContext = (): IAuthContext => {
    const [user, setUser] = useState<User | null>(null);

    const refetchUser = async () => {
        const userResult = await fetchUser();
        userResult && setUser(userResult);
    }

    return {
        user,
        setUser,
        refetchUser
    }
}