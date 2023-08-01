import React from "react";

const RegisteredMessage = () => {
  return (
    <div className="w-full h-1/3 absolute bg-[rgba(0,0,0,0.7)] left-0 right-0 bottom-0 rounded-b-lg">
      <div className="flex justify-center flex-col   items-center   h-full text-white">
        <h5 className="text-xl font-bold">YOU ARE</h5>
        <h5 className="text-3xl font-bold"> REGISTERED</h5>
      </div>
    </div>
  );
};

export default RegisteredMessage;
