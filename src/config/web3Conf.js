import Web3 from "web3";
import { InjectedConnector } from "@web3-react/injected-connector";
import { DeFiWeb3Connector } from 'deficonnect';
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const MetaMaskconnector = new InjectedConnector({ supportedChainIds: [25] });

export const connector = new DeFiWeb3Connector({
    supportedChainIds: [25],
    rpc: { 25: `${process.env.REACT_APP_RPC_URL_1}`},
    pollingInterval: 15000,
  })
export const walletconnect = new WalletConnectConnector({
    rpc: { 25: `${process.env.REACT_APP_RPC_URL_1}` },
    chainId: 25,
    supportedChainIds:[25],
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
  });

export const getLibrary = provider => {
  return new Web3(provider);
}