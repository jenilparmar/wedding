import React from "react";

export default function SubStory({ cartoonNumber }) {
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
      <div className="container1 w-screen h-screen  ">
        <div className="p1 h-72  w-56 relative left-2/3 top-16 flex-col">
          <div className="bg-contain bg-center bg-no-repeat innerp1 relative top-0 self-center h-56 w-56 " id={photoClass}></div>
        </div>
        <div
          className={`bg-contain bg-center bg-no-repeat h-44 w-44  relative left-7 bottom-5 ${photoClass}`}></div>
      </div>
      {/* <div className="line w-fit h-1 bg-black"></div> */}
    </>
  );
}
