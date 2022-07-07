import React, {FC, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {IUser} from "../../../interfaces";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {loginUser} from "../../../store";
import {userService} from "../../../services/user.service";


const UserLogin: FC = () => {
    const accessToken = localStorage.getItem('access');
    const {isLog}=useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()
    const {register, handleSubmit, reset} = useForm()
    const submit: any = async (data: Partial<IUser>) => {
       await dispatch(loginUser(data))
    }

    //     const promise = userService.getAllUsers();
    // console.log(promise)


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <div><input type="text" placeholder={'email'}{...register('email')}/></div>
                    <div><input type="text" placeholder={'password'}{...register('password')}/></div>
                </div>
                <div>
                    <button >Login</button>
                    {isLog ? <div>UserLogin</div>:<div>userNotLogin</div>}
                </div>
                <a href="#"><h4>Forgot Password?</h4></a>
                    <button>
                        Registration new account
                    </button>

            </form>
        </div>
    );
};

export default UserLogin;