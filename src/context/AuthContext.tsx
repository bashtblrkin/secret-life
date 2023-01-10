import {createContext} from "react";

export enum UserRole {
    USER = 'USER',
    PSYHOLOG = 'PSYHOLOG'
}

export interface User {
    authorize: boolean
    role: UserRole | null
}

interface IAuthContext {
    user: User,
    signIn: (phone: string, password: string) => void,
    logout: () => void
}

export const AuthContext = createContext<IAuthContext>({
    user: {
        authorize: false,
        role: null
    },
    signIn: () => {},
    logout: () => {}
})