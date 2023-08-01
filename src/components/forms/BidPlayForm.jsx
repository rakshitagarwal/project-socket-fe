import React from "react";
import InputField from "./InputField";
import { Button } from "./Button";

const BidPlayForm = ({ setVisible = () => {} }) => {
  return (
    <div className="modalWrapper  flex justify-center items-center flex-col ">
      <h3 className="modal-heading-1 my-[15px] text-black text-xl text-center  w-[55%] max-mobile:w-full">
        <strong>Buy Plays using $BIG Tokens and get 10% Free PLAYS</strong>
      </h3>
      <form
        className="flex flex-col items-center gap-[10px]  "
        onSubmit={(e) => {
          e.preventDefault();
          setVisible(4);
        }}
      >
        <InputField
          type="text"
          className="inputTabs rounded-lg  w-[182px] h-[35px] bg-gray-13 px-3 text-sm"
          placeholder="Enter Number of PLAYS*"
        />
        <InputField
          isDropdown
          className="dropdown h-41  rounded-lg  w-[182px] h-[35px] bg-gray-13 px-3 text-sm"
        />
        <div className="relative">
          <InputField
            type="text"
            className="inputTabs  rounded-lg w-[182px] h-[35px] bg-gray-13 px-3 text-sm"
            placeholder="Amount to be Paid"
          />
          <div className="absolute top-2 -right-[4.8rem] text-xs font-medium text-gray-1">
            <p>USDT</p>
            <p>(1 PLAY = $0.1)</p>
          </div>
        </div>

        <Button
          rounded
          text="Submit"
          className="w-[182px] h-[35px] text-md font-bold"
        />
      </form>
    </div>
  );
};

export default BidPlayForm;
