import React, { useState } from "react";
import TabLinks from "@/components/common/TabLinks/TabLinks";

import { MY_AUCTION_TABS } from "@/helpers/constants/enum.constants.helper";
import MyAuctionProductInfo from "./MyAuctionProductInfo";
import WinningInfo from "./WinningInfo";
import MyAuctionRecentBids from "./MyAuctionRecentBids";

const TabHandler = () => {
  const [activeBtn, setActiveBtn] = useState(MY_AUCTION_TABS[0].value);

  const activeBtnChangeHandler = (value) => {
    setActiveBtn(value);
  };

  const componentsMap = {
    [MY_AUCTION_TABS[0].value]: <MyAuctionRecentBids />,
    [MY_AUCTION_TABS[1].value]: <WinningInfo />,
    [MY_AUCTION_TABS[2].value]: <MyAuctionProductInfo />,
  };

  const selectedComponent = componentsMap[activeBtn] || null;
  return (
    <>
      <TabLinks
        tabLinkObject={MY_AUCTION_TABS}
        activeBtn={activeBtn}
        tabLinksClickHandler={activeBtnChangeHandler}
      />
      {selectedComponent}
    </>
  );
};

export default TabHandler;
