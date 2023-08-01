import React from "react";
import { Button } from "@/components/forms/Button";
import TextCardList from "@/components/common/Card/MessageCard/TextCard/TextCardList";

//Temporary static variables defined
const List = [
  { HEADING: "Product Cost", PARAGRAPH: "$2000" },
  { HEADING: "No. of Bids Placed", PARAGRAPH: "300" },
  { HEADING: "Get Now Price", PARAGRAPH: "$1600" },
];  

const BuyNow = () => {
  return (
    <div>
      <div className="mt-[30px]">
        <TextCardList List={List} />
        <div className="mt-[25px] ml-[25px] flex gap-[10px]">
          <Button
            text="Proceed to Buy "
            className="p-5 max-mobile:w-auto"
            state="active"
          />

          <Button
            text="Cancel"
            className="p-5 max-mobile:w-auto bg-light-gray text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
