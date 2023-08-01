import React from "react";
import Card from "../../Card";
import Style from "./cardStyle.module.css";

const TextCard = ({ title = "", body = "" }) => {
  return (
    <Card cardClass={`overflow-x-scroll ${Style.scrollbar_hidden}`}>
      <div className=" pl-[15px]  pr-[10px] ">
        <h5 className="text-3xl py-[12px] font-bold max-mobile:text-xl">
          {title}
        </h5>
        <p className="text-md text-[#4b4b4b]">{body}</p>
      </div>
    </Card>
  );
};

export default TextCard;
