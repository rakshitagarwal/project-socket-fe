'use client'
import React, { useState } from "react";
import TabLinks from "@/components/common/TabLinks/TabLinks";
import { HOME_TABS } from "@/helpers/constants/enum.constants.helper";
import TextCard from "@/components/common/Card/MessageCard/TextCard/TextCard";
import RecentBidsList from "./RecentBidsList";
import ActivateBotTab from "./ActivateBotTab";
import DeactiveBidBot from "@/components/common/Modal/DeactiveBidBot";
import BidPlayForm from "@/components/forms/BidPlayForm";

//TODO remove when data come from backend
const DumyData = {
  title: "iPhone 14 Pro Max 1 TB | $2,000.00 | 1x",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null apariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.",
};

const HomeTabSection = () => {
  const [activeBtn, setActiveBtn] = useState(HOME_TABS[0].value);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const activeBtnChangeHandler = (value) => {
    setActiveBtn(value);
  };

  return (
    <>
      {isModalVisible && (
        <>
          <div className="fixed w-full h-full backdrop-blur-[2px]  bg-[rgba(0,0,0,0.2)]  top-0 left-0 right-0 bottom-0 "></div>
          <DeactiveBidBot setIsModalVisible={setIsModalVisible} />
        </>
      )}
      <TabLinks
        tabLinkObject={HOME_TABS}
        activeBtn={activeBtn}
        tabLinksClickHandler={activeBtnChangeHandler}
      />
      {activeBtn === HOME_TABS[0].value ? <RecentBidsList /> : null}
      {activeBtn === HOME_TABS[1].value ? <BidPlayForm /> : null}
      {activeBtn === HOME_TABS[2].value ? (
        <ActivateBotTab setIsModalVisible={setIsModalVisible} />
      ) : null}
      {activeBtn === HOME_TABS[3].value ? (
        // TODO Remove default title and body when data come from backend
        <TextCard title={DumyData.title} body={DumyData.body} />
      ) : null}
    </>
  );
};

export default HomeTabSection;
