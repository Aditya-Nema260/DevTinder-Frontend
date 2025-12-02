import React from "react";
import Card from "./Card";

const Card3d = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="hover-3d">
        
        <figure className="max-w-100 rounded-2xl">
         <Card/>
        </figure>
        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Card3d;
