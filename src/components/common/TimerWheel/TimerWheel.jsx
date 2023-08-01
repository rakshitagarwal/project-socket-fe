import React from "react";
import GetNow from "@/assets/images/GetNow.png";
import RegisterWheel from "@/assets/images/register.png";
import buyNow from "@/assets/images/buyNow.png";
import RegisteredWheel from "@/assets/images/registerd.png";
import claim from "@/assets/images/claim.png";
import Image from "next/image";

const TimerWheel = ({
  handleClickOnWheel = () => {},
  countDown = 10,
  isBuyNowShow,
  isRegistered,
  navigateFrom,
  setRegistered,
  search,
}) => {
  console.log(search === "won","timer")
  return (
    <>
      {true ? (
        <Image
          src={
               search === "Lost"
              ? buyNow
              : search === "Won"
              ?GetNow:
              search==='Ongoing'?
              RegisterWheel
              :RegisteredWheel
          }
          onClick={() =>
            isRegistered !== undefined && setRegistered(!isRegistered)
          }
          alt=""
          width={135}
          height={130}
          className={`max-mobile:block max-mobile:relative max-mobile:mt-0  max-mobile:ml-0 auction-action-circle  bg-transparent absolute   mt-[-65px] ml-[-75px] m-auto  countdown-image-${countDown} ${
            true ? "bid-button-disabled" : ""
          }`}
        />
      ) : (
        <div
          onClick={handleClickOnWheel}
          className={`max-mobile:block max-mobile:relative max-mobile:mt-0  max-mobile:ml-0 auction-action-circle countdown-image bg-transparent absolute h-[130px] w-[130px] mt-[-65px] ml-[-75px] m-auto  countdown-image-${countDown} ${
            true ? "bid-button-disabled" : ""
          }`}
        >
          <span className="counter-number text-blue-color">{countDown}</span>
        </div>
      )}
    </>
  );
};

export default TimerWheel;
