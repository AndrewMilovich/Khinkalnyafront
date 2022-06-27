import React from 'react';
import './App.css';
import UserRegistration from "./components/User/UserRegistration/UserRegistration";
import {Route, Routes} from "react-router-dom";
import UserLogin from "./components/User/UserLogin/UserLogin";

function App() {
    return (
        <div>
            hello
            <Routes>
                <Route path={'/auth/registration'} element={<UserRegistration/>}></Route>
                <Route path={'/auth/login'} element={<UserLogin/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
