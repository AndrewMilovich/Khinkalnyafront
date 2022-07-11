import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getLocality} from "../../store/slices/admin.slice";
import Dishes from "../Dishes/Dishes";

const Khinkali: FC = () => {
    const dispatch = useAppDispatch()
    const {locality} = useAppSelector(state => state.adminReducer)
    useEffect(() => {
        dispatch(getLocality())
    }, [])
    const dishByLocality = locality.map(value => value.Dish);
    const results = dishByLocality[1]?.map(results => results);
    return (
        <div style={{display: 'flex'}}>
            {results && results.map(results => <Dishes key={results.id} results={results}/>)}
        </div>
    );
};

export default Khinkali;