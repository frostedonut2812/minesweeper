import React from 'react';
import {useEffect} from "react";
import {useState} from "react";

export default function Clock({isrunning}) {
    const [time, setTime] = useState(0)

    useEffect(() => {

        setTimeout(() => {


            setTime(time +1 )
            console.log(time)
        }, 1000)

    })
    return(<h3>{time}</h3>)







}