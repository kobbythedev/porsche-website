import React from "react";
import cardComponent from "@/CTA-cards/cardComponent";

const CTA = () => {
  return (
    <>
      <div className="h-[70vh] w-full relative text-white">
        <div className="flex flex-row h-full w-full gap-8 pl-8 pr-8 max-md:flex-col max-sm:flex-col">
          <div className="h-[60%] max-md:h-[40%] w-auto flex-1 flex-wrap mt-auto mb-auto bg-emerald-500  relative flex-grow flex-shrink"></div>
          <div className="h-[60%] w-auto flex-1 flex-wrap mt-auto mb-auto bg-red-600  relative flex-grow flex-shrink"></div>
          <div className="h-[60%] w-auto flex-1 flex-wrap mt-auto mb-auto bg-amber-600  relative flex-grow flex-shrink"></div>
        </div>
      </div>
    </>
  );
};

export default CTA;
