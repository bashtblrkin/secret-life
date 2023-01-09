import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './App.module.scss';
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import HomeLayout from "./layout/HomeLayout";
import PsyhologistsPage from "./pages/PsyhologistsPage";

function App() {
  return (
      <Routes>
          <Route path="/" element={<HomeLayout />} >
              <Route index element={<HomePage />}/>
          </Route>
          <Route  path="/psychologists" element={<HomeLayout />}>
              <Route index element={<PsyhologistsPage />}/>
          </Route>
      </Routes>
  );
}

export default App;
