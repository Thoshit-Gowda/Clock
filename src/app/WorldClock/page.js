'use client'
import React, { useEffect, useState } from "react";
import Clock from 'react-live-clock';
import { useTime } from 'react-timer-hook';

export default function Home() {

    const [hourDeg, setHourDeg] = useState(0);
    const [minDeg, setMinDeg] = useState(0);
    const [secDeg, setSecDeg] = useState(0);

    const { seconds, minutes, hours } = useTime({ format: '24-hours' });

    useEffect(() => {
        setHourDeg(hours * 15);
        setMinDeg(minutes * 6);
        setSecDeg(seconds * 6);
    }, [seconds])

    const date = new Date;

    return (
        <>
            <main className=' bg-slate-900 flex flex-col justify-center items-center' style={{ height: "100dvh" }} >
                <container className='h-96 w-full flex justify-center items-center'  >
                    <div className=" outer rounded-full w-96 h-96 flex justify-center items-center border-8" style={{ background: "conic-gradient(red " + hourDeg + "deg,#0F172A 0deg)" }}>
                        <div className=" rounded-full w-72 h-72 flex justify-center items-center border-8 " style={{ background: "conic-gradient(orange " + minDeg + "deg,#0F172A 0deg)" }}>
                            <div className=" rounded-full w-48 h-48 flex justify-center items-center border-8" style={{ background: "conic-gradient(green " + secDeg + "deg,#0F172A 0deg)" }}>
                                <div className=' bg-white border-8 rounded-full h-28 w-28 flex justify-center items-center' >
                                    <Clock format={"HH:mm:ss"} ticking={true} className=' text-2xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                </container>
                <p className=" text-7xl text-white">{date.getDate()+" Tuesday, "+date.getFullYear()}</p>
            </main>
        </>
    );
}