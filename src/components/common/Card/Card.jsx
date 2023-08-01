import React from "react";

const Card = ({ children = "Sample Text", cardClass = "" }) => {
  return (
    <div
      className={` rounded-lg bg-gradient-to-r from-[#0052B4]   to-[#8726B7] p-[1px]  `}
    >
      <div className={`bg-tableContainer bg-main-linear-gradient rounded-lg ${cardClass} p-2`}>
        <div className="h-[250px]  max-h-[250px] overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Card;
