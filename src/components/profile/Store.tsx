import { StoreData } from "@/types/products";
import { Skeleton } from "../ui/skeleton";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductCard from "../products/ProductCard";
import { useGetStore } from "@/data/services/merchant.services";
import getKey from "@/utils/key.generator";

export default function Store() {
  const dummyStore = [1, 2, 3];
  const [store, setStore] = useState<StoreData[]>([]);
  const { getStore, isLoading, isSuccess, data, error } = useGetStore();

  useEffect(() => {
    if (isSuccess && data) setStore(data);

    if (store.length < 1) {
      getStore();
    }

    if (error) toast.error("Something went wrong. Retry.");
  }, [getStore, data, isSuccess, error]);
  return (
    <div>
      {/* Add a product */}
      <div className="flex justify-end"></div>

      <div className="mt-5 md: ">
        {isLoading
          ? dummyStore.map((_, index) => {
              return (
                <div className="w-[31.2%] h-[150px] mb-5" key={index}>
                  <Skeleton className="w-full h-full" />
                  <Skeleton className="w-[75%] h-[20px] mt-5" />
                  <Skeleton className="w-[40%] h-[20px] mt-5" />
                </div>
              );
            })
          : store.length > 0
          ? store.map((product) => (
              <ProductCard product={product} key={getKey()} isMerchant />
            ))
          : null}
      </div>
    </div>
  );
}
