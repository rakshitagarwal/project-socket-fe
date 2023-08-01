import { errorMessage, METAMASK_ERROR_CODES } from "./web3.constants";

/**
 * @description Helper function which takes in the address and manipulates it in such a way that is to be displayed to user.
 * @param {string} address
 * @param {number} offset
 * @returns the wallet address that is to be displayed
 */
export const displayWalletAddress = (address, offset) =>
  address?.substring(0, offset) +
  "..." +
  address?.substring(address.length - offset);

/**
 * Helper function to check the error thrown.
 * @param {Object} error contains details of the error thrown.
 */
export const checkError = (error) => {
  if (error.code === METAMASK_ERROR_CODES.USER_REJECTED_REQUEST) {
    console.log(errorMessage.REQUEST_DENIED);
  } else if (error.code === METAMASK_ERROR_CODES.RESOURCE_BUSY) {
    console.log(errorMessage.RESOURCE_BUSY);
  } else if (error.code === METAMASK_ERROR_CODES.TRANSACTION_REJECTED) {
    console.log(error.message);
  }
};
