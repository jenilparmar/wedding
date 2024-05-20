import React, { useState } from "react";

export default function Albums() {
  const photoCollection = {
    1: "https://wallpapercave.com/wp/wp8987701.jpg",
    2: "https://wallpaperset.com/w/full/4/9/2/93352.jpg",
    3: "https://wallpapercrafter.com/desktop6/1517030-human-person-hug-dating-couple-sainte-anne-runion.jpg",
    4: "https://wallpapers.com/images/featured/couple-2ub8dk6cccwitl9v.jpg",
  };
  const numberOfPhotos = Object.keys(photoCollection).length;

  const [photo, setPhoto] = useState(1);

  function handleClick(photoNumber) {
    if (photoNumber < 1) {
      setPhoto(numberOfPhotos);
    } else if (photoNumber > numberOfPhotos) {
      setPhoto(1);
    } else {
      setPhoto(photoNumber);
    }
  }

  return (
    <>
      <center>
        <div className="slider w-screen h-screen bg-gray-700">
          <div className="photoslider w-screen h-screen">
            <img
              srcSet={photoCollection[photo]}
              alt=""
              className=" w-screen h-screen object-cover"
            
            />
          </div>
          <div className="container2 flex flex-row gap-3">
            <div className="photos w-24 bg-black h-32 rounded-md"> <img
              srcSet={photoCollection[((photo+1)%numberOfPhotos)]}
              alt=""
              className="w-24 h-32 object-cover"
            /></div>
            <div className="photos w-24 bg-black h-32 rounded-md"> <img
              srcSet={photoCollection[(photo+2)%numberOfPhotos]}
              alt=""
              className="w-24 h-32 object-cover"
            /></div>
            <div className="photos w-24 bg-black h-32 rounded-md"> <img
              srcSet={photoCollection[(photo+3)%numberOfPhotos]}
              alt=""
              className="w-24 h-32 object-cover"
            /></div>
          </div>
          <div className="control flex flex-row gap-6 w-28 h-32">
            <div
              className="dir prev h-10 w-10 flex justify-center rounded-bl-full"
              onClick={() => handleClick(photo - 1)}
            >
              <i className="fa-solid text-2xl self-center fa-backward text-white"></i>
            </div>
            <div
              className="dir next h-10 w-10 flex justify-center rounded-bl-full"
              onClick={() => handleClick(photo + 1)}
            >
              <i className="fa-solid text-2xl self-center fa-forward text-white"></i>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
