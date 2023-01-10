import React, {FC, PropsWithChildren} from 'react';
import {useAuth} from "../hooks/useAuth";
import {useNavigate} from "react-router-dom";

const PrivateRouter: FC<PropsWithChildren> = ({children}) => {

    const {user} = useAuth()
    const navigate = useNavigate()

    if (!user.authorize) {
        console.log(user.authorize)
        navigate('/')
        return null
    }

    return (
        <>
            {children}
        </>
    );
};

export default PrivateRouter;