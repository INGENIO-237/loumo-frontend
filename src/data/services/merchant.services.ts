import { useMutation } from "react-query";
import server from "../server";

export function useApplyMerchantStatus() {
  async function applyMerchantStatus() {
    return server.put("/users/become-merchant");
  }

  const {
    mutateAsync: becomeMerchant,
    isLoading,
    isSuccess,
    error,
  } = useMutation(applyMerchantStatus);

  return { becomeMerchant, isLoading, isSuccess, error };
}
