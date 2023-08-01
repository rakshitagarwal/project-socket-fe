"use client";

import { useEffect, useState } from "react";

import ItemsSlider from "@/components/ItemsSlider";
import EndBar from "@/components/common/EndBar/EndBar";
import TabHandler from "@/components/pages/UpcomingAuction/TabSection";
import MessageTextCard from "@/components/common/Card/MessageCard/TextCard/MessageTextCard";
import BidBarContainer from "@/components/common/BidBar/BidBarContainer";

export default function UpcomingAuctionPage() {
  const [countDown, setCountDown] = useState(10);

  const [isRegistered, setRegistered] = useState(false);

  const isSlider = false;
  const sliderData = {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster: "https://picsum.photos/500/300",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDown - 1);
    }, 1000);
    if (countDown < 0) {
      setCountDown(10);
    }
    return () => clearInterval(interval);
  }, [countDown]);

  return (
    <>
      {/* <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> */}
      {/* title */}
      <section className="justify-evenly flex bg-mainTitle">
        <div className="container flex justify-between ">
          <div className="p-4 pt-2 max-mobile:pt-4 w-full text-right max-mobile:text-left text-3xl max-mobile:text-sm font-bold pr-0">
            iPhone 14 Pro Max 1 TB | $2,000.00 | 1x
          </div>
        </div>
      </section>

      {/* main */}
      <main className="flex justify-evenly">
        <div className="container flex gap-6 justify-evenly  max-tablet:block ">
          <div className=" max-tablet:w-full w-1/2 p-2 pt-0 rounded-lg">
            <ItemsSlider
              data={sliderData}
              isSlider={isSlider}
              isRegistered={isRegistered}
            />

            <MessageTextCard
              applyPrimaryColor={true}
              message={"iPhone 14 Pro Max 1 TB | $2,000.00"}
            />

            {/* Timer Section */}
            <BidBarContainer
              isBuyNowShow={true}
              isRegistered={isRegistered}
              navigateFrom="upcomingAuction"
              setRegistered={(value) => setRegistered(value)}
            />
          </div>

          <div className="max-tablet:w-full  w-1/2 pl-4 max-tablet:pl-0 max-tablet:mt-8">
            <TabHandler />
            <div className="pt-[4.5rem]">
              <EndBar />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
