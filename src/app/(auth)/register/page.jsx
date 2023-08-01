"use client";

import Logo from "@/assets/images/thebigdeal-logo.png";
import InputField from "@/components/forms/InputField";

import { ROUTES_PATH, VALIDATEMESSAGE } from "@/helpers/constants/constants.helper";
import { ERROR, SUCCESS } from "@/helpers/constants/labels.constants";
import { userRegister } from "@/redux/user/user.thunk";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { emailValidation } from "@/helpers/utils.helper";
import toast, { Toaster } from "react-hot-toast";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  //name spliting function
  function nameSplitter(name) {
    const nameArr = name.split(" ");
    const lastNameArr = name.split(" ");
    lastNameArr.shift();
    return {
      firstName: nameArr[0],
      lastName: lastNameArr.join(" "),
    };
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "") {
      toast.error(VALIDATEMESSAGE.EMPTYEMAIL);
      return false;
    }
    if (!emailValidation(email)) {
      toast.error(VALIDATEMESSAGE.INVALID);
      return false;
    }
    if (!emailValidation(email)) {
      toast.error("Invalid email !");
      return false;
    }
    const namesFirstandLast = nameSplitter(name);
   
    dispatch(
      userRegister({
        first_name: namesFirstandLast.firstName,
        last_name: namesFirstandLast.lastName,
        country: "India",
        email: email,

        cb: (status, data) => {
          if (status === SUCCESS) {
            toast.success(data.message);
            router.push("/login");
          } else {
            toast.error(data.message);
          }
        },
      })
    );
  };

  return (
    <section className="text-gray-600 body-font container mx-auto flex flex-wrap items-center h-[100vh]">
      <Toaster />
      <div className="w-1/2 flex justify-center items-center flex-col max-tablet:w-full h-full">
        <Image
          alt="logo"
          src={Logo}
          height="150"
          width="150"
          className="text-center mx-auto mb-5 hidden max-tablet:block "
        />
        <h2 className="text-gray-900 title-font mb-5 mx-auto text-3xl font-black">
          Sign Up
        </h2>
        <div className="relative mb-4 w-[280px] max-w-[100%]">
          <form onSubmit={handleSubmit}>
            <InputField
              id="name"
              name="name"
              autoComplete="name"
              className="w-full rounded-xl border focus:border-indigo-800 focus: text-base outline-none   py-1 px-3 leading-8  duration-200 ease-in-out mb-3 mx-auto border-purple-900 text-gray font-bold"
              placeholder="Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <InputField
              id="email"
              name="email"
              autoComplete="email"
              className="w-full rounded-xl border focus:border-indigo-800 focus: text-base outline-none py-1 px-3 leading-8  duration-200 ease-in-out mb-3 mx-auto border-purple-900 text-gray font-bold"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="text-white bg-indigo-500 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg w-full mx-auto rounded-full font-medium bg-themeColor h-[45px]">
              Sign Up for free
            </button>
          </form>
        </div>
        <Link
          href={ROUTES_PATH.LOGIN}
          className="mx-auto font-bold text-xl text-themeColor"
        >
          Login
        </Link>
      </div>
      <div className="w-1/2 flex justify-center items-center max-tablet:hidden">
        <Image src={Logo} height="400" width="400" alt="logo" />
      </div>
    </section>
  );
}

export default Registration;
