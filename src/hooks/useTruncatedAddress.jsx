import { useMemo } from "react";

export const useTruncatedAddress = (account) => {
  const truncated = useMemo(
    () => `${account?.substr(0, 4)}...${account?.substr(-3)}`,
    [account]
  );
  return truncated;
};
export const useTruncatedAddressM = (account) => {
    const truncated = useMemo(
      () => `${account?.substr(0, 15)}...${account?.substr(-6)}`,
      [account]
    );
    return truncated;
  };
// export default useTruncatedAddress;