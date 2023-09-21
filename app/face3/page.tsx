import React from "react";
import Particlediv from "../components/Particlediv";

export default function page() {
  return (
    <div className=" mt-20 ">
      <div className=" grid place-items-center bg-amber-400 h-[700px]   ">
        <Particlediv />
        <div className=" absolute bg-pink-400 ">Hello</div>
      </div>
      <div className="flex justify-between  ">
        <button className="bg-[#FF5733] text-white px-4 py-2   rounded">
          Primary Button
        </button>

        <button className="bg-[#2980B9] text-white px-4 py-2   rounded">
          Secondary Button
        </button>

        <button className="bg-[#27AE60] text-white px-4 py-2 rounded">
          Success Button
        </button>
      </div>
    </div>
  );
}
