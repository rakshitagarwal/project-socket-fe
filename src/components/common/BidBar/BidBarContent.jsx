import React from "react";
const BidBar = ({ children, navigateFrom }) => {
  return (
    <>
      <div className=" rounded-lg bg-gradient-to-r from-[#0052B4]   to-[#ae96ba] p-[1px]">
        <div className="bg-main-linear-gradient rounded-lg  max-mobile:text-">
          <div className="flex gap-2 justify-between bg-right_table p-4 max-mobile:flex-col">
            <div className="text-md">
              {navigateFrom === "home" ? "CURRENT BID" : "PLAYS PER BID"}
              <div className="text-xl font-bold">
                {navigateFrom === "home" ? "$ 366.84" : "5X"}
              </div>
            </div>
            <div className="text-center m-auto">{children}</div>
            <div className="max-mobile:text-sm align-right ">
              {navigateFrom === "home" ? "Last Bidder" : "REGISTRATION"}
              <div className="text-xl font-bold">
                {" "}
                {navigateFrom === "home" ? "Dhaval " : "500 PLAYS"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-2 text-success font-bold">
        992 PLAYS LEFT
      </div>
    </>
  );
};

export default BidBar;
