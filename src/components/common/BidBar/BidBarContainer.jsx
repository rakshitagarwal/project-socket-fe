import React from "react";
import BidBar from "./BidBarContent";
import TimerWheel from "@/components/common/TimerWheel/TimerWheel";
import { useTimerHooks } from "@/hooks/useTimerHooks";

const BidBarContainer = ({
  isBuyNowShow,
  setIsLowBalance,
  isRegistered,
  navigateFrom,
  setRegistered,
  search,
}) => {
  //Bid timer hooks
  const { countDown, setCountDown } = useTimerHooks();

  //Bid timer click handler
  const handleBidClick = () => {
    setCountDown(10);
  };
  return (
    <div className="mt-8">
      {/* Bid bar component with having children as timerwheel element */}
      <BidBar
        isRegistraionMode={false}
        content={{ left: "$ 321.7", right: "PIYUSH" }}
        setIsLowBalance={setIsLowBalance}
        navigateFrom={navigateFrom}
      >
        {/* Display the bid wheel with timer */}
        <TimerWheel
          handleClickOnWheel={handleBidClick}
          countDown={countDown}
          isBuyNowShow={isBuyNowShow}
          isRegistered={isRegistered}
          search={search}
          navigateFrom={navigateFrom}
          setRegistered={(value) => setRegistered(value)}
        />
      </BidBar>
    </div>
  );
};

export default BidBarContainer;
