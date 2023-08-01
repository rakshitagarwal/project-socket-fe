import React from "react";
import Modal from "./Modal";

const DeactiveBidBot = ({ setIsModalVisible }) => {
  return (
    <Modal width={500} height={230} isRobotIconShow>
      <div className="modalWrapper  flex justify-center items-center gap-4 mt-12 z-10">
        <button
          className=" bg-red modal-btn-1  w-[200px] h-[60px]  text-white text-lg max-mobile:text-lg max-mobile:w-[220px] max-mobile:h-[60px] font-bold rounded-lg "
          style={{
            outline: "none",
          }}
          onClick={() => setIsModalVisible(false)}
        >
          Deactivate Bid Bot
        </button>
        <button
          className=" bg-[#f4f4f4] modal-btn-1  w-[200px] h-[60px]  text-[#25292E] text-lg max-mobile:text-lg max-mobile:w-[220px] max-mobile:h-[60px] font-bold rounded-lg "
          style={{
            outline: "none",
          }}
          onClick={() => setIsModalVisible(false)}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default DeactiveBidBot;
