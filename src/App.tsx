import { useState, } from "react";

import "./App.css";
import type { Timer } from "./typescript/interface/global_interface";
function App() {

    const [time,setTime]=useState<Timer>({
        hr:0,
        min:0,
        sec:0,
        millisec:0
    });

    const [isRuning,setIsRuning]=useState<Number | null>(null);


    const updateTime=()=>{
        time.millisec++;
        if(time.millisec===100){
            time.millisec=0;
            time.sec++
        }
        if(time.sec===60){
            time.sec=0;
            time.min++;
        }
        if(time.min===60){
            time.min=0;
            time.hr++;
        }
        return setTime({hr:time.hr,min:time.min,sec:time.sec,millisec:time.millisec})
    }

    const startTimer=()=>{
        if(isRuning!==null)return;
        updateTime();
        setIsRuning(setInterval(updateTime,10));
    }

    const resetTimer=()=>{
        clearInterval(Number(isRuning));
        setIsRuning(null)
       setTime({hr:0,min:0,sec:0,millisec:0})
    }

    const stopTimer=()=>{
        clearInterval(Number(isRuning));
        setIsRuning(null)
    }


  return (

    <>
    <div >
        <div className="flex flex-col justify-center w-[400px] bg-white mx-auto my-10 shadow-black shadow-sm p-5 ">
            <h2 className="text-[18px] font-bold text-center mb-4">Stope Watch</h2>
            <div className="m-auto text-[20px]">{time.hr+":"+time.min+":"+time.sec+":"+time.millisec}</div>
            <div className="flex gap-5 justify-center mt-4">
                <button onClick={resetTimer} className="bg-blue-600 px-2 text-white rounded-sm">Reset</button>
                <button onClick={startTimer} className="bg-green-600 px-2 text-white rounded-sm">Start</button>
                <button onClick={stopTimer} className="bg-red-600 px-2 text-white rounded-sm">Stop</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default App;
