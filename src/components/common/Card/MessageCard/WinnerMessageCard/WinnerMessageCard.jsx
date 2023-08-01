import React from "react";

const WinnerMessageCard = ({ winnerDetails = {} }) => {
  return (
    <div className="w-full h-full absolute bg-[rgba(0,0,0,0.7)] left-0 right-0 top-0 rounded-lg">
      <div className="flex justify-end mt-[-50px] items-center  flex-col h-full text-white">
        <p className="text-2xl font-bold mb-[22px]">Auction Ended</p>
        <p className="text-2xl font-bold mb-[7px] ">Congratulations 🎉</p>
        <p className="text-md font-bold mb-[22px]">
          Winner: {winnerDetails.winnerName}
        </p>
        <p className="text-2xl font-bold">
          Winning Price: ${winnerDetails.winningPrice}
        </p>
        <p className="text-sm font-bold">
          Saving of ${winnerDetails.productPrice - winnerDetails.winningPrice}
        </p>
      </div>
    </div>
  );
};

export default WinnerMessageCard;
