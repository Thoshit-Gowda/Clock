"use client"
import { useState } from "react";
import Link from 'next/link';



export default function Home() {
    let n = 0;
    const [num, setNum] = useState(0);
    function increment() {
        setNum(num + 1);
    }
    return (
        <>
            <header>
                <Link href="/">Home</Link>
            </header>
            <main>
                <p>{num}</p>
                <button onClick={increment}>Click me</button>
            </main>
        </>
    );
}