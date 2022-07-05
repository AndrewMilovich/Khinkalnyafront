import React, {FC, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks/redux";
import {IDish} from "../../interfaces/dish.interface";
import {addDish} from "../../store/slices/admin.slice";

const AddDish: FC = () => {
    const {register, handleSubmit, reset} = useForm()
    const dispatch = useAppDispatch()

    const submit: any = async (data: IDish) => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        formData.append('name', data.name)
        formData.append('price', data.price.toString())
        formData.append('weight', data.weight.toString())
        formData.append('description', data.description)
        formData.append('localityId', data.localityId)
        await dispatch(addDish(formData))
        console.log(data.image)
    }


    return (

        <div>

            AddDish
            <form onSubmit={handleSubmit(submit)}>
                <div>

                    <div><input type="file" {...register('image')}/></div>
                    <div><input type="text" placeholder={'name'}{...register('name')}/></div>
                    <div><input type="number" placeholder={'price'}{...register('price')}/></div>
                    <div><input type="number" placeholder={'weight'}{...register('weight')}/></div>
                    <div><input type="text" placeholder={'description'}{...register('description')}/></div>
                    <div><select {...register('localityId')}>
                        <option value="1">Перші страви</option>
                        <option value="2">Хінкалі</option>
                        <option value="3">Гарячі закуски</option>
                    </select></div>
                    <div><input type="text" placeholder={'ingredients'}{...register('ingredients')}/></div>
                    <div><input type="text" placeholder={'Restaurant'}{...register('Restaurant')}/></div>
                    <div>
                        {/*<Link to={'/user/id'}>*/}
                        <button>Add</button>
                        {/*</Link>*/}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddDish;