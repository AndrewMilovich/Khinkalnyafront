import React, {FC, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {IDish} from "../../interfaces/dish.interface";
import {addDish, getLocality} from "../../store/slices/admin.slice";

const AddDish: FC = () => {
    const {locality} = useAppSelector(state => state.adminReducer)
    const {register, handleSubmit, reset} = useForm()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getLocality())
    }, [])
    const submit: any = async (data: IDish) => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        formData.append('name', data.name)
        formData.append('price', data.price.toString())
        formData.append('weight', data.weight.toString())
        formData.append('description', data.description)
        formData.append('localityId', data.localityId)
        await dispatch(addDish(formData))

    }

    return (

        <div>

            AddDish
            <form onSubmit={handleSubmit(submit)}>
                <div>

                    {/*{locality.map(value => <div>{value}</div>)}*/}
                    <div><input type="file" {...register('image')}/></div>
                    <div><input type="text" placeholder={'name'}{...register('name')}/></div>
                    <div><input type="number" placeholder={'price'}{...register('price')}/></div>
                    <div><input type="number" placeholder={'weight'}{...register('weight')}/></div>
                    <div><input type="text" placeholder={'description'}{...register('description')}/></div>
                    <select {...register('localityId')}  >
                        <option value="">Виберіть цех приготування</option>
                        {locality && locality.map(result => <option key={result.id} value={result.id}>{result.name}</option>)}
                    </select>
                    <div><input type="text" placeholder={'ingredients'}{...register('ingredients')}/></div>
                    <div><input type="text" placeholder={'Restaurant'}{...register('Restaurant')}/></div>
                    <div>

                        <button>Add</button>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddDish;