import React from "react";

const MessageTextCard = ({ message = "sample Text", applyPrimaryColor }) => {
  return (
    <div className=" flex gap-2 mt-2">
      <div
        className=" bg-primary text-white text-center w-[30px] h-[30px] rounded-full cursor-pointer text-2xl"
        // onClick={() => gotoPrev()}
      >
        &laquo;
      </div>
      <div
        className={`${
          applyPrimaryColor ? "bg-primary text-white" : "bg-yellow text-black"
        } flex font-bold grow items-center justify-center mt-[-8px] p-1 text-lg `}
      >
        {message}
      </div>
      <div
        className="bg-primary text-white text-center w-[30px] h-[30px] rounded-full cursor-pointer  text-2xl"
        // onClick={() => gotoNext()}
      >
        &raquo;
      </div>
    </div>
  );
};

export default MessageTextCard;
