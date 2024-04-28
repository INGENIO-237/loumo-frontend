import { object, string, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import PhoneInput, {
  Value as E164Number,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useEffect, useState } from "react";
import GooglePlaces from "@/components/GooglePlaces";
import { useUpdateProfile } from "@/data/services/auth.services";
import { toast } from "react-toastify";
import getKey from "@/utils/key.generator";
import RequestLoader from "@/components/ui/request-loader";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "@/redux/slices/authSlice";

const profileInfoSchema = object({
  email: string({ required_error: "Email is required" }).email(
    "Invalid email format"
  ),
});

export type ProfileInfoData = z.infer<typeof profileInfoSchema>;

type Coords = {
  lat: number;
  lng: number;
};

export type ShippingAddress = {
  location: string;
  coords: Coords;
};

export default function ProfileInfoForm() {
  const { user } = useSelector((state: RootState) => state.auth);
  const [phone, setPhone] = useState<E164Number>(user?.phone as E164Number);
  const [phoneError, setPhoneError] = useState("");

  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    location: user?.shippingAddress?.location as string,
    coords: user?.shippingAddress?.coords as Coords,
  });

  const [shippingAddressError] = useState("");
  const [apiErrors, setApiErrors] = useState([]);

  const dispatch = useDispatch<AppDispatch>();

  // Hook in charge of updating profile
  const { profileUpdate, isLoading, isSuccess, error } = useUpdateProfile();

  useEffect(() => {
    if (phone) {
      if (!isValidPhoneNumber(phone)) {
        setPhoneError("Invalid phone number");
      } else {
        setPhoneError("");
      }
    } else {
      setPhoneError("");
    }
  }, [phone]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Profile updated");
      dispatch(getCurrentUser(localStorage.getItem("accessToken") as string));
    }
    if (error) {
      const serverErrors = error as any;
      setApiErrors(serverErrors.response.data);
    }
  }, [isSuccess, error]);

  async function onSubmit(data: any) {
    await profileUpdate({
      email: data.email,
      phone: phone as E164Number,
      shippingAddress: shippingAddress as ShippingAddress,
    });
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
        {apiErrors && apiErrors.length > 0 && (
          <span className="mb-4 bg-red-500 p-2 w-full block text-white">
            <ul>
              {apiErrors.map((error: any) => (
                <li key={getKey()} className="italic">
                  {error.message}
                </li>
              ))}
            </ul>
          </span>
        )}
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
          <label className="block mb-1">Shipping Address</label>
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
            defaultValue={shippingAddress.location}
          />
          {shippingAddressError && (
            <span className="text-red-500">{shippingAddressError}</span>
          )}
        </div>
        <div className="flex justify-center">
          {isLoading ? (
            <RequestLoader className="bg-orange-500 px-5 py-2 flex justify-center disabled w-[20%] rounded cursor-not-allowed mb-4 opacity-50" />
          ) : (
            <button
              type="submit"
              className="bg-orange-500 px-5 py-2 rounded cursor-pointer mb-4 text-white w-[25%]"
            >
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
