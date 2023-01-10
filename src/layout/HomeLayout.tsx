import React, {useState} from 'react';
import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import Modal from "../components/Modal/Modal";
import AuthorizeForm from "../components/Form/AuthorizeForm/AuthorizeForm";
import RegisterForm from "../components/Form/RegisterForm/RegisterForm";
import Footer from "../components/Footer/Footer";

const HomeLayout = () => {

    const [signInModalOpen, setSignInModalOpen] = useState(false)
    const [registerModalOpen, setRegisterModalOpen] = useState(false)

    const handleSignInModalClose = () => {
        setSignInModalOpen(false)
    }

    const handleRegisterModalClose = () => {
        setRegisterModalOpen(false)
    }

    return (
        <div>
            <Header onSignInClick={() => {setSignInModalOpen(true)}}/>
            <Outlet />
            <Footer />
            <Modal isOpen={signInModalOpen} onClose={handleSignInModalClose}>
                <AuthorizeForm onClickRegister={() => {
                    setSignInModalOpen(false)
                    setRegisterModalOpen(true)
                }}/>
            </Modal>
            <Modal isOpen={registerModalOpen} onClose={handleRegisterModalClose}>
                <RegisterForm onClose={handleRegisterModalClose}/>
            </Modal>
        </div>
    );
};

export default HomeLayout;