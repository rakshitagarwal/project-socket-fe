import React from "react";
import { Button } from "../../../../forms/Button";

const LowBalanceMessageCard = () => {
  return (
    <div className="w-full h-1/3  absolute bg-[rgba(0,0,0,0.7)] left-0 right-0 bottom-0 rounded-b-lg">
      <div className="flex justify-center gap-10  items-center   h-full text-white">
        <h5 className="text-xl font-black">Low Wallet Balance</h5>
        <Button
          state="active"
          text="BUY PLAYS"
          className="text-md font-black"
        />
      </div>
    </div>
  );
};

export default LowBalanceMessageCard;
