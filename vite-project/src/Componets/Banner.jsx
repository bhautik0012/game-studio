import React, { useEffect } from "react";

function Banner({ gameBanner }) {
  useEffect(() => {
    
  }, []);
  return (
    <div className="relative ">
      <div className="absolute bottom-0 w-full p-5 bg-gradiant-to-t from-slate-900 to-transparent">
        <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
        <button className="p-1 px-2 text-white transition-all duration-300 ease-in-out bg-blue-700 rounded-lg hover:scale-110">Get Now</button>
      </div>
      <img
        src={gameBanner.background_image}
        className="md:h-[320px] w-full object-cover rounded-xl"
      />
    </div>
  );
}

export default Banner;
