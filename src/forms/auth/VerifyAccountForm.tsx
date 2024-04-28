import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getKey from "@/utils/key.generator";
import { toast } from "react-toastify";
import OTPInput from "react-otp-input";
import { LoginCredentials, LoginReturnData } from "@/types/auth";
import RequestLoader from "@/components/ui/request-loader";
import { getCurrentUser } from "@/redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

type Props = {
  verifyAccount: (data: LoginCredentials) => void;
  error: any;
  data: LoginReturnData;
  isLoading: boolean;
  isSuccess: boolean;
  resendOtp: (data: { email: string }) => void;
  otpErrors: any;
  resendOtpLoading: boolean;
  otpSent: boolean;
};

export default function VerifyAccountForm({
  verifyAccount,
  data,
  isLoading,
  isSuccess,
  error,
  resendOtp,
  resendOtpLoading,
  otpSent,
  otpErrors,
}: Props) {
  const [apiErrors, setApiErrors] = useState([]);
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isSuccess) {
      localStorage.removeItem("email");
      localStorage.removeItem("password");

      // return navigate("/login");
      const { accessToken } = data;

      dispatch(getCurrentUser(accessToken));
      toast.success("Verification complete.");
      return navigate("/", { replace: true });
    }

    if (otpSent) toast.success("Otp Code Sent");

    if (error) setApiErrors(error.response.data);
    if (otpErrors) setApiErrors(otpErrors.response.data);
  }, [isSuccess, error, otpErrors, otpSent]);

  function handleSubmit() {
    setOtpError("");

    if (otp.length !== 5) {
      setOtpError("Too short - OTP must be 5 chars long.");
    } else {
      const email = localStorage.getItem("email") as string;
      const password = localStorage.getItem("password") as string;

      verifyAccount({ email, otp: Number(otp), password });
    }
  }

  return (
    <div className="flex justify-content-center h-[100vh] text-white">
      <div className="max-w-md min-w-[40%] min-h-[45%] mx-auto my-auto bg-gray-800 p-2 rounded">
        <h1 className="text-2xl text-center font-semibold mb-4">
          Account Verification
        </h1>
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
            OTP
          </label>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            inputType="number"
            inputStyle={{ width: "16%", height: "50px" }}
            renderInput={(props) => (
              <input
                {...props}
                className="block border rounded focus:outline-none focus:border-blue-500 text-black"
              />
            )}
            containerStyle={{ justifyContent: "space-between" }}
          />
          {otpError && <span className="text-red-500">{otpError}</span>}
        </div>
        {isLoading || resendOtpLoading ? (
          <RequestLoader />
        ) : (
          <button
            type="button"
            className="bg-blue-500 px-5 py-2 w-full rounded cursor-pointer mb-4"
            onClick={() => handleSubmit()}
          >
            Verify
          </button>
        )}
        <hr />
        <p className="text-center mt-6">
          <span
            onClick={() =>
              resendOtp({ email: localStorage.getItem("email") as string })
            }
            className="ml-2 text-blue-500 cursor-pointer"
          >
            Resend Code
          </span>
        </p>
      </div>
    </div>
  );
}
