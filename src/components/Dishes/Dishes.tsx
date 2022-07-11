import React, {FC, useEffect} from 'react';
import {getDishes} from "../../store/slices/dish.slice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import FirstDishes from "../FirstDishes/FirstDishes";

const Dishes: FC = () => {
    const {result} = useAppSelector(state => state.dishReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getDishes())
    }, [])
    return (
        <div>
            {result.map(results => <FirstDishes key={results.id} results={results}/>)}
        </div>
    );
};

export default Dishes;