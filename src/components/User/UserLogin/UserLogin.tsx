import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {IUser} from "../../../interfaces";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {loginUser} from "../../../store";
import {userService} from "../../../services/user.service";

const UserLogin: FC = () => {
    const {accessToken}=useAppSelector(state => state.authReducer)

    const dispatch = useAppDispatch()
    const {register, handleSubmit, reset} = useForm()
    const submit: any = async (data: IUser) => {
        await dispatch(loginUser(data))
    }
    console.log(userService.getAllUsers(accessToken));


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div className={'registration'}>
                    <div><input type="text" placeholder={'email'}{...register('email')}/></div>
                    <div><input type="text" placeholder={'password'}{...register('password')}/></div>
                </div>
                <div>
                    <button >Login</button>

                </div>
                <a href="#"><h4>Forgot Password?</h4></a>

                <Link to={'/auth/registration'}>
                    <button>
                        Registration new account
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default UserLogin;