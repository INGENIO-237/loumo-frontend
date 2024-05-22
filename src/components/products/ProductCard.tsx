import { StoreData } from "@/types/products";
import { formatTextToCapitalized } from "@/utils/util-functions";
import { Edit, Trash } from "lucide-react";

type Props = {
  product: StoreData;
  isMerchant?: boolean;
};

export default function ProductCard({ product, isMerchant = false }: Props) {
  return (
    <div className="w-[80%] h-[250px] pb-5 bg-content mb-10 rounded-t-xl hover:cursor-pointer md:w-[32.5%]">
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
              <button type="button" onClick={() => alert("Edit")}>
                <Edit className="text-blue-500" />
              </button>
              <button type="button" onClick={() => alert("Delete")}>
                <Trash className="text-red-500" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
