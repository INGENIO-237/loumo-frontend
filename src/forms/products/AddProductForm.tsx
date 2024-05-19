import React, { useRef, useState } from "react";
import Camera from "../../assets/camera.png";
import { array, object, optional, string, z } from "zod";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { formatTextToCapitalized } from "@/utils/util-functions";
import { zodResolver } from "@hookform/resolvers/zod";
import getKey from "@/utils/key.generator";

const addProductSchema = object({
  name: string({
    required_error: "Product name is required",
    invalid_type_error: "Product name must be a string",
  }),
  category: string({
    required_error: "Category must be provided",
    invalid_type_error: "Category must be a string",
  }),
  tags: optional(
    array(string({ invalid_type_error: "A tag must be of type string" }), {
      invalid_type_error: "Product's tags must be an array of tags",
    })
  ),
  price: string({
    required_error: "Price is required",
  }),
  characteristics: optional(
    array(
      string({
        invalid_type_error: "A characteristics must be of type string",
      }),
      {
        invalid_type_error:
          "Characteristics must be an array of charateristics",
      }
    )
  ),
  mainImage: z.instanceof(File, {
    message: "Product's main image is required",
  }),
  additionals: optional(
    array(z.instanceof(File)).max(4, {
      message: "Additional images can't exceed 4",
    })
  ),
});

type AddProductFormData = z.infer<typeof addProductSchema>;

export default function AddProductForm() {
  const hiddenImageRef = useRef<HTMLInputElement>();
  const [mainImageUrl, setMainImageUrl] = useState("");
  const imageRef = useRef<HTMLImageElement>(null);
  const { categories } = useSelector((state: RootState) => state.category);
  // const [tagsChoices, setTagsChoices] = useState([]);

  function handleMainImageClick() {
    hiddenImageRef.current?.click();
  }

  function handleImageOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files as FileList;
    setMainImageUrl(URL.createObjectURL(files[0]));
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<AddProductFormData>({
    resolver: zodResolver(addProductSchema),
  });

  const { ref: mainImageRegisterRef, ...rest } = register("mainImage");

  function onSave(data: any) {
    console.log({ data });
  }

  return (
    <form onSubmit={handleSubmit(onSave)}>
      {/* Top */}
      <div className="flex w-full justify-between justify-items-center">
        {/* Left */}
        <div className="w-[45%]">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
            />
            {errors.name && (
              <span className="text-red-500 mt-5">
                {errors.name.message?.toString()}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block mb-1">
              Category
            </label>
            <select
              id="category"
              {...register("category")}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
            >
              {categories.map((category) => (
                <option value={category._id} key={getKey()}>
                  {formatTextToCapitalized(category.title)}
                </option>
              ))}
            </select>
            {errors.category && (
              <span className="text-red-500">
                {errors.category.message?.toString()}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-1">
              Price
            </label>
            <input
              type="number"
              min={1}
              id="price"
              {...register("price")}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
            />
            {errors.price && (
              <span className="text-red-500">
                {errors.price.message?.toString()}
              </span>
            )}
          </div>
        </div>
        {/* Right */}
        <div className="border w-[50%] flex flex-col justify-center justify-items-center">
          <div className="w-full flex justify-center">
            <input
              type="file"
              className="hidden w-full h-full"
              accept="image/png, image/jpg, image/jpeg"
              max={1}
              {...rest}
              onChange={(e) => {
                handleImageOnChange(e);
                const files = e.target.files;
                if (files && files.length > 0) {
                  setValue("mainImage", files[0]);
                }
              }}
              ref={(e) => {
                mainImageRegisterRef(e);
                hiddenImageRef.current = e as HTMLInputElement;
              }}
            />
            <img
              src={mainImageUrl !== "" ? mainImageUrl : Camera}
              ref={imageRef}
              alt="Camera"
              className="w-[15em] hover:cursor-pointer"
              onClick={() => handleMainImageClick()}
            />
          </div>
          {errors.mainImage && (
            <span className="text-red-500 mt-5 w-full flex justify-center">
              {errors.mainImage.message?.toString()}
            </span>
          )}
        </div>
      </div>
      {/* Bottom */}
      <div></div>
      <button type="submit">Add</button>
    </form>
  );
}
