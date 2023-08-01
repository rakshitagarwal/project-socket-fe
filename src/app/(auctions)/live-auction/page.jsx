"use client";

import { useEffect, useState } from "react";

import HomeTabSection from "@/components/pages/LiveAuction/TabSection/HomeTabSection";
import AvatarList from "@/components/pages/LiveAuction/AvatarList";
import BidBarContainer from "@/components/common/BidBar/BidBarContainer";
import Banner from "@/components/common/Banner/Banner";
import mobile from "@/assets/images/mobile.png";
import ItemsSlider from "@/components/ItemsSlider";
import BuyNow from "@/components/pages/LiveAuction/BuyNow";
import MessageTextCard from "@/components/common/Card/MessageCard/TextCard/MessageTextCard";
import socket from "@/helpers/socket";

export default function LiveAuctionPage() {
  const [isBuyNowShow, setIsBuyNowShow] = useState(false);
  const [isLowBalance, setIsLowBalance] = useState(false);
  const isSlider = true;

  const sliderData = [
    {
      image: mobile,
    },
    {
      image: mobile,
    },
    {
      image: mobile,
    },
    {
      image: mobile,
    },
    {
      image: mobile,
    },
  ];
  useEffect(() => {
    socket.init();
    setTimeout(() => {
      socket.emit("health", { message: "socket testing" });
    }, 1000);
  }, []);
  socket.on("healthResponse", async (data) => {
    console.log(data, "=================>");
  });
  return (
    <>
      <Banner
        title=" iPhone 14 Pro Max 1 TB | $2,000.00 | 1x"
        setIsBuyNowShow={setIsBuyNowShow}
        isBuyNowShow={isBuyNowShow}
      />

      <main className="flex justify-evenly">
        <div className="container flex gap-6 justify-evenly  max-tablet:block ">
          <div className=" max-tablet:w-full w-1/2 p-2 pt-0 rounded-lg">
            <ItemsSlider
              data={sliderData}
              isSlider={isSlider}
              isBuyNowShow={isBuyNowShow}
              isLowBalance={isLowBalance}
            />
            <MessageTextCard
              message={
                isBuyNowShow
                  ? "Next Auction Starts: 02:10:00"
                  : "No New Bidders After $800.00"
              }
            />
            {/* Timer Section */}
            <BidBarContainer
              isBuyNowShow={isBuyNowShow}
              setIsLowBalance={setIsLowBalance}
              navigateFrom="home"
            />
          </div>

          <div className="max-tablet:w-full  w-1/2 pl-4 max-tablet:pl-0 max-tablet:mt-8">
            {isBuyNowShow ? (
              <BuyNow />
            ) : (
              <>
                {/* Tablinks Section */}
                <HomeTabSection />
                {/* Bidder List Section */}
                <AvatarList />
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
