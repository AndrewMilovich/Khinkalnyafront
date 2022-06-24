import React from 'react';
import './App.css';
import UserRegistration from "./components/User/UserRegistration/UserRegistration";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            hello
            <Routes>
                <Route path={'/auth/registration'} element={<UserRegistration/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
