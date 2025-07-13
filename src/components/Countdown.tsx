
import {  useEffect, useRef, useState } from "react";
import "../App.css"
function Countdown() {

 
 const [target ,setTarget] = useState<string | null>(null)
 const [diff , setDiff] = useState<number>(0)
 const id = useRef<number | null>(0);
 function handlesubmit(){
  if (!target) return; 
  if (id.current) clearInterval(id.current); 


  //@ts-ignorets.ignore
  id.current = setInterval(() => {
    //@ts-ignore
    setDiff(new Date(target).getTime() - new Date().getTime()) 
  },1000 );
}
 useEffect(()=>{
    if(diff ==0){
       //@ts-ignore
       clearInterval(id.current)
    }
  },[diff])
const getdate = ()=>{
  return Math.floor(diff/(1000*60*60*24))}

const gethours = ()=>{
  const hoursinday = diff%(1000*60*60*24)
  return Math.floor(hoursinday/(1000*60*60))
}

const getminute = ()=>{
   const MininHours = diff%(1000*60*60)
  return Math.floor(MininHours/(1000*60))
}
const getSecond = ()=>{
   const SecinMin = diff%(1000*60)
  return Math.floor(SecinMin/1000)
}


  return (
    <>
    <div className="container">
      <h1>Count down timer app</h1>
      <input type="datetime-local" 
      onChange={(e)=>{setTarget(e.target.value)}} 
      id="date_time" 
      />
      <button onClick={handlesubmit}>start</button>

      <div id="display">
        <ul>
          <li><span id="days">{getdate()}</span>Days</li>
          <li><span id="hours">{gethours()}</span>Hours</li>
          <li><span id="minute">{getminute()}</span>Minutes</li>
          <li><span id="second">{getSecond()}</span>Seconds</li>
        </ul>
      </div>
      </div>
    </>
  );
}

export default Countdown;
