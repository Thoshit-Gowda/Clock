"use client"
import { useState, useEffect, useRef } from "react";
import Link from 'next/link';

export default function Home() {

    const [time, setTime] = useState(0);
    const [isAlarmSet, setIsAlarmSet] = useState(false);
    const [isAlarmActive, setIsAlarmActive] = useState(false);

    const setAlarm = () => {
        setIsAlarmSet(true);
    }

    const activateAlarm = () => {
        setIsAlarmActive(true);
        const alarm = new Date(time);
        const now = new Date();

        const timeUntilAlarm = alarm - now;

        setTimeout(() => {
            alert('alarm!');
            setIsAlarmActive(false);

        }, timeUntilAlarm);
    };

    const deactivateAlarm = () => {
        setIsAlarmActive(false);
    }

    const inputTime = (e) => {
        setTime(e.target.value);
    }

    return (
        <>
            <main className="text-black">
                <h1 className="text-4xl">ALARM</h1>
                <div>
                    <input className=" h-10 w-40 rounded border-black" type="time" value={time} onChange={inputTime} disabled={isAlarmSet}></input><br></br>
                    <button onClick={setAlarm}>SET ALARM</button>
                </div>
                {!isAlarmActive ? <button onClick={activateAlarm}>ACTIVATE ALARM</button> : <button onClick={deactivateAlarm}>TERMINATE ALARM</button> }
            </main>
        </>
    );
}