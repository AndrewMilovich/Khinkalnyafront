import React from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {dishService} from "../../services/dish.service";
import Dishes from "../Dishes/Dishes";

const Main = () => {
    const dispatch = useAppDispatch()
    // dishService.getDish().then(value => console.log(value))
    return (
        <div>
            <Dishes/>
        </div>
    );
};

export default Main;