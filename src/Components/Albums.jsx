import React from "react";

export default function Albums() {
  return (
    <>
      <center>
        <div className="slider w-screen h-screen bg-gray-700">
          <div className="photoslider w-screen h-screen"></div>
          <div className="container2 flex flex-row gap-3">
            <div className="photos w-24 bg-black h-32 rounded-md"></div>
            <div className="photos w-24 bg-black h-32 rounded-md"></div>
            <div className="photos w-24 bg-black h-32 rounded-md"></div>
          </div>
          <div className="control flex flex-row gap-6 w-28 h-32">
            <div className="dir prev h-10 w-10 flex justify-center  rounded-bl-full">
              {" "}
              <i className="fa-solid text-2xl self-center fa-backward text-white"></i>
            </div>
            <div className="dir next h-10 w-10 flex justify-center  rounded-bl-full">
              <i className="fa-solid text-2xl self-center fa-forward text-white"></i>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
