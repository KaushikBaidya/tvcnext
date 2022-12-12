import React, { useEffect } from "react";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useGlobalContext } from "../context/context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { usePostData } from "../hooks/DataApi";
import Input from "../components/admin/Input";
import Link from "next/link";
import Cookies from "universal-cookie";

const schema = yup.object({
  username: yup.string().required("Required.").max(50),
  password: yup
    .string()
    .max(20)
    .required("Required")
    .min(8, "Password is too short, at least 8 characters"),
});

export default function Login() {
  const router = useRouter();
  const value = useGlobalContext();
  const { mutateAsync } = usePostData();
  const cookie = new Cookies();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const { username, password } = errors;

  const onSubmit = async (formData) => {
    try {
      await mutateAsync({
        path: "/login",
        formData: formData,
      }).then((response) => {
        console.log(response);
        if (response.data.message === "Login Success") {
          toast.success("Log In");
          value.setUser(response.data.fullname);
          value.setToken(response.data.token);
          cookie.set("token", response.data.token);
          router.push("/dashboard");
        } else {
          toast.error(response.data.message);
        }
      });
    } catch (error) {
      toast.error(error);
    } finally {
      reset();
    }
  };

  useEffect(() => {
    if (value?.user) {
      router.push("/dashboard");
    }
  });

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Log in
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-col">
            <Input
              name="username"
              label="User Name"
              type="text"
              register={register}
              errorMessage={username?.message}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              register={register}
              errorMessage={password?.message}
            />
          </div>
          <div className="mt-6">
            <button className="save-btn">Login</button>
            <p className="pt-8 text-center text-sm text-black">
              No account?{" "}
              <Link className="underline" href="/register">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
