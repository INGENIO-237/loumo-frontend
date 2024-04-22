import { useLogUserIn } from "@/data/services/auth.services";
import LoginForm from "@/forms/auth/LoginForm";
import { LoginReturnData } from "@/types/auth";

export default function LoginPage() {
  const { signUserIn, data, isLoading, isSuccess, error } = useLogUserIn();

  return (
    <>
      <LoginForm
        logUserIn={signUserIn}
        data={data as LoginReturnData}
        isLoading={isLoading}
        isSuccess={isSuccess}
        error={error}
      />
    </>
  );
}
