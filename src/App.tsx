import React from 'react';
import './App.css';
import UserRegistration from "./components/User/UserRegistration/UserRegistration";
import {Route, Routes} from "react-router-dom";
import UserLogin from "./components/User/UserLogin/UserLogin";
import Layout from "./components/Layout/Layout";
import AddDish from "./components/addDish/addDish";
import Users from "./components/Users/Users";
import Main from "./components/Main/Main";
import FirstDishes from "./components/FirstDishes/FirstDishes";
import Khinkali from "./components/Khinkali/Khinkali";

function App() {

    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={'/main'} element={<Main/>}></Route>
                    <Route path={'/auth/registration'} element={<UserRegistration/>}></Route>
                    <Route path={'/auth/login'} element={<UserLogin/>}></Route>
                    <Route path={'/admin/addDish'} element={<AddDish/>}></Route>
                    <Route path={'/users'} element={<Users/>}></Route>
                    <Route path={'/dish/firstDishes'} element={<FirstDishes/>}></Route>
                    <Route path={'/dish/khinkali'} element={<Khinkali/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
