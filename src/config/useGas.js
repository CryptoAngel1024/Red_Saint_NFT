import Web3 from "web3";
export const useGas = async (fromAddress, body, price, toAddress, nonce) => {
  let cro = `${process.env.REACT_APP_RPC_URL_1}`;
  let web3 = new Web3(new Web3.providers.HttpProvider(cro));
  // console.log(web3.utils.toHex(price));
  // console.log(await web3.eth.getTransactionCount(fromAddress));

  const result = await web3.eth.estimateGas({
    from: fromAddress,
    value: String(web3.utils.toHex(String(price))),
    nonce: nonce,
    to: toAddress,
    data: body,
  });
  return result;
};
