import web3 from "web3"
export function ethprice(num) {
    return web3.utils.fromWei(num, "ether");
  }