import React, {FC} from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {useForm} from "react-hook-form";
import {addLocality} from "../../store/slices/admin.slice";

const AddLocality: FC = () => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit, reset} = useForm()
    const submit = (data: any) => {
        dispatch(addLocality(data))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><input type="text" placeholder={'name'}{...register('name')}/></div>
                <button>addLocality</button>
            </form>
        </div>
    );
};

export default AddLocality;