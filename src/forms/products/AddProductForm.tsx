import React, { useEffect, useRef, useState } from "react";
import Camera from "../../assets/camera.png";
import { array, object, optional, string, z } from "zod";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { formatTextToCapitalized } from "@/utils/util-functions";
import { zodResolver } from "@hookform/resolvers/zod";
import getKey from "@/utils/key.generator";
import Tag from "@/components/products/Tag";

const addProductSchema = object({
  name: string({
    required_error: "Product name is required",
    invalid_type_error: "Product name must be a string",
  }).refine((data) => data !== "", "Name cannot be empty"),
  category: string({
    required_error: "Category must be provided",
    invalid_type_error: "Category must be a string",
  }),
  price: string({
    required_error: "Price is required",
  }).refine(
    (data) => data !== "" && !Number.isNaN(data) && Number(data) > 0,
    "Price should be a number and greater than 0"
  ),
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

export type AddProductFormData = z.infer<typeof addProductSchema>;

type Props = {
  addProduct: (data: AddProductFormData & { tags: string[] }) => void;
};

export default function AddProductForm({ addProduct }: Props) {
  const hiddenImageRef = useRef<HTMLInputElement>();
  const [mainImageUrl, setMainImageUrl] = useState("");
  const imageRef = useRef<HTMLImageElement>(null);
  const { categories } = useSelector((state: RootState) => state.category);
  const [tagsChoices, setTagsChoices] = useState<string[]>([]);
  const [category, setCategory] = useState(categories[0]._id);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const cat = categories.filter((cat) => cat._id == category)[0];

    if (cat) {
      setTagsChoices(cat.tags as string[]);
    }
    console.log(tags);
  }, [category, tags]);

  function handleMainImageClick() {
    hiddenImageRef.current?.click();
  }

  function handleImageOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files as FileList;
    setMainImageUrl(URL.createObjectURL(files[0]));
  }

  function onCheck(tagName: string) {
    if (!tags.includes(tagName)) {
      setTags((value) => {
        return [...value, tagName];
      });
    }
  }

  function onUncheck(tagName: string) {
    const newTags = tags.filter((tag) => tag != tagName);

    setTags([...newTags]);
  }

  function tagIsChecked(tagName: string) {
    return tags.includes(tagName);
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
  const { ref: categoryRef, ...catRest } = register("category");

  function onSave(data: any) {
    if (tags) data.tags = tags;
    addProduct(data);
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
              {...catRest}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
              ref={(e) => {
                categoryRef(e);
              }}
              onChange={(e) => setCategory(e.target.value)}
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
                hiddenImageRef.current = e as HTMLInputElement;
                mainImageRegisterRef(e);
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
      <div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Tags
          </label>
          <div className="flex gap-2 mt-2">
            {tagsChoices.map((tag) => {
              return (
                <Tag
                  key={getKey()}
                  index={getKey()}
                  tag={tag}
                  onCheck={onCheck}
                  onUncheck={onUncheck}
                  isChecked={tagIsChecked(tag)}
                />
              );
            })}
          </div>
          {errors.name && (
            <span className="text-red-500 mt-5">
              {errors.name.message?.toString()}
            </span>
          )}
        </div>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
