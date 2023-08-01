import React from "react";
import Modal from "./Modal";
import BidPlayForm from "../../forms/BidPlayForm";

const BuyPlays = ({ setVisible }) => {
  return (
    <div>
      <Modal moadalClass="w-[525px] h-[335px]">
        <BidPlayForm setVisible={setVisible} />
      </Modal>
    </div>
  );
};

export default BuyPlays;
