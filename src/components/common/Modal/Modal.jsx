import React from "react";
import Image from "next/image";
import modalLogo from "@/assets/images/popupLogo.png";
import CloseBtn from "@/assets/icons/closeButton.svg";
import GreenTick from "@/assets/icons/GreenTick.svg";
import RobotIcon from "@/assets/icons/RobotIcon.svg";
const Modal = ({
  children,
  moadalClass = "",
  height,
  width,
  isTickShow,
  isRobotIconShow,
}) => {
  //For homepage redirection

  return (
    <>
      <div
        className="modal-wrapper fixed top-0 bottom-0 left-0 right-0  z-50 flex items-center justify-center bg-[rgba(0,0,0,0.1)]  transition-opacity duration-[250ms] ease-in-out"
        id="modal"
      >
        <div
          className={` max-mobile:max-w-[90%] max-w-[600px]  translate-y-0 transition-opacity duration-[250ms] ease-in-out transform rounded-[20px]  z-[1]  min-h-[200px] max-h-[90%]  bg-white py-[20px] px-[22px] ${moadalClass}  `}
          style={{
            width: `${width ? `${width}px` : "auto"} `,
            height: `${height ? `${height}px` : "auto"} `,
          }}
        >
          <div className="modal-header mt-3 border-b-0 flex items-center justify-center ">
            {isTickShow ? (
              <Image src={GreenTick} className="h-auto w-[60px]" alt="Logo" />
            ) : isRobotIconShow ? (
              <Image src={RobotIcon} className="h-auto w-[70px]" alt="Logo" />
            ) : (
              <Image src={modalLogo} className="h-auto w-[90px]" alt="Logo" />
            )}

            <div
              className="  flex items-center justify-center w-[35px] h-[35px]  border-none cursor-pointer absolute right-[20px] top-[15px] z-50"
              aria-label="close this modal"
            >
              <Image src={CloseBtn} alt="close" className="h-full w-full" />
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
