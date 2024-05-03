import { StoreData } from "@/types/products";
import { formatProductName } from "@/utils/util-functions";
import { Delete, Edit, Trash } from "lucide-react";

type Props = {
  product: StoreData;
  isMerchant?: boolean;
};

export default function ProductCard({ product, isMerchant = false }: Props) {
  return (
    <div className="w-full pb-5  rounded-t-xl">
      <div>
        <img
          src={product.mainImage.url}
          alt={formatProductName(product.name) + " image"}
          className="rounded-t-[6px]"
        />
      </div>
      <div className="p-2">
        <h1 className="text-2xl font-bold">
          {formatProductName(product.name)}
        </h1>
        <h1 className="mt-2 font-bold">$ {product.price}</h1>
      </div>
      {isMerchant && (
        <div className="flex justify-end justify-items-center  gap-3">
          <button type="button">
            <Edit className="text-blue-500" />
          </button>
          <button type="button">
            <Trash className="text-red-500" />
          </button>
        </div>
      )}
    </div>
  );
}
