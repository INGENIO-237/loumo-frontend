import { useForgotPassword, useLogUserIn } from "@/data/services/auth.services";
import VerifyAccountForm from "@/forms/auth/VerifyAccountForm";
import { LoginReturnData } from "@/types/auth";

export default function VerifyAccountPage() {
  const { signUserIn, data, isLoading, isSuccess, error } = useLogUserIn();
  const {
    forgotPassword: resendOtp,
    isLoading: resendOtpLoading,
    isSuccess: otpSent,
    error: otpErrors,
  } = useForgotPassword();
  return (
    <>
      <VerifyAccountForm
        verifyAccount={signUserIn}
        isLoading={isLoading}
        isSuccess={isSuccess}
        data={data as LoginReturnData}
        error={error}
        resendOtp={resendOtp}
        resendOtpLoading={resendOtpLoading}
        otpSent={otpSent}
        otpErrors={otpErrors}
      />
    </>
  );
}
