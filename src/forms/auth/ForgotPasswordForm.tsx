import { object, string, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getKey from "@/utils/key.generator";
import { toast } from "react-toastify";
import RequestLoader from "@/components/ui/request-loader";

const forgotPwdSchema = object({
  email: string({ required_error: "Email is required" }).email(
    "Invalid email format"
  ),
});

type ForgotPwdData = z.infer<typeof forgotPwdSchema>;

type Props = {
  requestPasswordReset: (formData: ForgotPwdData) => void;
  data: string;
  error: any;
  isSuccess: boolean;
  isLoading: boolean;
};

export default function ForgotPasswordForm({
  requestPasswordReset,
  data,
  isLoading,
  isSuccess,
  error,
}: Props) {
  const [apiErrors, setApiErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem("email", data);

      toast.success(
        "An OTP CODE has been sent to your email address. Check it."
      );

      return navigate("/forgot-password-confirm", { replace: true });
    }

    if (error) setApiErrors(error.response.data);
  }, [isSuccess, error]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPwdData>({
    resolver: zodResolver(forgotPwdSchema),
  });

  return (
    <div className="flex justify-content-center h-[100vh] text-white">
      <div className="max-w-md min-w-[40%] min-h-[45%] mx-auto my-auto bg-gray-800 p-2 rounded">
        <h1 className="text-2xl text-center font-semibold mb-4">
          Forgot Password
        </h1>
        <form onSubmit={handleSubmit(requestPasswordReset)}>
          {/* Display errors */}
          {apiErrors && Array.isArray(apiErrors) && apiErrors.length > 0 && (
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

          {apiErrors && !Array.isArray(apiErrors) && (
            <span className="mb-4 bg-red-500 p-2 w-full block">
              <ul>
                <li key={getKey()} className="italic">
                  {apiErrors}
                </li>
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
          {isLoading ? (
            <RequestLoader />
          ) : (
            <input
              type="submit"
              value="Send"
              className="bg-blue-500 px-5 py-2 w-full rounded cursor-pointer mb-4"
            />
          )}
          <hr />
          <p className="text-center mt-6">
            Already have an account ?{" "}
            <Link to="/login" className="ml-2 text-blue-500">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
