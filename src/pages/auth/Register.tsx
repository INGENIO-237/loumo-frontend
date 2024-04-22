import { useRegisterUser } from "@/data/services/auth.services";
import RegisterForm from "@/forms/auth/RegisterForm";

export default function RegisterPage() {
  const { signUserUp, data, error, isLoading, isSuccess } = useRegisterUser();
  return (
    <>
      <RegisterForm
        registerUser={signUserUp}
        data={data}
        error={error}
        isLoading={isLoading}
        isSucess={isSuccess}
      />
    </>
  );
}
