import { object, string } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const registerSchema = object({
  email: string({ required_error: "Email is required" }).email(
    "Invalid email format"
  ),
  password: string({ required_error: "Password is required" }).min(
    6,
    "Too short - Password must be at least 6 chars long."
  ),
  confirmPassword: string({
    required_error: "Password Confirmation is required",
  }),
}).refine(
  (data) => data.confirmPassword === data.password,
  "Passwords do not match"
);

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(data: any) {
    console.log(typeof data);

    console.log({ data });
  }

  return (
    <div className="flex justify-content-center h-[100vh] text-white">
      <div className="max-w-md min-w-[40%] min-h-[75%] mx-auto my-auto bg-gray-800 p-2 rounded">
        <h1 className="text-2xl text-center font-semibold mb-4">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message?.toString()}
              </span>
            )}
          </div>
          <input
            type="submit"
            value="Register"
            className="bg-blue-500 px-5 py-2 w-full rounded cursor-pointer mb-4"
          />
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
