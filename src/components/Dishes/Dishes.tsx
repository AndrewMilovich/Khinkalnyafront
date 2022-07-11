import React, {FC} from 'react';
import {IDish} from "../../interfaces/dish.interface";

const Dishes: FC <{ results: IDish }> = ({results})=> {

    return (
        <div>
            <img width={'220px'} src={`${results.image}`} alt="dish"/>
            <div>{results.name}</div>
            <div style={{display: 'flex'}}>
                <div>{results.weight}грам</div>
                <div>{results.price}грн</div>
            </div>
            <button>купити</button>
        </div>
    );
};

export default Dishes;