import { StoreData } from "@/types/products";
import { Skeleton } from "../ui/skeleton";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductCard from "../products/ProductCard";
import { useAddProduct, useGetStore } from "@/data/services/merchant.services";
import getKey from "@/utils/key.generator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AddProductForm from "@/forms/products/AddProductForm";
import Pagination from "../products/Pagination";

export default function Store() {
  const dummyStore = [1, 2, 3, 6, 56, 8];
  const [store, setStore] = useState<StoreData[]>([]);
  const { getStore, isLoading, isSuccess, data, error } = useGetStore();
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [perPage] = useState(3);

  const {
    addProduct,
    isLoading: productIsLoading,
    isSuccess: productIsSuccess,
    error: productError,
  } = useAddProduct();

  useEffect(() => {
    if (isSuccess && data) {
      setStore(data.products);
      setTotal(data.total);
    }

    if (productIsSuccess) {
      setShowModal(false);
    }

    if (store.length < 1) {
      getStore({ page, perPage });
    }

    if (error || productError) toast.error("Something went wrong. Retry.");
  }, [getStore, data, isSuccess, error, productIsSuccess, productError, store]);

  useEffect(() => {
    getStore({ page, perPage });
  }, [perPage, page]);

  function handleNext() {
    const maxPages = Math.round(total / perPage);

    if (page < maxPages) setPage(page + 1);
  }

  function handlePrev() {
    if (page > 1) setPage(page - 1);
  }

  return (
    <div>
      {/* Add a product */}
      <div className="flex justify-end">
        <Dialog
          open={showModal}
          onOpenChange={(isOpen) => setShowModal(isOpen)}
        >
          <DialogTrigger>
            <button
              type="button"
              className="bg-orange-500 p-2 rounded text-white"
            >
              + product
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>New Product</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <AddProductForm addProduct={addProduct} />
            </DialogDescription>
            {!productIsLoading && (
              <DialogFooter>
                <button type="button" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit">Add</button>
              </DialogFooter>
            )}
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-5 flex flex-col items-center md:flex md:flex-row md:justify-between md:flex-wrap">
        {isLoading
          ? dummyStore.map((_, index) => {
              return (
                <div className="w-[31.2%] h-[150px] mb-20" key={index}>
                  <Skeleton className="w-full h-full" />
                  <Skeleton className="w-[75%] h-[20px] mt-2" />
                  <Skeleton className="w-[40%] h-[20px] mt-2" />
                </div>
              );
            })
          : store.length > 0
          ? store.map((product) => (
              <ProductCard product={product} key={getKey()} isMerchant />
            ))
          : null}
        {total > 0 && (
          <Pagination
            total={total}
            page={page}
            perPage={perPage}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        )}
      </div>
    </div>
  );
}
