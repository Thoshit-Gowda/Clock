"use client"
import { useState } from "react";

export default function New(props) {

    const { Time } = props;

    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [time, setTime] = useState(0);

    const sendData = () => {
        setTime((+hour * 3600) + (+min * 60) + +sec);
        Time(time);
    }

    let changeHour = (event) => {
        const Hour = event.target.value;
        setHour(Hour);
    }
    let changeMin = (event) => {
        const Min = event.target.value;
        setMin(Min);
    }
    let changeSec = (event) => {
        const Sec = event.target.value;
        setSec(Sec);
    }

    let clear = () => {
        setTime(0);
        setHour(0);
        setMin(0);
        setSec(0);
    }

    return (
        <>
            <main className="w-full h-96 flex flex-col justify-evenly border-white" >
                <h1 className="text-white mb-5 text-3xl ml-4">ADD NEW TIMER</h1>
                <div className="flex flex-row mb-5 justify-evenly">
                    <div className='flex flex-col' >
                        <input className="hours w-12 h-12 mr-2 text-center text-white text-2xl bg-transparent" value={hour} onChange={changeHour} max={24} min={0} type="number" ></input>
                        <p className="text-white" >HOUR</p>
                    </div>
                    <div className='flex flex-col' >
                        <input className="min w-12 h-12 mr-2 text-center text-white text-2xl bg-transparent" value={min} onChange={changeMin} max={60} min={0} type="number" ></input>
                        <p className='text-white' >MIN</p>
                    </div>
                    <div className='flex flex-col' >
                        <input className="sec w-12 h-12 mr-2 text-center text-white text-2xl bg-transparent" value={sec} onChange={changeSec} max={60} min={0} type="number" ></input>
                        <p className='text-white' >SEC</p>
                    </div>
                </div>
                <div className="flex flex-col mb-5 justify-cente w-full h-20 items-center">
                    <h1 className="text-white text-2xl mb-2  ">NAME</h1>
                    <input className="w-56 text-white bg-transparent border-2 border-white p-2 text-xl"></input>
                </div>
                <div className="flex flex-row w-full justify-evenly">
                    <button className="text-white mr-2  text-3xl" onClick={sendData} >Save</button>
                    <button className="text-white  text-3xl" onClick={clear} >Cancel</button>
                </div>
            </main>
        </>
    );
}