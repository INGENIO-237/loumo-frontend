// import { object, string } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import getKey from "@/utils/key.generator";
// import { toast } from "react-toastify";
// import OTPInput from "react-otp-input";
// import { confirmPasswordReset } from "@/data/services/auth.services";

// const forgotPwdConfirmSchema = object({
//   password: string({ required_error: "Password is required" }).min(
//     6,
//     "Too short - Password must be at least 6 chars long."
//   ),
// });

// export default function ForgotPasswordConfirmForm() {
//   const [apiErrors, setApiErrors] = useState([]);
//   const navigate = useNavigate();
//   const [otp, setOtp] = useState("");
//   const [otpError, setOtpError] = useState("");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(forgotPwdConfirmSchema),
//   });

//   function onSubmit(data: any) {
//     setOtpError("");
//     const { password } = data;

//     if (otp.length !== 5) {
//       setOtpError("Too short - OTP must be 5 chars long.");
//     } else {
//       const email = localStorage.getItem("email") as string;

//       confirmPasswordReset({ email, otp: Number(otp), password })
//         .then(() => {
//           toast.success("Password reset successfully");
//           localStorage.removeItem("email");

//           return navigate("/login");
//         })
//         .catch((error) => {
//           setApiErrors(error.response.data);
//         });
//     }
//   }

//   return (
//     <div className="flex justify-content-center h-[100vh] text-white">
//       <div className="max-w-md min-w-[40%] min-h-[45%] mx-auto my-auto bg-gray-800 p-2 rounded">
//         <h1 className="text-2xl text-center font-semibold mb-4">
//           Reset Password
//         </h1>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Display errors */}
//           {apiErrors && apiErrors.length > 0 && (
//             <span className="mb-4 bg-red-500 p-2 w-full block">
//               <ul>
//                 {apiErrors.map((error: any) => (
//                   <li key={getKey()} className="italic">
//                     {error.message}
//                   </li>
//                 ))}
//               </ul>
//             </span>
//           )}
//           <div className="mb-4">
//             <label htmlFor="email" className="block mb-1">
//               OTP
//             </label>
//             <OTPInput
//               value={otp}
//               onChange={setOtp}
//               numInputs={5}
//               inputType="number"
//               inputStyle={{ width: "16%", height: "50px" }}
//               renderInput={(props) => (
//                 <input
//                   {...props}
//                   className="block border rounded focus:outline-none focus:border-blue-500 text-black"
//                 />
//               )}
//               containerStyle={{ justifyContent: "space-between" }}
//             />
//             {otpError && <span className="text-red-500">{otpError}</span>}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               {...register("password")}
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
//             />
//             {errors.password && (
//               <span className="text-red-500">
//                 {errors.password.message?.toString()}
//               </span>
//             )}
//           </div>
//           <input
//             type="submit"
//             value="Send"
//             className="bg-blue-500 px-5 py-2 w-full rounded cursor-pointer mb-4"
//           />
//           <hr />
//           <p className="text-center mt-6">
//             <span
//               onClick={() => alert("Clickeeeeeeeeeeeeeeeeeeeeeeeeeeeed")}
//               className="ml-2 text-blue-500 cursor-pointer"
//             >
//               Resend Code
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }
