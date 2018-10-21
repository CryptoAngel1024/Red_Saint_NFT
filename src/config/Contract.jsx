import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import SmartContractConfig from "./SmartContract";

const useMarketPlaceContract = () => {
  const { active, library, chainId } = useWeb3React();

  const MarketPlace = useMemo(() => {
    if (active && library) {
      return new library.eth.Contract(
        SmartContractConfig.abi,
        SmartContractConfig.address
      );
    }
  }, [library, chainId, active]);

  return MarketPlace;
};

export default useMarketPlaceContract;
