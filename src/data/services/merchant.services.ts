import { useMutation } from "react-query";
import server from "../server";

export function useApplyMerchantStatus() {
  async function applyMerchantStatus() {
    return server.put(
      "/users/become-merchant",
      {},
      {
        headers: {
          Authorization: ("Bearer " +
            localStorage.getItem("accessToken")) as string,
          ["x-refresh"]: localStorage.getItem("refreshToken") as string,
        },
      }
    );
  }

  const {
    mutateAsync: becomeMerchant,
    isLoading,
    isSuccess,
    error,
  } = useMutation(applyMerchantStatus);

  return { becomeMerchant, isLoading, isSuccess, error };
}

export function useGetStore() {
  async function getCurrentMerchantProducts() {
    return server
      .get("/products/store")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }

  const {
    mutateAsync: getStore,
    isLoading,
    isSuccess,
    data,
    error,
  } = useMutation(getCurrentMerchantProducts, { retry: true });

  return { getStore, isLoading, isSuccess, data, error };
}
