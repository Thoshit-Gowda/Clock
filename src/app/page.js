"use client"
import Link from "next/link"
import { useState, useEffect } from 'react';

export default function Home() {

  const date = new Date();
  const [hDeg, setHDeg] = useState(0);
  const [mDeg, setMDeg] = useState(0);
  const [sDeg, setSDeg] = useState(0);
  const [seconds, setSeconds] = useState(0);

  setInterval(() => {
    setSeconds(date.getSeconds());
  }, 1000)

  useEffect(() => {
    setHDeg(date.getHours() * 30);
    setMDeg(date.getMinutes() * 6);
    setSDeg(date.getSeconds() * 6);
  }, [seconds])

  const padTime = (time) => {
    return time.toString().padStart(2, '0');
  }

  return (
    <main className="h-auto min-h-screen sm:h-screen bg-gradient-to-br from-slate-600 to-slate-950 flex flex-col justify-evenly" >
      <container className="flex flex-col sm:flex-row justify-evenly items-center w-full h-auto mb-10 ">
        <Link href="/Timer" className="flex flex-col items-center text-white text-2xl hover:-translate-y-1 transition-all ease-in duration-200 mt-10">
          <container className="timerImg ">
            <container className="w-48 h-2 flex justify-around">
              <div className="h-2 w-6 bg-slate-300 rounded-t"></div>
              <div className="h-auto w-6 bg-slate-300 rounded-t"></div>
            </container>
            <container className=" timerBg w-48 rounded-lg flex flex-row text-6xl text-black text-center justify-center">
              <div className=" w-1/2 h-fit">00</div>
              <p>:</p>
              <div className="w-1/2 h-fit">45</div>
            </container>
          </container>
          <p className="mt-2 " >Timer</p>
        </Link>
        <Link href="/Stopwatch" className="flex flex-col items-center text-white text-2xl hover:-translate-y-1 transition-all ease-in duration-200 mt-10">
          <container className="w-48 h-48 rounded-full bg-white flex justify-center items-center shadow-md shadow-black">
            <container className=" w-44 h-44 rounded-full bg-slate-600 shadow-inner shadow-black flex justify-center items-center "  >
              <div className="needle h-20 w-1 bg-white -translate-y-9"></div>
            </container>
          </container>
          <p className="mt-2" >Stopwatch</p>
        </Link>
      </container>

      <container className="flex flex-col sm:flex-row justify-evenly w-full h-auto mt-20 ">
        <Link href="/Alarm" className="flex flex-col items-center text-white text-2xl hover:-translate-y-1 transition-all ease-in duration-200 ">
          <container className="timerImg AlarmPic">
            <container className="w-48 h-2 flex justify-around">
              <div className="h-2 w-6 bg-slate-300 rounded-t"></div>
              <div className="h-auto w-6 bg-slate-300 rounded-t"></div>
            </container>
            <container className=" timerBg w-48 rounded-lg flex flex-row text-6xl text-black text-center justify-center">
              <div className=" w-1/2 h-fit">{padTime(date.getHours())}</div>
              <p>:</p>
              <div className="w-1/2 h-fit"> {padTime(date.getMinutes())}</div>
            </container>
          </container>
          <p className="mt-2" >Alarm</p>
        </Link>
        <Link href="/WorldClock" className="flex flex-col mt-10 mb-10 items-center text-white text-2xl hover:-translate-y-1 transition-all ease-in duration-200">
          <container className="w-48 h-48 rounded-full bg-white flex justify-center items-center shadow-md shadow-black">
            <container className=" w-44 h-44 rounded-full bg-slate-600 shadow-inner shadow-black flex justify-center items-center "  >
              <div className=" absolute h-20 w-1 bg-white -translate-y-10 ease-linear " style={{ rotate: hDeg + "deg" }}></div>
              <div className=" absolute h-14 w-1 bg-white -translate-y-6 transition-all duration-0 ease-linear " style={{ rotate: mDeg + "deg" }}></div>
              <div className=" absolute h-8 w-1 bg-white -translate-y-4 transition-all duration-0 ease-linear " style={{ rotate: sDeg + "deg" }}></div>
              <div className=" absolute bg-gray-900 h-2 w-2 rounded-full" ></div>
            </container>
          </container>
          <p className="mt-2" >Clock</p>
        </Link>
      </container>

    </main>
  );
}

