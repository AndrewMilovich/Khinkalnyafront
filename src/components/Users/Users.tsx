import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getAll} from "../../store";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Users: FC = () => {
    const [value, onChange] = useState([]as Date[]);
    let ar: number[]=[]
   value.map(value=>ar.push(value.getDate()))
    // console.log(ar)
    const {allUser} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAll())
    }, [])
    const a = (day1: number, day2: number) => allUser.filter(value => {
        const createdAt = value.createdAt;
        const date = new Date(`${createdAt}`);
        const day = date.getDate();
        return day2 >= day && day >= day1
    })
    const iUsers = a(ar[0], ar[1]);
    console.log(iUsers.length);

    return (
        <div>
            <Calendar calendarType={"US"} locale={'uk'} selectRange={true} onChange={onChange}  />

        </div>
    );
};

export default Users;