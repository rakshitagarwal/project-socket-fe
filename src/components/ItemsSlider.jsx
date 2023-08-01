'use client'
import Slider from "react-slick";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WinnerMessageCard from "./common/Card/MessageCard/WinnerMessageCard/WinnerMessageCard";
import LowBalanceMessageCard from "./common/Card/MessageCard/LowBalanceMessageCard/LowBalanceMessageCard";
import RegisteredMessage from "./common/Card/MessageCard/RegisteredMessage/RegisteredMessage";
import Image from "next/image";
import { useState } from "react";

export default function ItemsSlider({
  data,
  isSlider,
  isBuyNowShow,
  isLowBalance,
  isRegistered,
}) {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  const winnerDetails = {
    winnerName: "Dhaval Halari",
    winningPrice: 200,
    productPrice: 2000,
  };
  return (
    <div className="w-full rounded-lg bg-gradient-to-r from-[#0052B4]  to-[#8726B7] p-[1px] mt-[-20px] max-tablet:mt-4 relative">
      <div className="bg-white rounded-lg {isSlider && max-h-[340px]} h-[350px] w-full max-tablet:h-full">
        {isSlider && (
          <Slider {...sliderSettings} className="rounded-lg">
            {data.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.image}
                  alt="logo"
                  className="object-cover max-h-[340px] w-auto mx-auto "
                  width={340}
                  height={340}
                />
              </div>
            ))}
          </Slider>
        )}
        {!isSlider && (
          <div className="relative overflow-hidden rounded-lg min-h-[100%]">
            <Video
              controls={[]}
              muted
              poster={data.poster}
              className="w-full max-h-[340px] max-tablet:h-[180px]"
            >
              <source src={data.url} type="video/webm" />
            </Video>
          </div>
        )}
        <div>
          {false ? (
            <WinnerMessageCard winnerDetails={winnerDetails} />
          ) : null}
          {isLowBalance ? <LowBalanceMessageCard /> : null}
          {isRegistered ? <RegisteredMessage /> : null}
        </div>
      </div>
    </div>
  );
}
