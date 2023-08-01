"use client";

import { useState } from "react";

import HomeTabSection from "@/components/pages/LiveAuction/TabSection/HomeTabSection";
import AvatarList from "@/components/pages/LiveAuction/AvatarList";
import BidBarContainer from "@/components/common/BidBar/BidBarContainer";
import Banner from "@/components/common/Banner/Banner";
import mobile from "@/assets/images/mobile.png";
import ItemsSlider from "@/components/ItemsSlider";
import BuyNow from "@/components/pages/LiveAuction/BuyNow";
import MessageTextCard from "@/components/common/Card/MessageCard/TextCard/MessageTextCard";
import TabHandler from "@/components/pages/MyAuctionTab/TabSection";
import { useSearchParams } from 'next/navigation'

export default function LiveAuctionPage() {
  const [isBuyNowShow, setIsBuyNowShow] = useState(false);
  const [isLowBalance, setIsLowBalance] = useState(false);
  const isSlider = true;
  const searchParams = useSearchParams()
  const search = searchParams.get('status')

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
              isBuyNowShow={true}
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
              navigateFrom="auctiontable"
              search={search}
            />
          </div>

          <div className="max-tablet:w-full  w-1/2 pl-4 max-tablet:pl-0 max-tablet:mt-8">
            {isBuyNowShow ? (
              <BuyNow />
            ) : (
              <>
                {/* Tablinks Section */}
                <TabHandler />
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
