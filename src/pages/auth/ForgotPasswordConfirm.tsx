import { useConfirmForgotPassword } from "@/data/services/auth.services";
import ForgotPasswordConfirmForm from "@/forms/auth/ForgotPasswordConfirmForm";

export default function ForgotPasswordConfirmPage() {
  const { confirmForgotPassword, isLoading, isSuccess, error } =
    useConfirmForgotPassword();
  return (
    <>
      <ForgotPasswordConfirmForm
        confirmPasswordReset={confirmForgotPassword}
        isLoading={isLoading}
        isSuccess={isSuccess}
        error={error}
      />
    </>
  );
}
