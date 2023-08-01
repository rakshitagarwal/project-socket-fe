import Modal from "./Modal";

const PaymentConfirm = ({ setVisible }) => {
  return (
    <div>
      <Modal width={555} height={331} isTickShow>
        <div className="modalWrapper  flex justify-center items-center mt-5 flex-col ">
          <h3 className="modal-heading-1  text-black text-xl text-center mb-1 max-mobile:text-xl">
            <strong>Congratulations 🎉</strong>
          </h3>
          <h3 className="modal-heading-1  text-black text-xl text-center  max-mobile:text-xl">
            <strong>Your Payment has been confirmed</strong>
          </h3>
          <div className="flex  justify-center items-start mt-4  gap-3">
            <div className="flex flex-col font-bold text-lg">
              <span>Transaction Hash:</span> <span>PLAYS Credited:</span>
            </div>
            <div className="flex flex-col text-lg text-gray-1">
              <span>0x0008c5752257...</span>
              <span>100,000</span>
            </div>
          </div>
          <button
            className=" bg-green modal-btn-1  w-[213px] h-[60px] mt-7 text-white text-lg max-mobile:text-lg max-mobile:w-[220px] max-mobile:h-[60px] font-bold rounded-lg "
            style={{ outline: "none" }}
            onClick={() => setVisible(1)}
          >
            OKAY
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PaymentConfirm;
