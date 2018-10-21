import { useEffect, useMemo, useState } from 'react'
import Web3 from 'web3'
import ERC20Config from '../Page/Swap/abi/erc20'
export const useBalance = (address, wallet) => {
  const [data, setData] = useState(null)

  const fetch = async () => {
    try {
      if (address) {
        if (wallet) {
          let cro = `${process.env.REACT_APP_RPC_URL_1}`
          var web3 = new Web3(new Web3.providers.HttpProvider(cro))
          let contract = new web3.eth.Contract(ERC20Config.abi, address)
          const response = await contract.methods.balanceOf(wallet).call()
          // console.log(response)
          setData(response)
        }
      }
    } catch (error) {
      // console.log(error);
    }
  }
  useEffect(() => {
    if (wallet || address) {
      fetch()
    }
  }, [wallet])
  if (data) {
    return data
  } else {
    return '0.0000'
  }
}
