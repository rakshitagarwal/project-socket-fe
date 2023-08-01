import React from "react";
import avatar from "@/assets/images/avatar.png";
import Image from "next/image";

const AvtarList = () => {
  return (
    <>
      <div className="text-lg font-[700] pt-6 pb-4">Bidders in the auction</div>
      <div className="grid grid-cols-12 gap-2 border border-1 p-4 rounded-lg border-[#243c5a] bg-main-linear-gradient rounded-lg">
        {Array.from({ length: 36 }, (_, index) => index + 1).map(
          (item, index) => (
            <span key={index} className=" items-center">
              <Image
                src={avatar}
                className="aspect-square "
                alt="avatar"
                width={30}
                height={30}
              />
            </span>
          )
        )}
      </div>
    </>
  );
};

export default AvtarList;
