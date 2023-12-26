'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import New from "./New";

export default function Home() {

  const [add, setAdd] = useState(false);
  const Add = () => {
    if (add === false) setAdd(true);
    else setAdd(false);
  }

  const [time, setTime] = useState(0);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (time > 0)
      setTimeout(() => { setTime(old => old - 1); setCountdown(old => old - 1);}, 999)
    
  }, [countdown]);

  function Set(value) {
    setTime(value);
  }

  return (
    <container className="All">
      <header className='bg-black border-b-2 border-white ' >
        <Link href="/" className='text-white'>Home</Link>
      </header>
      <main className='Timer flex flex-col justify-center items-center '>

        <container className="square w-64 h-64 fixed flex flex-col justify-center items-center " >
          <container className='Display h-32 absolute flex justify-around items-center' >

            <div className='w-32 h-28 flex flex-col justify-center items-center' >
              <p className='text-white text-5xl w-16 h-16 flex items-center justify-center'>{Math.floor(time / 3600)}</p>
              <p className='text-white text-3xl w-24 h-10 '>Hours</p>
            </div>
            <div className='w-32 h-28 flex flex-col justify-center items-center' >
              <p className='text-white text-5xl w-16 h-16 flex items-center justify-center'>{Math.floor((time - (Math.floor(time / 3600) * 3600)) / 60)}</p>
              <p className='text-white text-3xl w-28 h-10 '>Minutes</p>
            </div>
            <div className='w-32 h-28 flex flex-col justify-center items-center' >
              <p className='text-white text-5xl w-16 h-16 flex items-center justify-center '>{time - ((Math.floor(time / 3600) * 3600) + (Math.floor((time - (Math.floor(time / 3600) * 3600)) / 60) * 60))}</p>
              <p className='text-white text-3xl w-28 h-10 '>Seconds</p>
            </div>

          </container>
        </container>

        <container>
          <button className='Start w-10 h-10 border text-white absolute top-20' onClick={() => { setCountdown(time) }}></button>
          <button className='Start w-10 h-10 border text-white absolute bottom-20 ' onClick={() => { setCountdown(time) }} ></button>
        </container>

        <container className="add fixed right-0 flex flex-row items-center justify-center h-full w-72" >
          <div className='fixed bottom-2 right-2'>
            <button className="w-10 h-10 text-white border-2 text-3xl text-center relative bottom-0 " onClick={Add} >+</button>
          </div>
          {add ? <New Time={Set} /> : <></>}
        </container>

      </main >
    </container >
  )
}
