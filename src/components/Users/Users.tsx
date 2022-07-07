import React, {FC, useEffect} from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {getAll} from "../../store";

const Users :FC= () => {
    const dispatch= useAppDispatch()
    useEffect(()=>{    dispatch(getAll())
    },[])
    return (
        <div>

        </div>
    );
};

export default Users;