import React from "react";
import Card from "@/components/common/Card/Card";
import avatar from "@/assets/images/avatar.png";
import Image from "next/image";

const MyAuctionRecentBids = () => (
  <Card>
  <div className="bg-right_table">
    <div className={`  w-full back p-2`}>
      <table className="w-full ">
        <thead>
          <tr>
            <th>Bid</th>
            <th>User</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <tr key={index} className="text-center text-sm">
              <td>$705.95</td>
              <td>
                <div className="flex justify-center">
                  <Image src={avatar} alt="avatar" height={20} width={20} />
                  <span className="ml-2">User 1</span>
                </div>
              </td>
              <td>time</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-xs font-bold text-center pt-2">
        <p>Show more...</p>
      </div>
    </div>
  </div>
</Card>
);

export default MyAuctionRecentBids;
