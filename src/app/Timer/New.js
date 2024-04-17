"use client"
import { useEffect, useState } from "react";

export default function New(props) {

    const { Time, Name, Close } = props;

    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [time, setTime] = useState(0);
    const [name, setName] = useState();

    useEffect(() => {
        setTime((+hour * 3600) + (+min * 60) + +sec);
    }, [hour, min, sec])

    const sendData = () => {
        Time(time);
        Name(name);
        Close(false);
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

    const updateName = (event) => {
        setName(event.target.value)
    }

    let clear = () => {
        setTime(0);
        setHour(0);
        setMin(0);
        setSec(0);
        Time(0);
        setName("");
        Name("");
    }

    return (
        <>
            <main className=" w-auto h-68 lg:h-80 lg:w-auto flex flex-col justify-evenly items-center border-white bg-black p-5 bg-opacity-95 absolute left-5 right-5 bottom-20 lg:left-1/3 lg:right-1/3 lg:top-20 sm:left-40 sm:right-40" >
                <h1 className="text-white mb-5 text-2xl ml-4 w-auto">NEW TIMER</h1>
                <div className="flex flex-row mb-5 justify-evenly w-full">
                    <div className='flex flex-col' >
                        <input className="hours w-12 h-12 mb-2 text-center text-white text-2xl bg-transparent " value={hour} onChange={changeHour} max={24} min={0} type="number" ></input>
                        <p className="text-white" >HOUR</p>
                    </div>
                    <div className='flex flex-col' >
                        <input className="min w-12 h-12 mb-2 text-center text-white text-2xl bg-transparent" value={min} onChange={changeMin} max={60} min={0} type="number" ></input>
                        <p className='text-white' >MIN</p>
                    </div>
                    <div className='flex flex-col' >
                        <input className="sec w-12 h-12 mb-2 text-center text-white text-2xl bg-transparent" value={sec} onChange={changeSec} max={60} min={0} type="number" ></input>
                        <p className='text-white' >SEC</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <input className=" rounded p-1 mb-2" value={name} type="characters" onChange={updateName} ></input>
                    <p className="text-white text-xl">NAME</p>
                </div>

                <div className="flex flex-row w-full justify-evenly">
                    <button className="text-white mr-2  text-3xl" onClick={sendData} >Save</button>
                    <button className="text-white  text-3xl" onClick={clear} >Cancel</button>
                </div>
            </main>
        </>
    );
}