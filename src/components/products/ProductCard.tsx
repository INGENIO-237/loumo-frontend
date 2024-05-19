import { StoreData } from "@/types/products";
import { formatProductName } from "@/utils/util-functions";
import { Edit, Trash } from "lucide-react";

type Props = {
  product: StoreData;
  isMerchant?: boolean;
};

export default function ProductCard({ product, isMerchant = false }: Props) {
  
  return (
    <div className="w-full pb-5 rounded-t-xl hover:cursor-pointer md:w-[32.5%]">
      <div className="overflow-hidden">
        <img
          src={product.mainImage.url}
          alt={formatProductName(product.name) + " image"}
          className="rounded-t-[6px]  hover:scale-[120%] ease-in-out transform transition duration-500"
        />
      </div>
      <div className="p-2">
        <h1 className="text-2xl font-bold">
          {formatProductName(product.name)}
        </h1>
        <h1 className="mt-2 font-bold">$ {product.price}</h1>
      </div>
      {isMerchant && (
        <div className="flex justify-end justify-items-center gap-3">
          <button type="button" onClick={() => alert("Edit")}>
            <Edit className="text-blue-500" />
          </button>
          <button type="button" onClick={() => alert("Delete")}>
            <Trash className="text-red-500" />
          </button>
        </div>
      )}
    </div>
  );
}
