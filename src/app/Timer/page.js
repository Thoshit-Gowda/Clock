"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import New from "./New";

export default function Home() {

  const [add, setAdd] = useState(false);

  const Add = () => {
    if (add === false) setAdd(true);
    else setAdd(false);
  };

  const [time, setTime] = useState(0);
  const [id, setId] = useState();
  const [isRunning, setIsRunning] = useState(false);
  const [resetTime, setResetTime] = useState(0);
  const [name, setName] = useState();

  const start = () => {
    if (isRunning || time <= 0) {
      return;
    }
    else {
      const countdown = setInterval(() => {
        if (time <= 0) {
          clearInterval(id);
          setTime(resetTime);
        }
        setTime(old => old - 1);
      }, 1000);
      setId(countdown)
      setIsRunning(true);
    }
  }

  const pause = () => {
    if (isRunning) {
      clearInterval(id);
      setIsRunning(false);
    }
  }

  const reset = () => {
    clearInterval(id);
    setIsRunning(false);
    setTime(resetTime);
  }

  useEffect(() => {
    if (time <= 0) {
      clearInterval(id);
      setIsRunning(false);
    }
  }, [time])

  return (
    <>
      <header className="bg-black">
        <Link href="/" className="text-white">
          Home
        </Link>
      </header>
      <main className="Timer flex flex-col items-center h-screen bg-gradient-to-b from-black to-cyan-950 " >

        <container className=" mt-20 flex flex-col items-center " >

          <p className="text-white mb-4 text-2xl">{name}</p>

          <container className="square w-28 h-28 sm:w-40 sm:h-40 lg:w-52 lg:h-52  top-40 flex flex-col justify-center items-center ">
            <container className="Display lg h-20 w-60 sm:h-24 sm:w-80 lg:h-28 lg:w-96 flex justify-around items-center">
              <div className="w-fit h-fit flex flex-col justify-center items-center">
                <p className="text-white w-fit h-fit text-3xl lg:text-5xl flex items-center justify-center">
                  {Math.floor(time / 3600)}
                </p>
                <p className="text-white w-fit h-fit lg:text-3xl text-center">Hours</p>
              </div>
              <div className="w-fit h-fit  flex flex-col justify-center items-center">
                <p className="text-white w-fit h-fit  text-3xl lg:text-5xl flex items-center justify-center">
                  {Math.floor((time - Math.floor(time / 3600) * 3600) / 60)}
                </p>
                <p className="text-white w-fit h-fit  lg:text-3xl text-center">Minutes</p>
              </div>
              <div className="w-fit h-fit  flex flex-col justify-center items-center">
                <p className="text-white w-fit h-fit  text-3xl lg:text-5xl flex items-center justify-center ">
                  {time -
                    (Math.floor(time / 3600) * 3600 +
                      Math.floor((time - Math.floor(time / 3600) * 3600) / 60) *
                      60)}
                </p>
                <p className="text-white w-fit h-fit lg:text-3xl text-center text">Seconds</p>
              </div>
            </container>
          </container>

          <container className=" h-fit flex justify-evenly">
            <button
              className=" w-20 h-10 border text-white m-2 hover:bg-emerald-700 hover:-translate-y-1 hover:border-gray-950 transition-all ease-in-out duration-100"
              onClick={start}
            >
              START
            </button>

            <button
              className=" w-20 h-10 border text-white m-2 hover:bg-emerald-700 hover:-translate-y-1 hover:border-gray-950 transition-all ease-in-out duration-100"
              onClick={pause}
            >
              PAUSE
            </button>

            <button
              className=" w-20 h-10 border text-white m-2 hover:bg-emerald-700 hover:-translate-y-1 hover:border-gray-950 transition-all ease-in-out duration-100"
              onClick={reset}
            >
              RESET
            </button>
          </container>

        </container>

        <container>
          <div className="fixed bottom-2 right-2 ">
            <button
              className="w-10 h-10 text-white border-2 text-3xl text-center relative bottom-0 "
              onClick={Add}
            > +
            </button>
          </div>
          {add ? <New Time={(value) => {
            setTime(value);
            setResetTime(value);
          }} Name={(value) => { setName(value) }} Close={(value) => { setAdd(value) }} /> : <></>}
        </container>
      </main>
    </>
  );
}
