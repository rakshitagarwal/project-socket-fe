"use client";
import Logo from "@/assets/images/mainLogo.png";
import Image from "next/image";
import { ROUTES_PATH } from "@/helpers/constants/constants.helper";
import Link from "next/link";
import { redirect } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

function HomeDashboard() {
  // signOut("/login");
  const { data: session, status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return <></>;
  }
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <div
        className="h-full border-t-1 border-b-1 border-gray-200
    border-opacity-1 bg-headerBg	
    overflow-hidden"
      >
        <div
          className="p-2 hover:bg-green-600
         transition text-center	
        duration-300 ease-in"
        >
          <h1 className="text-3xl font-bold mb-3">Home</h1>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Image
          src={Logo}
          alt="Your Image"
          className="max-w-xs h-auto md:max-w-sm lg:max-w-md xl:max-w-lg"
        />
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link
          href={ROUTES_PATH.HOME}
          className="text-white hover:text-offWhite ease-linear cursor-pointer duration-300 max-tablet:block max-tablet:p-2"
        >
          <button className="bg-themeColor  py-3 px-6 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Go to Ongoing Auctions
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeDashboard;
