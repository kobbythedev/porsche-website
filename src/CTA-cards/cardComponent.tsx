import React from "react";

const cardComponent = ({ title, img }) => {
  const ctaCard = [];

  return (
    <>
      <div className="h-[70vh] w-full relative text-white">
        <div className="flex flex-row h-full w-full gap-8 pl-8 pr-8 max-md:flex-col max-sm:flex-col">
          <div className="h-[60%] w-auto flex-1 flex-wrap mt-auto mb-auto relative flex-grow flex-shrink"></div>
        </div>
      </div>
    </>
  );
};

export default cardComponent;
