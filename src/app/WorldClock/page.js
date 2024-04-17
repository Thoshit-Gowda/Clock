'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Style1 from "./style1";
import Style2 from "./style2";

export default function Home() {

    const [style1, setStyle1] = useState(true);
    const [day, setDay] = useState(" ");
    const [date, setDate] = useState(" ");
    const [year, setYear] = useState(" ");

    const dates = new Date();

    useEffect(() => {

        switch (dates.getDay()) {
            case 0:
                setDay("Sunday");
                break;
            case 1:
                setDay("Monday");
                break;
            case 2:
                setDay("Tuesday");
                break;
            case 3:
                setDay("Wednesday");
                break;
            case 4:
                setDay("Thursday");
                break;
            case 5:
                setDay("Friday");
                break;
            case 6:
                setDay("Saturday");
                break;
        }
        setDate(dates.getDate());
        setYear(dates.getFullYear());
    });

    return (
        <>
            <header>
                <Link href="/" className="mr-10">Home</Link>
                {style1
                    ? <button onClick={() => { setStyle1(false) }}>STYLE2</button>
                    : <button onClick={() => { setStyle1(true) }}>STYLE1</button>
                }
            </header>
            <main className=' bg-slate-900 flex flex-col sm:flex-row justify-center sm:justify-evenly items-center w-full h-screen'  >
                <container className='h-96 flex justify-center items-center ml-5'  >
                    {style1
                        ? <Style1></Style1>
                        : <Style2></Style2>}
                </container>
                <div>
                    <p className=" text-7xl text-white">{date + " " + day + ","}</p>
                    <p className=" text-5xl text-white">{year}</p>
                </div>
            </main>

        </>
    );
}