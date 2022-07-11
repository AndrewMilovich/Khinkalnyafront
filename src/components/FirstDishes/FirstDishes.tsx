import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getLocality, getRestaurant} from "../../store/slices/admin.slice";
import Dishes from "../Dishes/Dishes";


const FirstDishes: FC = () => {
    const dispatch = useAppDispatch()
    const {locality} = useAppSelector(state => state.adminReducer)
    useEffect(() => {
        dispatch(getLocality())
    }, [])
    const dishByLocality = locality.map(value => value.Dish);
    const results = dishByLocality[0]?.map(results => results);
    return (
        <div>
            <div style={{display:'flex'}}>
                {results && results.map(results => <Dishes key={results.id} results={results}/>)}
            </div>
        </div>
    );
};

export default FirstDishes;