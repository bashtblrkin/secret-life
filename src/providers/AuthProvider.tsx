import React, {FC, PropsWithChildren, useState} from 'react';
import {AuthContext, User, UserRole} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

const AuthProvider: FC<PropsWithChildren> = ({children}) => {

    const [user, setUser] = useState<User>({
        authorize: false,
        role: null
    })

    const navigate = useNavigate()

    const handleSignIn = (phone: string, password: string) => {
        if (phone === '+7 (999) 999-99-99' && password === 'qwerty123') {
            setUser({
                authorize: true,
                role: UserRole.USER
            })
            navigate('/search')
        }
        if (phone === '+7 (888) 888-88-88' && password === 'qwerty123') {
            setUser({
                authorize: true,
                role: UserRole.PSYHOLOG
            })
        }
    }

    const handleLogout = () => {
        setUser({
            authorize: false,
            role: null
        })
        navigate('/')
    }

    return (
        <AuthContext.Provider value={{
            user: user,
            signIn: handleSignIn,
            logout: handleLogout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;