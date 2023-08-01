"use client";

import Banner from "@/components/common/Banner/Banner";
import Link from "next/link";
import React, { useState } from "react";

const MyAuction = () => {
  const [isBuyNowShow, setIsBuyNowShow] = useState(true);
  const array = {
    Lost: "my-auction",
    Won: "my-auction",
    Ongoing: "live-auction",
    Registered: "upcoming-auction",
  };

  const tableData = [
    {
      product: "Mercedes Benz",
      playConsumed: "500",
      status: "Won",
      winBid: "$10.00",
    },
    {
      product: "Rolls Royce",
      playConsumed: "500",
      status: "Lost",
      winBid: "$10.00",
    },
    {
      product: "iPhone 13 Pro Max ",
      playConsumed: "500",
      status: "Registered",
      winBid: "$10.00",
    },
    {
      product: "Tata Harrier",
      playConsumed: "500",
      status: "Ongoing",
      winBid: "$10.00",
    },
    {
      product: "Apple MacBook M2 ",
      playConsumed: "500",
      status: "Won",
      winBid: "$10.00",
    },
    {
      product: "Mercedes Benz",
      playConsumed: "500",
      status: "Won",
      winBid: "$10.00",
    },
    {
      product: "Rolls Royce",
      playConsumed: "500",
      status: "Lost",
      winBid: "$10.00",
    },
    {
      product: "iPhone 13 Pro Max ",
      playConsumed: "500",
      status: "Registered",
      winBid: "$10.00",
    },
    {
      product: "Tata Harrier",
      playConsumed: "500",
      status: "Ongoing",
      winBid: "$10.00",
    },
    {
      product: "Apple MacBook M2 ",
      playConsumed: "500",
      status: "Won",
      winBid: "$10.00",
    },
    {
      product: "Mercedes Benz",
      playConsumed: "500",
      status: "Won",
      winBid: "$10.00",
    },
    {
      product: "Apple MacBook M2 ",
      playConsumed: "500",
      status: "Won",
      winBid: "$10.00",
    },
  ];
  return (
    <div>
      <Banner
        title="MY AUCTION"
        setIsBuyNowShow={setIsBuyNowShow}
        isBuyNowShow={isBuyNowShow}
      />
      <div className="mx-auto w-[75%]">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden rounded-sm">
                <table class="min-w-full text-center text-sm font-light border border-2 ">
                  <thead class="bg-themeColor font-medium text-white dark:border-primary-500 dark:bg-primary-900">
                    <tr>
                      <TableHead tagName={"Sr .No"} />
                      <TableHead tagName={"Auction Product"} />
                      <TableHead tagName={"Plays Consumed"} />
                      <TableHead tagName={"Status"} />
                      <TableHead tagName={"Winning Bid"} />
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((data, index) => {
                      return (
                        <>
                          <tr class="dark:border-primary-500">
                            <TableData>{index + 1}</TableData>
                            {/* <TableData><Link href={`/my-auction/${index+1}`} className="underline">{data.product}</Link></TableData> */}
                            <TableData>
                              <Link
                                href={`/my-auction/${index + 1}?status=${data.status}`}
                                className="underline"
                              >
                                {data.product}
                              </Link>
                            </TableData>
                            <TableData width={"200px"}>
                              {data.playConsumed}
                            </TableData>
                            <td class="whitespace-nowrap font-bold px-1 py-[6px] border-r">
                              <div
                                className={`p-2 w-[80px] mx-auto text-white rounded-sm ${
                                  data.status === "Won"
                                    ? "bg-green"
                                    : data.status === "Lost"
                                    ? "bg-red"
                                    : data.status === "Ongoing"
                                    ? "bg-primary"
                                    : data.status === "Registered"
                                    ? "bg-yellow"
                                    : "bg-white"
                                }`}
                              >
                                {data.status}
                              </div>
                            </td>
                            <TableData>{data.winBid}</TableData>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAuction;

const TableHead = ({ tagName }) => {
  return (
    <>
      <th scope="col" class=" px-6 py-4 border-r border-5 border-black">
        {tagName}
      </th>
    </>
  );
};

const TableData = ({ children, ...props }) => {
  return (
    <>
      <td
        class="whitespace-nowrap font-bold px-2 py-1 border-5 border-r"
        {...props}
      >
        {children}
      </td>
    </>
  );
};
