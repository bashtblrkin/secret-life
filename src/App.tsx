import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './App.module.scss';
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import HomeLayout from "./layout/HomeLayout";
import PsyhologistsPage from "./pages/PsyhologistsPage";
import PrivateRouter from "./routes/PrivateRouter";
import SearchPage from "./pages/SearchPage";
import AuthorizeLayout from "./layout/AuthorizeLayout";
import CurrentPsyholog from "./pages/CurrentPsyholog";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout/>}>
                <Route index element={<HomePage/>}/>
            </Route>
            <Route path="/psychologists" element={<HomeLayout/>}>
                <Route index element={<PsyhologistsPage/>}/>
            </Route>
            <Route path="/search" element={
                <PrivateRouter>
                    <AuthorizeLayout/>
                </PrivateRouter>}
            >
                <Route index element={
                    <PrivateRouter>
                        <SearchPage/>
                    </PrivateRouter>
                }/>
                <Route path=":id" element={
                    <PrivateRouter>
                        <CurrentPsyholog/>
                    </PrivateRouter>
                }/>
            </Route>
        </Routes>
    );
}

export default App;
