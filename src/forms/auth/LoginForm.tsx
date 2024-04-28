import { object, string, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getKey from "@/utils/key.generator";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "@/redux/slices/authSlice";
import { AppDispatch } from "@/redux/store";
import { toast } from "react-toastify";
import { LoginCredentials, LoginReturnData } from "@/types/auth";
import RequestLoader from "@/components/ui/request-loader";

const loginSchema = object({
  email: string({ required_error: "Email is required" }).email(
    "Invalid email format"
  ),
  password: string({ required_error: "Password is required" }).min(
    6,
    "Too short - Password must be at least 6 chars long."
  ),
});

export type LoginFormData = z.infer<typeof loginSchema>;

type Props = {
  logUserIn: (credentials: LoginCredentials) => void;
  data: LoginReturnData;
  isSuccess: boolean;
  error: any;
  isLoading: boolean;
};

export default function LoginForm({
  logUserIn,
  data,
  isLoading,
  isSuccess,
  error,
}: Props) {
  const [apiErrors, setApiErrors] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isSuccess && data) {
      const { accessToken, otpGenerated } = data;
      if (otpGenerated) {
        return navigate("/verify")
      } else {
        dispatch(getCurrentUser(accessToken));
        toast.success("Logged In successfully.");
        return navigate("/", { replace: true });
      }
    }

    if (error) setApiErrors(error.response.data);
  }, [isSuccess, data, error]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div className="flex justify-content-center h-[100vh] text-white">
      <div className="max-w-md min-w-[40%] min-h-[75%] mx-auto my-auto bg-gray-800 p-2 rounded">
        <h1 className="text-2xl text-center font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit(logUserIn)}>
          {/* Display errors */}
          {apiErrors && apiErrors.length > 0 && (
            <span className="mb-4 bg-red-500 p-2 w-full block">
              <ul>
                {apiErrors.map((error: any) => (
                  <li key={getKey()} className="italic">
                    {error.message}
                  </li>
                ))}
              </ul>
            </span>
          )}
          <div className="mb-4">
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
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
            />
            {errors.password && (
              <span className="text-red-500">
                {errors.password.message?.toString()}
              </span>
            )}
          </div>

          <Link to="/forgot-password" className="text-right block mb-4">
            Forgot password
          </Link>
          {isLoading ? (
            <RequestLoader />
          ) : (
            <input
              type="submit"
              value="Login"
              className="bg-blue-500 px-5 py-2 w-full rounded cursor-pointer mb-4"
            />
          )}
          <hr />
          <p className="text-center mt-6">
            Don't have an account yet ?{" "}
            <Link to="/register" className="ml-2 text-blue-500">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
