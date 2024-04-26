import { object, string, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import PhoneInput, {
  Value as E164Number,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useEffect, useState } from "react";
import GooglePlaces from "@/components/GooglePlaces";

const profileInfoSchema = object({
  email: string({ required_error: "Email is required" }).email(
    "Invalid email format"
  ),
});

export type ProfileInfoData = z.infer<typeof profileInfoSchema>;

type ShippingAddress = {
  location: string;
  coords: {
    lat: string;
    lng: string;
  };
};

export default function ProfileInfoForm() {
  const { user } = useSelector((state: RootState) => state.auth);
  const [phone, setPhone] = useState<E164Number>();
  const [phoneError, setPhoneError] = useState("");

  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>();
  const [shippingAddressError, setShippingAddressError] = useState("");

  useEffect(() => {
    if (phone) {
      if (!isValidPhoneNumber(phone)) {
        setPhoneError("Invalid phone number");
      } else {
        setPhoneError("");
      }
    }

    console.log({ shippingAddress });
  }, [phone, shippingAddress]);

  function onSubmit(data: any) {
    console.log(data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileInfoData>({
    resolver: zodResolver(profileInfoSchema),
    defaultValues: user,
  });
  return (
    <div className="relative">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex w-full justify-between items-center mb-4">
          <div className="md:w-[48%]">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
            />
            {errors.email && (
              <span className="text-red-500">
                {errors.email.message?.toString()}
              </span>
            )}
          </div>
          <div className="md:w-[48%]">
            <label htmlFor="phone" className="block mb-1">
              Phone
            </label>
            <PhoneInput
              value={phone as E164Number}
              onChange={(value) => setPhone(value as E164Number)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
            />
            {phoneError && (
              <span className="text-red-500">{phoneError.toString()}</span>
            )}
          </div>
        </div>
        <div className="mb-10">
          <label htmlFor="email" className="block mb-1">
            Shipping Address
          </label>
          <GooglePlaces
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
            onPlaceSelected={(place: any) => {
              setShippingAddress({
                location: place.formatted_address,
                coords: {
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng(),
                },
              });
            }}
          />
          {shippingAddressError && (
            <span className="text-red-500">{shippingAddressError}</span>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-orange-500 px-5 py-2 rounded cursor-pointer mb-4 text-white w-[25%]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
