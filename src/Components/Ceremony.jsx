import React from "react";

export default function Ceremony({title,date,time}) {
 const  iconCollection={
    "sanget" : "#"
  }
    return (
    <>
    
        <div className="c11 relative top-7">
           <h1 className="text-8xl font-medium relative left-5 title">{title}</h1>
            <div className="underline"></div>
            <img srcSet={iconCollection['sang']}alt=""  className="bg-black w-36 h-40 icons"/>    
            <div className="info text-left mx-6 text-lg font-semibold ">Date:- {date}
            <br />
            Time:- {time}</div>
        </div>
      
    </>
  );
}
