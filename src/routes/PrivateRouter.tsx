import React, {FC, PropsWithChildren} from 'react';
import {useAuth} from "../hooks/useAuth";
import {Navigate} from "react-router-dom";

const PrivateRouter: FC<PropsWithChildren> = ({children}) => {

    const {user} = useAuth()

    if (!user.authorize) {
        return <Navigate to={'/'} replace/>
    }

    return (
        <>
            {children}
        </>
    );
};

export default PrivateRouter;