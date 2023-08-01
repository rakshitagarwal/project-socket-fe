import React from "react";
import Card from "@/components/common/Card/Card";

const AuctionStart = () => (
  <Card>
    <div className="p-4">
      <h2 className="font-bold text-3xl">Registration Cost</h2>
      <p className="text-grey text-xl font-semibold mb-5">500 PLAYS</p>

      <h2 className="font-bold text-3xl">Auction Start</h2>
      <p className="text-grey text-xl font-semibold">At 2000 registrations</p>

      <h2 className="font-bold text-3xl mt-4">End Date for Registration</h2>
      <p className="text-grey text-xl font-semibold">25 July 2023</p>
    </div>
  </Card>
);

export default AuctionStart;
