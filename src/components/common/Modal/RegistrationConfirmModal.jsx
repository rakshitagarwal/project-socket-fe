import React from "react";
import Modal from "./Modal";

const RegistrationConfirmModal = ({ setVisible }) => {
  return (
    <div>
      <Modal width={555} height={331}>
        <div className="modalWrapper  flex justify-center items-center flex-col ">
          <h4 className="modal-info w-[245px]  mx-auto my-[15px] text-xl max-mobile:text-xl max-mobile:w-full text-black text-center font-bold">
            This auction is only for registered Bidders
          </h4>
          <h3 className="modal-heading-1  text-black text-xl text-center mb-1 max-mobile:text-xl">
            <strong>REGISTRATION AMOUNT: 100 PLAYS</strong>
          </h3>
          <p className="modal-para-1 text-center  text-sm text-gray max-mobile:text-sm mb-2">
            100 PLAYS will be deducted from your wallet balance
          </p>
          <button
            className=" bg-green modal-btn-1 mb-4  w-[213px] h-[60px] mt-3 text-white text-lg max-mobile:text-lg max-mobile:w-[220px] max-mobile:h-[60px] font-bold rounded-lg "
            style={{ outline: "none" }}
            onClick={() => setVisible(2)}
          >
            CONFIRM
          </button>
          <p className=" text-gray hover:text-red cursor-pointer text-sm text-center max-mobile:text-sm">
            I don’t want to win The Mercedes Benz
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default RegistrationConfirmModal;
