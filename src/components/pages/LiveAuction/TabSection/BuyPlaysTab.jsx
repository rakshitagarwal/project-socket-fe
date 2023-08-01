import React from "react";
import Card from "@/components/common/Card/Card";

const BuyPlaysTab = () => {
  return (
    <Card>
      <div className="modalWrapper  flex justify-center items-center flex-col ">
        <h3 className="modal-heading-1 my-[15px] text-black text-xl text-center  w-[300px]  mx-auto max-mobile:w-[250px] max-mobile:text-md">
          <strong>Buy Plays using $BIG Tokens and get 10% Free PLAYS</strong>
        </h3>

        <form
          className="flex flex-col items-center gap-[10px]  "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="inputTabs rounded-lg  w-[182px] h-[35px] bg-gray-13 px-3 text-sm"
            placeholder="Enter Number of PLAYS*"
            style={{ border: "1px solid #162459", outline: "none" }}
          />
          <select
            className="dropdown h-41  rounded-lg  w-[182px] h-[35px] bg-gray-13 px-3 text-sm"
            style={{ border: "1px solid #162459", outline: "none" }}
          >
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input
            type="text"
            className="inputTabs  rounded-lg w-[182px] h-[35px] bg-gray-13 px-3 text-sm"
            placeholder="Amount to be Paid"
            style={{ border: "1px solid #162459", outline: "none" }}
          />
          <button className=" bg-blue text-white  rounded-full w-[182px] h-[35px] text-md font-bold">
            Submit
          </button>
        </form>
      </div>
    </Card>
  );
};

export default BuyPlaysTab;
