import React, {FC} from 'react';
import {IDish} from "../../interfaces/dish.interface";
import {useAppSelector} from "../../hooks/redux";

const FirstDishes: FC<{ results: IDish }> = ({results}) => {

    return (
        <div >
            <div >
                <div>{results.name}</div>
                <div><img width={'220px'} src={`${results.image}`} alt="dish"/></div>
                <div style={{display: 'flex'}}>
                    <div>{results.weight}грамм</div>
                    <div>{results.price}грн</div>
                </div>
            </div>
        </div>
    );
};

export default FirstDishes;