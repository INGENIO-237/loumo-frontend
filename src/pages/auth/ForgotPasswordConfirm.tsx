import {
  useConfirmForgotPassword,
  useForgotPassword,
} from "@/data/services/auth.services";
import ForgotPasswordConfirmForm from "@/forms/auth/ForgotPasswordConfirmForm";

export default function ForgotPasswordConfirmPage() {
  const { confirmForgotPassword, isLoading, isSuccess, error } =
    useConfirmForgotPassword();
  const {
    forgotPassword: resendOtp,
    isLoading: resendOtpLoading,
    isSuccess: otpSent,
    error: otpErrors,
  } = useForgotPassword();
  return (
    <>
      <ForgotPasswordConfirmForm
        confirmPasswordReset={confirmForgotPassword}
        isLoading={isLoading}
        isSuccess={isSuccess}
        error={error}
        resendOtp={resendOtp}
        resendOtpLoading={resendOtpLoading}
        otpSent={otpSent}
        otpErrors={otpErrors}
      />
    </>
  );
}
