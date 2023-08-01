import React from "react";
import TextCardList from "@/components/common/Card/MessageCard/TextCard/TextCardList";

//Temporary static variables defined
const List = [
  { HEADING: "Product Cost", PARAGRAPH: "$2000" },
  { HEADING: "No. of Bids Placed", PARAGRAPH: "300" },
  { HEADING: "Get Now Price", PARAGRAPH: "$1600" },
];

const WinningInfo = () => {
  return (
    <div>
      <div>
        <TextCardList List={List} />
      </div>
    </div>
  );
};

export default WinningInfo;
