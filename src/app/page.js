import Link from "next/link"


export default function Home() {
  return (
    <main className="h-full bg-slate-900 flex flex-col justify-evenly " style={{ height: "100dvh" }}>
      <container className="flex justify-evenly w-full h-auto mb-1s0 ">
        <Link href="/Timer">
          <div className=" w-48 h-48 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 rounded-full flex justify-center items-center" >
            <img src="https://superimageconverter.com/output/timer.jpg" className="w-3/5 rounded-3xl" ></img>
          </div>
        </Link>
        <Link href="/Stopwatch">
          <div className="w-48 h-48 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 rounded-full flex justify-center items-center" >
            <img src="https://superimageconverter.com/output/hourglass.jpg" className="w-3/5 rounded-3xl" ></img>
          </div>
        </Link>
      </container>

      <container className="flex justify-evenly w-full h-auto mt-20 ">
        <Link href="/Alarm">
          <div className="w-48 h-48 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 rounded-full flex justify-center items-center" >
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <span class="material-symbols-outlined">
              alarm
            </span>
          </div>
        </Link>
        <Link href="/WorldClock">
          <div className="w-48 h-48 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 rounded-full flex justify-center items-center" >
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <span class="material-symbols-outlined clock">
              schedule
            </span>
          </div>
        </Link>
      </container>

    </main>
  );
}

