import React from "react";
import whatsapp from "@/assets/images/whatsapp-icon.png";
import Image from "next/image";

const EndBar = ({
  children,
  isRegistraionMode,
  content = { left: "left", right: "right" },
}) => {
  return (
    <>
      <div className=" rounded-lg bg-gradient-to-r from-[#0052B4]   to-[#ae96ba] p-[1px]">
        <div className="bg-main-linear-gradient rounded-lg">
          <div className="flex gap-2 justify-between py-[9px] px-4 items-center">
            <div className="text-md w-1/2">
              <div className="font-bold">CURRENT REGISTRATIONS</div>
              <div className="bg-[#d7e7fa] w-[100%] h-[5px] my-[6px] rounded-sm">
                <div className="bg-themeColor w-[80%] h-[5px] rounded-sm transition-all duration-100 "></div>
              </div>
              <div className="font-bold">1685 of 2000 Registered</div>
            </div>
            <div>
              <Image src={whatsapp} alt="whatsapp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EndBar;
