import React from "react";

export default function SubStory({ cartoonNumber ,title,story}) {
    let root = document.getElementById("root");
    root.style.backgroundColor="yellow"
  let photoClass = "";
  if (cartoonNumber === 1) photoClass = "c1";
  else if (cartoonNumber === 2) photoClass = "c2";
  else if (cartoonNumber === 3) photoClass = "c3";
  else if (cartoonNumber === 4) photoClass = "c4";
  else if (cartoonNumber === 5) photoClass = "c5";
  else if (cartoonNumber === 6) photoClass = "c6";
  else if (cartoonNumber === 7) photoClass = "c7";

  return (
    <>
<div className={`w-screen ${cartoonNumber!=1?"-my-16":""} h-1 bg-black`}></div>
      
      <div className="container1 w-screen h-screen bg-yellow-400 ">
        <div className="p1 h-72  w-56 relative left-2/3 top-16 flex-col">
          <div className="bg-contain bg-center bg-no-repeat innerp1 relative top-0 self-center h-56 w-56 " id={photoClass}></div>
        </div>
        <div
          className={`bg-contain pos bg-center bg-no-repeat h-44 w-44 relative left-7 top-0 ${photoClass}`}></div>
      </div>
        <div className="flex flex-col w-80 nas h-80 gap-1 relative left-64 bottom-56">
            <p className="title font-medium text-3xl">{title}</p>
            <div className="line2"></div>
            <p className="text-sm indent-5 first-letter:text-red-600">{story}</p>
        </div>  </>
  );
}
