import { useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'
import configc from '../config/configc'


const useContract = () => {
  const { active, library, chainId } = useWeb3React()

  const personitasNft = useMemo(() => {
    if (active && library) {
      return new library.eth.Contract(
        configc.abi,
        configc.address[chainId]
      )
    }
  }, [library, chainId, active])

  return personitasNft
}

export default useContract;
