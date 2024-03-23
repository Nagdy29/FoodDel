import React from "react";
import { assets } from "../../assets/assets";
const AppDown = () => {
  return (
    <>
      <div className="my-9">
        <div className="flex justify-center text-[25px] font-bold">
          <h2>For Better Experience Download Tomato App</h2>
        </div>
        <div className="mx-5 flex flex-col md:flex-row justify-center gap-3 my-5 cursor-pointer shadow-emerald-50">
          <img src={assets.play_store} alt="" />
          <img src={assets.app_store} alt="" />
        </div>
      </div>
    </>
  );
};

export default AppDown;
