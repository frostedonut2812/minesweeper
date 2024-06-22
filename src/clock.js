import React from 'react';
import {useEffect} from "react";
import {useState} from "react";

export default function Clock({isrunning}) {
        const [time, setTime] = useState(0)

        useEffect(() => {

            setTimeout(() => {

                if (isrunning) {
                setTime(time+1)}
            }, 1000)

        }, [time,isrunning])
        return (<h3>Time: {time}</h3>
        )




}