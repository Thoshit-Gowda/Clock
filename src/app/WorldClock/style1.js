"use client"
import {useState, useEffect} from "react";

export default function style1() {

    const date = new Date();

    const [hourDeg, setHourDeg] = useState(0);
    const [minDeg, setMinDeg] = useState(0);
    const [secDeg, setSecDeg] = useState(0);
    const [seconds, setSeconds] = useState(0);

    setInterval(() => {
        setSeconds(date.getSeconds());
    }, 100)

    useEffect(() => {
        setHourDeg(date.getHours() * 30);
        setMinDeg(date.getMinutes() * 6);
        setSecDeg(date.getSeconds() * 6);
    }, [seconds])

    return (
        <container className='h-96 flex justify-center items-center ml-5'  >
            <div className=" outer rounded-full w-72 h-72 flex justify-center items-center" style={{ background: "conic-gradient(#28829e " + hourDeg + "deg,rgb(30 41 59) 0deg)" }}>
                <div className=" rounded-full w-52 h-52 flex justify-center items-center " style={{ background: "conic-gradient(#21f5a4 " + minDeg + "deg,#21f5a400 0deg)" }}>
                    <div className=" rounded-full w-32 h-32 flex justify-center items-center" style={{ background: "conic-gradient(#215af5 " + secDeg + "deg,#21f5a400 0deg)" }}>
                        <p className="text-white text-3xl ">{((date.getHours() <= 9) ? ("0" + date.getHours()) : date.getHours()) + ":" + ((date.getMinutes() <= 9) ? ("0" + date.getMinutes()) : date.getMinutes()) + ":" + ((date.getSeconds() <= 9) ? ("0" + date.getSeconds()) : date.getSeconds())}</p>
                    </div>
                </div>
            </div>
        </container>
    );
}