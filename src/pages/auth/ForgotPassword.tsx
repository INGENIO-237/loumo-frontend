import { useForgotPassword } from "@/data/services/auth.services";
import ForgotPasswordForm from "@/forms/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  const { forgotPassword, data, isLoading, isSuccess, error } =
    useForgotPassword();
  return (
    <>
      <ForgotPasswordForm
        requestPasswordReset={forgotPassword}
        data={data as string}
        isLoading={isLoading}
        isSuccess={isSuccess}
        error={error}
      />
    </>
  );
}
