import { StoreData } from "@/types/products";
import { formatTextToCapitalized } from "@/utils/util-functions";
import { Edit, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useEffect, useState } from "react";
import { useDeleteProduct } from "@/data/services/merchant.services";
import { toast } from "react-toastify";
import RequestLoader from "../ui/request-loader";

type Props = {
  product: StoreData;
  isMerchant?: boolean;
  index: string;
};

export default function ProductCard({
  product,
  index,
  isMerchant = false,
}: Props) {
  const [showDelete, setShowDelete] = useState(false);
  let {
    deleteProduct,
    isLoading: deleteIsLoading,
    isSuccess: deleteIsSuccess,
    error: deleteError,
  } = useDeleteProduct();

  useEffect(() => {
    if (deleteIsSuccess) {
      setShowDelete(false);
      toast.success("Product removed successfully.");
      // setTimeout(() => location.reload(), 2000);
    }

    if (deleteError) {
      if (Array.isArray((deleteError as any).response.data)) {
        (deleteError as any).response.data.forEach(
          (error: { message: string }) => {
            toast.error(error.message);
          }
        );
      } else {
        toast.error("Something went wrong. Retry please.");
      }
    }
  }, [deleteIsSuccess, deleteError]);

  return (
    <div
      className="w-[80%] h-[250px] pb-5 bg-content mb-10 rounded-t-xl hover:cursor-pointer md:w-[32.5%]"
      key={index}
    >
      <div className="overflow-hidden h-[80%]">
        <img
          src={product.mainImage.url}
          alt={formatTextToCapitalized(product.name) + " image"}
          className="rounded-t-[6px] w-full h-full hover:scale-[120%] ease-in-out transform transition duration-500"
        />
      </div>
      <div className="p-2">
        <h1 className="text-md font-bold">
          {formatTextToCapitalized(product.name)}
        </h1>
        <div className="flex justify-between justify-items-center">
          <h1 className="mt-2 font-bold">$ {product.price}</h1>
          {isMerchant && (
            <div className="flex justify-end justify-items-center gap-3">
              <button
                type="button"
                onClick={() => alert("Edit")}
                className="hover:scale-[120%] ease-in-out transform transition duration-500"
              >
                <Edit className="text-blue-500" />
              </button>
              <Dialog
                open={showDelete}
                onOpenChange={(isOpen) => setShowDelete(isOpen)}
              >
                <DialogTrigger>
                  <button
                    type="button"
                    className="hover:scale-[120%] ease-in-out transform transition duration-500"
                  >
                    <Trash className="text-red-500" />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                  </DialogHeader>
                  <DialogDescription>
                    <p>Do you really want to delete this product?</p>
                  </DialogDescription>
                  <DialogFooter>
                    {!deleteIsLoading && (
                      <button
                        type="button"
                        className="p-2 rounded border mr-3"
                        onClick={() => setShowDelete(false)}
                      >
                        Cancel
                      </button>
                    )}
                    {deleteIsLoading ? (
                      <RequestLoader className="bg-red-500 p-2 rounded flex justify-center opacity-60 text-white w-[17%] cursor-not-allowed" />
                    ) : (
                      <button
                        type="button"
                        className="bg-red-500 p-2 rounded text-white"
                        onClick={async () => await deleteProduct(product._id)}
                      >
                        Delete
                      </button>
                    )}
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
