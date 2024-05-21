import React from "react";

export default function Ceremony({title,date,time,flag}) {
 let bgc = "";
  const  iconCollection={
    "sanget" : "#"
  }
  if(flag) bgc = 'c11'
  else bgc = "c22"
    return (
    <>
    
        <div className={`${bgc}`}>
           <h1 className="text-8xl font-medium relative left-5 title2">{title}</h1>
            <div className="underline my-3"></div>
            <img srcSet={iconCollection['sang']}alt=""  className="bg-black w-36 h-40 icons"/>    
            <div className="info text-left mx-6 text-lg font-semibold ">Date:- {date}
            <br />
            Time:- {time}</div>
        </div>
    </>
  );
}
