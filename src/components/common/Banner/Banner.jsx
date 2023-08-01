import React from "react";

const Banner = ({
  title = "Sample Text",
  setIsBuyNowShow = () => {},
  isBuyNowShow,
}) => {
  return (
    <section
      className="justify-evenly flex bg-mainTitle"
      onClick={() => setIsBuyNowShow(!isBuyNowShow)}
    >
      <div className='container flex justify-between'>
        <div className="p-4 pt-2 max-mobile:pt-4 w-full text-right max-mobile:text-left text-3xl max-mobile:text-sm font-bold pr-0">
          {title}
        </div>
      </div>
    </section>
  );
};

export default Banner;
