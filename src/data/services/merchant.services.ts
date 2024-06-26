import { useMutation } from "react-query";
import server from "../server";
import { AddProductFormData } from "@/forms/products/AddProductForm";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import processNewAccessToken from "@/utils/access-token";

export function useApplyMerchantStatus() {
  async function applyMerchantStatus() {
    return server
      .put(
        "/users/become-merchant",
        {},
        {
          headers: {
            Authorization: ("Bearer " +
              localStorage.getItem("accessToken")) as string,
            ["x-refresh"]: localStorage.getItem("refreshToken") as string,
          },
        }
      )
      .then((response) => processNewAccessToken(response))
      .catch((error) => {
        throw error;
      });
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
  async function getCurrentMerchantProducts({
    page,
    perPage,
  }: {
    page: number;
    perPage: number;
  }) {
    return server
      .get("/products/store", {
        params: {
          page,
          perPage,
        },
      })
      .then((response) => {
        processNewAccessToken(response);
        return response.data;
      })
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

export function useAddProduct() {
  const { user } = useSelector((state: RootState) => state.auth);

  async function createProduct(data: AddProductFormData & { tags: string[] }) {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("mainImage", data.mainImage);
    formData.append("merchant", user!._id.toString() as string);

    if (data.tags) {
      data.tags.forEach((tag, index) => {
        formData.append(`tags[${index}]`, tag);
      });
    }

    if (data.characteristics) {
      data.characteristics.forEach((char, index) => {
        formData.append(`characteristics[${index}]`, char);
      });
    }

    if (data.additionals) {
      data.additionals.forEach((file, index) => {
        formData.append(`additionals[${index}]`, file);
      });
    }

    return server
      .post("/products", formData, {
        headers: {
          "Content-Type": "multipart/formdata",
        },
      })
      .then((response) => {
        processNewAccessToken(response);
      })
      .catch((error) => {
        throw error;
      });
  }

  const {
    mutateAsync: addProduct,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createProduct);

  return { addProduct, isLoading, isSuccess, error };
}

export function useDeleteProduct() {
  async function removeProduct(productId: string) {
    return server
      .delete(`/products/${productId}`)
      .then((response) => {
        processNewAccessToken(response);
        return;
      })
      .catch((error) => {
        throw error;
      });
  }

  const {
    mutateAsync: deleteProduct,
    isLoading,
    isSuccess,
    error,
  } = useMutation(removeProduct);

  return { deleteProduct, isLoading, isSuccess, error };
}
