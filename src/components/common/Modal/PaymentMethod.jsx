import React from "react";
import Modal from "./Modal";
import viausdt from "@/assets/icons/crypto.svg";
import viacard from "@/assets/icons/card.svg";
import {
  callSmartContract,
  sendSmartContract,
  connectToMetaMask,
  metamaskInstallationCheck,
  switchChain,
  weiFunctions,
} from "../../../lib/web3";
import Image from "next/image";
import { displayWalletAddress } from "@/helpers/constants/wallet.utils";
import {
  CONTRACT_FUNCTIONS,
  errorMessage,
  METAMASK_SITE_URL,
  NETWORK_CHAINS,
  successMessage,
  TOKEN_DETAILS,
  ADMIN_WALLET_ADDRESS,
  WEI,
} from "@/helpers/constants/web3.constants";
import BiGTokenABI from "../../../smartContractAbi/BiG.json";
import USDTTokenABI from "../../../smartContractAbi/USDT.json";

const PaymentMethod = ({ setVisible }) => {
  return (
    <div>
      <Modal width={400}>
        <div className="modalWrapper  flex justify-center items-center flex-col ">
          <h3 className="modal-heading-1 my-6 text-black text-xl text-center ">
            <strong>Choose Your Payment Method</strong>
          </h3>
          <div className="payment-btn flex justify-center gap-[10px]  w-full">
            <button
              className="pay-btn border-none w-1/2 h-[4.1rem] bg-[whitesmoke] p-[18px]  rounded-[10px] flex justify-center items-center flex-col"
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
              onClick={async () => {
                if (await metamaskInstallationCheck()) {
                  const walletAddress = await connectToMetaMask();
                  if (walletAddress) {
                    // TODO: Replace consolelogs with toasts.
                    console.log(
                      `Connected with ${displayWalletAddress(walletAddress, 5)}`
                    );
                    if (
                      await switchChain(NETWORK_CHAINS.BINANCE_TEST_NETWORK)
                    ) {
                      // TODO: Replace consolelogs with toasts.
                      console.log(successMessage.ON_BSC_TESTNET);
                      // TODO: Replace `1` below with the respective token amount received post multiplying the number of plays by 5.
                      const amountInWei = weiFunctions("1", WEI.TO_WEI);
                      if (
                        parseInt(
                          await callSmartContract(
                            CONTRACT_FUNCTIONS.ERC20.BALANCE_OF,
                            [walletAddress],
                            // TODO: Change to `USDTTokenABI` if USDT selected.
                            BiGTokenABI,
                            // TODO: Change to `TOKEN_DETAILS.BSC.TESTNET.USDT.TOKEN_ADDRESS` if USDT selected.
                            TOKEN_DETAILS.BSC.TESTNET.BiG.TOKEN_ADDRESS
                          )
                        ) >= parseInt(amountInWei)
                      ) {
                        try {
                          const data = await sendSmartContract(
                            CONTRACT_FUNCTIONS.ERC20.TRANSFER,
                            [ADMIN_WALLET_ADDRESS, amountInWei],
                            [{ from: walletAddress }],
                            // TODO: Change to `USDTTokenABI` if USDT selected.
                            BiGTokenABI,
                            // TODO: Change to `TOKEN_DETAILS.BSC.TESTNET.USDT.TOKEN_ADDRESS` if USDT selected.
                            TOKEN_DETAILS.BSC.TESTNET.BiG.TOKEN_ADDRESS
                          );
                          if (data?.status) {
                            // TODO: Fetch transaction hash with `data.transactionHash` to do the necessary.
                            console.log(data);
                          }
                        } catch (error) {
                          // TODO: Replace consolelogs with toasts.
                          console.log(errorMessage.TRANSACTION_FAILED);
                        }
                      } else {
                        // TODO: Replace consolelogs with toasts.
                        console.log(errorMessage.INSUFFICIENT_TOKENS);
                      }
                    } else {
                      // TODO: Replace consolelogs with toasts.
                      console.log(errorMessage.NOT_ON_BSC);
                    }
                  }
                } else {
                  // TODO: Replace consolelogs with toasts.
                  console.log(errorMessage.INSTALL_METAMASK);
                  setTimeout(() => {
                    window.open(METAMASK_SITE_URL, "_blank");
                  }, 2500);
                }
              }}
            >
              <div>
                <Image src={viausdt} alt="cryptop" />
              </div>
              Pay via USDT
            </button>
            <button
              className="pay-btn border-none shadow-sm bg-[whitesmoke] p-[18px]  rounded-[10px] flex justify-center items-center flex-col w-1/2 h-[4.1rem] "
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
              onClick={() => setVisible(5)}
            >
              <div>
                <Image src={viacard} alt="card" />
              </div>
              Pay via Card
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PaymentMethod;
