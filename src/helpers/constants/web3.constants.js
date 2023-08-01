export const errorMessage = Object.freeze({
  REQUEST_DENIED: "MetaMask request denied!",
  TRANSACTION_FAILED: "MetaMask transaction failed. Please try again!",
  INSTALL_METAMASK: "Install metamask to proceed!",
  NOT_ON_BSC: "You have to be on the BSC Testnet to proceed!",
  INSUFFICIENT_TOKENS: "Insufficient Tokens!",
  RESOURCE_BUSY:
    "MetaMask is already open, please open it from extensions in your browser!",
});

export const successMessage = Object.freeze({
  ON_BSC_TESTNET: "Now on BSC Testnet.",
  TRANSACTION_SUCCESS: "Transaction's successful.",
  TRANSACTION_IN_PROCESS: "Transaction's in process. Kindly wait.",
  TOKENS_IMPORTED: "BiG tokens imported successfully.",
});

export const NETWORK_CHAINS = Object.freeze({
  BINANCE_TEST_NETWORK: {
    CHAINID: "0x61",
    CHAINNAME: "Binance Smart Chain Testnet",
    RPCURLS:
      "https://wider-skilled-meme.bsc-testnet.discover.quiknode.pro/4516a40fc6e7bdf7ba6c41cdfc9a9c0e297973b8/",
    NATIVE_CURRENCY_NAME: "Binance Coin",
    NATIVE_CURRENCY_SYMBOL: "tBNB",
    NATIVE_CURRENCY_DECIMAL: 18,
    BLOCK_EXPLORER_URL: "https://testnet.bscscan.com",
  },
  BINANCE_SMART_CHAIN: {
    CHAINID: "0x38",
    CHAINNAME: "Binance Smart Chain",
    RPCURLS: "https://bsc-dataseed1.binance.org/",
    NATIVE_CURRENCY_NAME: "Binance Coin",
    NATIVE_CURRENCY_SYMBOL: "BNB",
    NATIVE_CURRENCY_DECIMAL: 18,
    BLOCK_EXPLORER_URL: "https://bscscan.com/",
  },
});

export const METAMASK_ERROR_CODES = {
  USER_REJECTED_REQUEST: 4001,
  CHAIN_NOT_ADDED: 4902,
  RESOURCE_BUSY: -32002,
  TRANSACTION_REJECTED: -32003,
  INTERNAL_JSON_RPC: -32603,
};

export const METAMASK_SITE_URL = "https://metamask.io/download/";

export const TOKEN_DETAILS = Object.freeze({
  BSC: {
    MAINNET: {
      USDT: {
        TOKEN_ADDRESS: "0x55d398326f99059ff775485246999027b3197955",
        TOKEN_SYMBOL: "USDT",
        TOKEN_DECIMALS: 18,
        TOKEN_IMAGE:
          "https://raw.githubusercontent.com/solarbeamio/solarbeam-tokenlist/main/assets/moonriver/0x5D9ab5522c64E1F6ef5e3627ECCc093f56167818/logo.png",
      },
      BiG: {
        TOKEN_ADDRESS: "",
        TOKEN_SYMBOL: "BiG_TOKEN",
        TOKEN_DECIMALS: 18,
        TOKEN_IMAGE:
          "https://raw.githubusercontent.com/solarbeamio/solarbeam-tokenlist/main/assets/moonriver/0x5D9ab5522c64E1F6ef5e3627ECCc093f56167818/logo.png",
      },
    },
    TESTNET: {
      USDT: {
        TOKEN_ADDRESS: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",
        TOKEN_SYMBOL: "USDT",
        TOKEN_DECIMALS: 18,
        TOKEN_IMAGE:
          "https://raw.githubusercontent.com/solarbeamio/solarbeam-tokenlist/main/assets/moonriver/0x5D9ab5522c64E1F6ef5e3627ECCc093f56167818/logo.png",
      },
      BiG: {
        TOKEN_ADDRESS: "0xE9C5a473Bb5c8Fa64816C0C2a8FaB316FDC7a90E",
        TOKEN_SYMBOL: "BiG",
        TOKEN_DECIMALS: 18,
        TOKEN_IMAGE:
          "https://raw.githubusercontent.com/solarbeamio/solarbeam-tokenlist/main/assets/moonriver/0x5D9ab5522c64E1F6ef5e3627ECCc093f56167818/logo.png",
      },
    },
  },
});

export const CRYPTO_PAYMENT_OPTIONS = ["BiG", "USDT"];

export const CONTRACT_LISTENER = {
  TX_HASH: "transactionHash",
  RECEIPT: "receipt",
  ERROR: "error",
};

export const CONTRACT_FUNCTIONS = {
  ERC20: {
    BALANCE_OF: "balanceOf",
    TRANSFER: "transfer",
  },
};

export const WEI = {
  FROM_WEI: "fromWei",
  TO_WEI: "toWei",
};

export const ADMIN_WALLET_ADDRESS =
  "0x91ca770c261772DDAaFc2FA477527C5191f5Be53";
