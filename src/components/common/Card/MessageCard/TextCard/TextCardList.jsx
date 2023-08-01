import React from "react";
import Card from "../../Card";

const MessageCardList = ({ List = [] }) => {
  return (
    <Card cardClass="h-[265px]">
      <div className="pl-[26px] pt-[14px]">
        {List.length
          ? List.map((data, index) => (
              <div key={index}>
                <h5 className="text-2xl font-black mb-[8px] max-mobile:text-xl">
                  {data.HEADING}
                </h5>
                <p className="text-md text-[#4b4b4b] mb-[12px] ">
                  {data.PARAGRAPH}
                </p>
              </div>
            ))
          : null}
      </div>
    </Card>
  );
};

export default MessageCardList;
