"use client"
import { useState, useEffect } from "react";
import Link from 'next/link';

export default function Home() {

    const [intervalId, setIntervalId] = useState();
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [mili, setMili] = useState(0);
    const [Id, setId] = useState(1);
    const [list, setList] = useState([]);

    useEffect(() => {
        setSeconds(Math.floor((time % (60 * 1000)) / 1000));
        setMinutes(Math.floor(time / (60 * 1000)));
        setMili(Math.floor((time % 1000) / 10));
    }, [time]);

    const start = () => {
        if (!isRunning) {
            const startTime = Date.now() - time;
            setIntervalId(setInterval(() => {
                setTime(Date.now() - startTime);
            }, 10))
            setIsRunning(true);
        }
    }

    const reset = () => {
        setList([]);
        setId(1);
        setTime(0);
        setIsRunning(false);
        clearInterval(intervalId);
    }

    const pause = () => {
        if (!isRunning) return;
        clearInterval(intervalId);
        setIsRunning(false);
    }

    const flag = () => {
        setList(old => [{ id: Id, sec: padTime(seconds), min: padTime(minutes), mS: padTime(mili) }, ...old]);
        setId(old => old + 1);
    }

    const padTime = (time) => {
        return time.toString().padStart(2, '0');
    }

    return (
        <>
            <header className=" flex justify-between h-auto">
                <Link href="/">Home</Link>
            </header>
            <main className="stopwatch h-auto w-full flex flex-col justify-center items-center bg-bkg ">
                <p className="text-3xl underline">STOPWATCH</p>
                <div className="flex flex-row items-baseline w-full align-bottom justify-center mt-5">
                    <p className="text-6xl text-black">{padTime(minutes)}:</p>
                    <p className="text-6xl text-black">{padTime(seconds)}.</p>
                    <p className="text-3xl text-black" >{padTime(mili)}</p>
                </div>
                <div className="flex justify-between w-52 mt-5 text-xl">{!isRunning
                    ? <button onClick={start}>START</button>
                    : <button onClick={pause}>STOP</button>
                }
                    <button onClick={reset}>RESET</button>
                    <button onClick={flag}>FLAG</button>
                </div>
                <div className="flex flex-col h-fit sm:flex-wrap items-start justify-start sm:max-h-96 w-full text-xl mt-10">Laps:{list.map((element) => {
                    return (
                        <div className="flex flex-row items-end">
                            <p className="text-2xl">{element.id+"."}</p>
                            <p className="text-2xl">{element.min}:</p>
                            <p className="text-2xl">{element.sec}:</p>
                            <p>{element.mS}</p>
                        </div>
                    );
                })}</div>
            </main>
        </>
    );
}