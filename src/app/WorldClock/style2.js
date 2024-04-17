"use client"
import {useState, useEffect } from "react";

export default function style2() {

    const date = new Date();

    const [hDeg, setHDeg] = useState(0);
    const [mDeg, setMDeg] = useState(0);
    const [sDeg, setSDeg] = useState(0);
    const [seconds, setSeconds] = useState(0);

    setInterval(() => {
        setSeconds(date.getSeconds());
    }, 100)

    useEffect(() => {
        setHDeg(date.getHours() * 30);
        setMDeg(date.getMinutes() * 6);
        setSDeg(date.getSeconds() * 6);
    }, [seconds])

    return (
        <container className="flex flex-col items-center text-white text-2xl">
            <container className=" w-64 h-64 rounded-full bg-white flex justify-center items-center shadow-md shadow-black">
                <container className=" w-60 h-60 rounded-full bg-slate-600 shadow-inner shadow-black flex justify-center items-center "  >
                    <div className=" h-24 w-2 bg-white -translate-y-11 ease-linear absolute" style={{ rotate: hDeg + "deg" }}></div>
                    <div className=" h-14 w-1 bg-white -translate-y-6 transition-all duration-0 ease-linear absolute" style={{ rotate: mDeg + "deg" }}></div>
                    <div className="h-8 w-1 bg-red-500 -translate-y-3 transition-all duration-0 ease-linear absolute" style={{ rotate: sDeg + "deg" }}></div>
                </container>
            </container>
        </container>
    );
}