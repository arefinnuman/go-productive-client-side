import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BiErrorAlt } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const SignIn = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");

  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //   const handleReset = () => {
  //     resetPassword(userInfo.email)
  //       .then(() => {
  //         Swal.fire("Reset link has been sent, please check email");
  //       })
  //       .catch((error) => toast.error(error.message));
  //   };

  return (
    <section>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-96 p-8 ">
          <div>
            {loginError && (
              <p className="text-red-500 flex items-center">
                {" "}
                <BiErrorAlt className="mr-4" /> {loginError}
              </p>
            )}
          </div>
          <h2 className="text-xl font-semibold">Login Here</h2>

          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="mt-5 w-full max-w-xs">
              <label>
                <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Email
                </span>
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="email"
                placeholder=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-error text-xs">{errors.email?.message}</p>
              )}
            </div>
            <div className="mt-2">
              <label>
                <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Password
                </span>
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters",
                  },
                })}
                type="password"
                placeholder=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.password && (
                <p className="text-xs text-error">{errors.password?.message}</p>
              )}
              <Link className="hover:underline">
                <label className="label mb-2">
                  <span className="text-xs">Forget Password?</span>
                </label>
              </Link>
            </div>

            <input
              className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              value="Login"
              type="submit"
            />
          </form>
          <p className="my-4 text-sm ">
            New User ?{" "}
            <Link className="text-primary" to="/sign-up">
              {" "}
              Create a new account
            </Link>
          </p>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <svg
              class="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
