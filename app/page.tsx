'use client'

import { useState } from "react";

export default function Home() {

  const [result, setResult] = useState<string>('')
  const [userInput, setUserInput] = useState<string>('');

  const getDaysInMonth = (year: any, month: any) => {
    return new Date(year, month, 0).getDate()
  }

  const calculateAge = () => {
    // When user are enter birth date
    const birthDate:any = new Date(userInput);

    const d1 = birthDate.getDate();
    const m1 = birthDate.getMonth();
    const y1 = birthDate.getFullYear();

    // Today's date
    const today = new Date()

    const d2 = today.getDate();
    const m2 = today.getMonth();
    const y2 = today.getFullYear();

    // Calculate total time differance
    let d3:number, m3:number, y3:number;

    // Year calculate
    y3 = y2 - y1;

    // Month calculate
    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 -m1;
    }

    // Date calculate
    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDaysInMonth(y1, m1) + d2 -d1;
    }

    if (m3 < 0) {
      m3 = 11;
      y3--;
    }

    setResult(`You are ${y3} years, ${m3} months and ${d3} days old.`)
  }

  return (
    <div className="w-full h-[85vh] flex flex-col items-center justify-center px-4">
      <div className="w-full md:w-[70%] h-[60%] bg-blue-100 rounded-md flex flex-col items-start justify-center gap-5 pl-10 border drop-shadow-2xl">
        <header className="w-full py-5">
          <h1 className="text-3xl text-black font-bold">Age Calculator</h1>
        </header>
        <main className="w-full h-[50%] flex flex-col items-start justify-center gap-10">
          <input
            type="date" 
            onChange={(e) => {setUserInput(e.target.value)}}
            className="w-[90%] text-black bg-blue-300 px-3 py-4 rounded-md outline-none cursor-pointer border border-black" />
          <button
            onClick={calculateAge}
            className="bg-blue-200 hover:bg-blue-200/70 px-5 py-3 rounded-md text-black font-bold border cursor-pointer">Calaculate</button>
        </main>
        <div className="w-[90%] h-[10%] flex items-center justify-center">
          <p className="text-black font-bold text-xl">{result}</p>
        </div>
      </div>
    </div>
  );
}
