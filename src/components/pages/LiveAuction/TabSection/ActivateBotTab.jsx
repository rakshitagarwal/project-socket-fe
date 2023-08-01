import React from "react";
import Card from "@/components/common/Card/Card";
import questionMarkIcon from "@/assets/icons/questionMark.svg";
import Image from "next/image";
const ActivateBotTab = ({ setIsModalVisible }) => {
  return (
    <Card>
      <div className=" px-[15px]  pr-[10px] w-100 flex items-center flex-col">
        <h5 className="text-xl py-[12px] font-bold text-center w-[300px]   mx-auto max-mobile:w-[250px] max-mobile:text-md ">
          Let the BidBot bid for you while you are away. BidBot will never let
          you lose!
        </h5>
        <form
          className="text-center"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="my-[20px]">
            <input
              type="text"
              className="rounded-lg w-[160.5px] h-[44.07px] px-3 mx-1 border border-[#162459]  text-sm bg-transparent text-black max-mobile:w-[110px]"
              placeholder="Enter Bid Numbers*"
              style={{ outline: "none" }}
            />
            <input
              type="text"
              className="rounded-lg w-[160.5px] h-[44.07px]  px-3 mx-1  border border-[#162459] text-sm  bg-transparent text-black max-mobile:w-[110px]"
              placeholder="Place Bids Till"
              style={{ outline: "none" }}
            />
            <Image
              src={questionMarkIcon}
              alt="questionMarkIcon"
              className="text-white inline h-[20px] w-[20px] aspect-square cursor-pointer"
            />
          </div>
          <button
            className="bg-blue text-white text-md p-[12px] font-bold rounded-full w-[200px] "
            onClick={() => setIsModalVisible(true)}
          >
            Activate Bid Bot
          </button>
        </form>
      </div>
    </Card>
  );
};

export default ActivateBotTab;
