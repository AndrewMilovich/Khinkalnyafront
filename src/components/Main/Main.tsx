import React, {useEffect, useState} from 'react';
import {dishService} from "../../services/dish.service";
import {IDish} from "../../interfaces/dish.interface";
import BarChart from "../BarChart/BarChart";

const Main = () => {

    return (
        <div>
            <BarChart  />
        </div>
    );
};

export default Main;