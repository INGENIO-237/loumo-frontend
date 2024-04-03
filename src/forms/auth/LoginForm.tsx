import { object, string } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, redirect } from "react-router-dom";
import { loginUserIn } from "@/data/services/auth.services";
import { useState } from "react";
import getKey from "@/utils/key.generator";

const loginSchema = object({
  email: string({ required_error: "Email is required" }).email(
    "Invalid email format"
  ),
  password: string({ required_error: "Password is required" }).min(
    6,
    "Too short - Password must be at least 6 chars long."
  ),
});

export default function LoginForm() {
  const [apiErrors, setApiErrors] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: any) {
    loginUserIn(data)
      .then((response) => redirect("/"))
      .catch((error) => setApiErrors(error.response.data));
  }

  return (
    <div className="flex justify-content-center h-[100vh] text-white">
      <div className="max-w-md min-w-[40%] min-h-[75%] mx-auto my-auto bg-gray-800 p-2 rounded">
        <h1 className="text-2xl text-center font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Display errors */}
          {apiErrors && apiErrors.length > 0 && (
            <span className="mb-4 bg-red-500 p-2 w-full block">
              <ul>
                {apiErrors.map((error: any) => (
                  <li key={getKey()} className="italic">{error.message}</li>
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

          <a href="" className="text-right block mb-4">
            Forgot password
          </a>
          <input
            type="submit"
            value="Login"
            className="bg-blue-500 px-5 py-2 w-full rounded cursor-pointer mb-4"
          />
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
