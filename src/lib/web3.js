import { checkError } from "@/helpers/constants/wallet.utils";
import {
  CONTRACT_LISTENER,
  METAMASK_ERROR_CODES,
  successMessage,
} from "@/helpers/constants/web3.constants";
import Web3 from "web3";

const web3 = new Web3(window.ethereum);

/**
 * @description Metamask's installation check.
 * @returns {Boolean} - true if installed.
 */
export const metamaskInstallationCheck = () =>
  window.ethereum && window.ethereum.isMetaMask ? true : false;

/**
 * @description Fetch accounts of user.
 * @returns {string} wallet address of the user
 */
export const fetchConnectedAccounts = async () =>
  (await web3.eth.getAccounts())[0];

/**
 * @description Connecting user with metamask.
 * @returns {(Object | Boolean)} - returns object if no error's thrown, else boolean.
 */
export const connectToMetaMask = async () => {
  const walletAddress = await fetchConnectedAccounts();
  if (walletAddress) {
    return walletAddress;
  }
  try {
    const walletAddress = await web3.currentProvider.request({
      method: "eth_requestAccounts",
    });
    return walletAddress[0];
  } catch (error) {
    // TODO: Switch 'checkError' to function call file.
    checkError(error);
    return false;
  }
};

// TODO: Change to mainnet pre-deployment.
/**
 * @description Adds BSC Testnet chain for the user.
 * @returns {Boolean} - true if no error's thrown else false.
 */
export const addChain = async (network) => {
  try {
    await web3.currentProvider.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: network.CHAINID,
          chainName: network.CHAINNAME,
          rpcUrls: [network.RPCURLS],
          nativeCurrency: {
            name: network.NATIVE_CURRENCY_NAME,
            symbol: network.NATIVE_CURRENCY_SYMBOL,
            decimals: network.NATIVE_CURRENCY_DECIMAL,
          },
          blockExplorerUrls: [network.BLOCK_EXPLORER_URL],
        },
      ],
    });
    return true;
  } catch (error) {
    // TODO: Switch 'checkError' to function call file.
    checkError(error);
    return false;
  }
};

/**
 *
 * @description - switch to particular network and if not added then add it.
 * @param {network} - network to which the user needs to switch
 * @returns {Boolean} true if no error's thrown and successful switch else false.
 */
export const switchChain = async (network) => {
  try {
    await web3.currentProvider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: network.CHAINID }],
    });
    return true;
  } catch (error) {
    if (
      error.code === METAMASK_ERROR_CODES.CHAIN_NOT_ADDED ||
      error.code === METAMASK_ERROR_CODES.INTERNAL_JSON_RPC
    ) {
      try {
        let res = await addChain(network);
        if (res) {
          if (await checkNetwork(network.CHAINID)) return true;
        }
      } catch (error) {
        return false;
      }
    } else {
      return false;
    }
  }
};
/**
 *
 * @description - to import tokens into Metamask wallet.
 * @param {token} - token to be added
 * @returns true if no error's thrown else false.
 */
export const importTokenIntoMetaMask = async (token) => {
  try {
    return await web3.currentProvider.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: token.TOKEN_ADDRESS,
          symbol: token.TOKEN_SYMBOL,
          decimals: token.TOKEN_DECIMALS,
          image: token.TOKEN_IMAGE,
        },
      },
    });
  } catch (error) {
    // TODO: Switch 'checkError' to function call file.
    checkError(error);
    return false;
  }
};

/**
 * @description Ensures the user's on the BSC Testnet chain.
 * @param {string} - hexadecimal value of netId
 * @returns {Boolean} - true if user's on the required chain.
 */
export const checkNetwork = async (netId) => {
  try {
    const idInDecimal = await web3.utils.hexToNumber(netId);
    const networkId = await web3.eth.getChainId();
    // TODO: Change to BSC Mainnet pre-deployment.
    return networkId === idInDecimal;
  } catch (error) {
    return false;
  }
};

/**
 * @description Initializes a smart contract object.
 * @param @param {Object} abi - any smart contract's abi.
 * @param {String} contractAddress - any smart contract's address.
 * @returns {Object} - initialized contract.
 */
const initializeSmartContract = (abi, contractAddress) =>
  new web3.eth.Contract(abi, contractAddress);

/**
 * @description Generic function to send a transaction to the smart contract.
 * @param {String} contractFunction - contract's function name.
 * @param {Object} functionInput - contract's function's array of parameters.
 * @param {Object} sendInput - array of parameters necessary to send transaction.
 * @param {Object} abi
 * @param {String} contractAddress
 * @returns {Object}
 */
export const sendSmartContract = (
  contractFunction,
  functionInput,
  sendInput,
  abi,
  contractAddress
) => {
  const contractInstance = initializeSmartContract(abi, contractAddress);
  return contractInstance.methods[contractFunction]
    .apply(null, functionInput)
    .send.apply(null, sendInput)
    .on(CONTRACT_LISTENER.TX_HASH, function () {
      console.log(successMessage.TRANSACTION_IN_PROCESS);
    })
    .on(CONTRACT_LISTENER.RECEIPT, function (receipt) {
      if (receipt.status) {
        console.log(successMessage.TRANSACTION_SUCCESS);
      }
    })
    .on(CONTRACT_LISTENER.ERROR, function (error) {
      // checkError(error);
    });
};

/**
 * @description Generic function to call a constant method from the smart contract.
 * @param {String} contractFunction - contract's function name.
 * @param {Object} functionInputs - contract's function's array of parameters.
 * @param {Object} abi
 * @param {String} contractAddress
 * @returns {Object}
 */
export const callSmartContract = async (
  contractFunction,
  functionInputs,
  abi,
  contractAddress
) => {
  const contractInstance = initializeSmartContract(abi, contractAddress);
  return contractInstance.methods[contractFunction]
    .apply(null, functionInputs)
    .call()
    .then(function (result) {
      return result;
    });
};

/**
 * @description Converts an amount into Wei or from Wei, as specified.
 * @param {Number} amount - amount to be converted.
 * @param {Function} toOrFromWei - function to be used.
 */
export const weiFunctions = (amount, toOrFromWei) =>
  web3.utils[toOrFromWei](amount);
