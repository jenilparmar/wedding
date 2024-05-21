import React from "react";
import Ceremony from "./Ceremony";
  // "" 22
export default function About() {
  return (
    <div>
      {/* sangit
      haldi
      Mahendi
      barat
      varmala 
      kanyadan
      Reception  */}
      <div className="container5 w-screen h-fit  bg-purple-700">
        <Ceremony title={"Sangeet"} flag={true} />
        <Ceremony title={"Mandap"} flag={false} />
        <Ceremony title={"Barat"} flag={true} />
        <Ceremony title={"Varmala"} flag={false} />
      </div>
    </div>
  );
}
