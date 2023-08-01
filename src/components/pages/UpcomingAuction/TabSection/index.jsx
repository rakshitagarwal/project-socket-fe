import React, { useState } from "react";
import TabLinks from "@/components/common/TabLinks/TabLinks";

import { UPCOMING_AUCTION_TABS } from "@/helpers/constants/enum.constants.helper";
import AuctionStart from "./AuctionStart";
import ProductInfo from "./ProductInfo";
import TermsAndConditions from "./TermsAndConditions";

const TabHandler = () => {
  const [activeBtn, setActiveBtn] = useState(UPCOMING_AUCTION_TABS[0].value);

  const activeBtnChangeHandler = (value) => {
    setActiveBtn(value);
  };

  const componentsMap = {
    [UPCOMING_AUCTION_TABS[0].value]: <AuctionStart />,
    [UPCOMING_AUCTION_TABS[1].value]: <TermsAndConditions />,
    [UPCOMING_AUCTION_TABS[2].value]: <ProductInfo />,
  };

  const selectedComponent = componentsMap[activeBtn] || null;

  return (
    <>
      <TabLinks
        tabLinkObject={UPCOMING_AUCTION_TABS}
        activeBtn={activeBtn}
        tabLinksClickHandler={activeBtnChangeHandler}
      />
      {selectedComponent}
    </>
  );
};

export default TabHandler;
