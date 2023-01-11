import React from 'react';
import {Outlet} from "react-router-dom";
import AuthorizedHeader from "../components/AuthorizedHeader/AuthorizedHeader";
import Footer from "../components/Footer/Footer";
import FixedCircle from "../components/FixedCircle/FixedCircle";

const AuthorizeLayout = () => {
    return (
        <>
            <AuthorizedHeader />
            <div style={{
                flex: '1 0 auto'
            }}>
                <Outlet />
            </div>
            <Footer />
            <FixedCircle />
        </>
    );
};

export default AuthorizeLayout;