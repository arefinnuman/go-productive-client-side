import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signUp, updateUser, signInWithGoogle } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  //   const [createdUserEmail, setCreatedUserEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (data) => {
    setSignUpError("");
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success("User Created Successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            // saveUserToDb(data.email, data.name, data.role);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
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

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="w-96 p-8">
        <h2 className="text-xl font-semibold">Sign Up Here</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="mt-5 w-full max-w-xs">
            <label className="label">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </span>
            </label>
            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="name"
              placeholder=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name?.message}</p>
            )}
          </div>
          <div className="w-full max-w-xs">
            <label>
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
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
              <p className="text-red-500 text-xs">{errors.email?.message}</p>
            )}
          </div>
          <div className=" w-full max-w-xs">
            <label>
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$/,
                  message: "password must be strong",
                },
              })}
              type="password"
              placeholder=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password?.message}</p>
            )}
          </div>

          {errors.password && (
            <p className="text-xs text-red-500">{errors.password?.message}</p>
          )}

          <input
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            value="Sign up"
            type="submit"
          />
          {signUpError && <p className="text-red-500">{signUpError}</p>}
        </form>
        <p className="my-4 text-sm ">
          Have an account ?{" "}
          <Link className="text-sm" to="/login">
            {" "}
            Login Now
          </Link>
        </p>

        {/* Sign In with Google */}
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
    </section>
  );
};

export default SignUp;
