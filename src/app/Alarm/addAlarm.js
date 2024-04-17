"use client"
import { useState } from "react";

export default function New(props) {

    const { Close, End } = props;

    const [date, setDate] = useState(1);
    const [month, setMonth] = useState("January");
    const [time, setTime] = useState("12:00 AM");

    const changeDate = (event) => {
        const date = event.target.value;
        setDate(date);
    }
    const changeMonth = (event) => {
        const month = event.target.value;
        setMonth(month);
    }
    const changeTime = (event) => {
        const time = event.target.value;
        setTime(time);
    }

    const sendData = () => {
        Close(true);
        End(new Date({ date }, { month }, " 2024 ", { time }));
    }

    const clear = () => {
        setTime("12:00 AM");
        setDate(1);
        setMonth("January");
    }

    return (
        <>
            <main className=" w-auto h-fit flex flex-col justify-evenly items-center border-white bg-black p-5 bg-opacity-95 absolute top-10" >
                <h1 className="text-white mb-5 text-2xl ml-4 w-auto">SET ALARM</h1>
                <div className="flex flex-row mb-5 justify-evenly w-fit">
                    <div className='flex flex-col w-fit items-center' >
                        <input className="hours w-12 h-12 mb-2 text-center text-white text-2xl bg-transparent " value={date} onChange={changeDate} min={1} max={31} type="number" ></input>
                        <p className="text-white" >DATE</p>
                    </div>
                    <div className='flex flex-col w-fit items-center' >
                        <input className="min w-36 h-12 mb-2 text-center text-white text-2xl bg-transparent" value={month} onChange={changeMonth} max={12} min={0} type="character" ></input>
                        <p className='text-white' >MONTH</p>
                    </div>
                    <div className='flex flex-col w-fit items-center' >
                        <input className="sec w-28 h-12 mb-2 text-center text-white text-2xl bg-transparent" value={time} onChange={changeTime} type="character" ></input>
                        <p className='text-white' >TIME</p>
                    </div>
                </div>

                <div className="flex flex-row w-full justify-evenly">
                    <button className="text-white mr-2  text-3xl" onClick={sendData} >Save</button>
                    <button className="text-white  text-3xl" onClick={clear} >Cancel</button>
                </div>
            </main>
        </>
    );
}