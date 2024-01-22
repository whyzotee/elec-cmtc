"use client";
import Image from "next/image";
import { setCookie } from "cookies-next";
import { basePath } from "@/lib/setting";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const [disableSubmit, setDisableSubmit] = useState<any>(false);

  const [userData, setUserData] = useState<any>({
    username: null,
    password: null,
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (disableSubmit) return;

    if (userData.username == null || userData.password == null) {
      toast.error("username or password be not null");
      return;
    }

    const response: Response = await fetch(`${basePath}/api/login.php`, {
      method: "POST",
      body: JSON.stringify(userData),
    });

    try {
      const res = await response.json();

      if (res.error != null) {
        return toast.error(res.error);
      }
      setDisableSubmit(true);
      toast.success(res.message);

      setCookie("key", true);

      setTimeout(() => {
        setDisableSubmit(false);
        window.location.replace("/dashboard");
      }, 2000);
    } catch (error: any) {
      toast.error(error.toString());
    }
  }

  return (
    <main className="max-w-7xl mx-auto my-24">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{ duration: 2000 }}
      />
      <div className="flex flex-col justify-center items-center">
        <form
          onSubmit={onSubmit}
          className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
        >
          <Image
            src="/images/elec_logo.svg"
            alt="elec_logo"
            className="m-auto"
            height={150}
            width={150}
          />
          <h1 className="text-xl text-center">โปรดเข้าสู่ระบบ</h1>
          <br />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ชื่อผู้ใช้งาน
            </label>
            <input
              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              onChange={(event) => {
                setUserData({ ...userData, username: event.target.value });
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setUserData({ ...userData, password: event.target.value });
              }}
            />
          </div>
          <div className="mb-4 flex justify-end">
            <a
              className="font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              ลืมรหัสผ่าน?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-center text-blue-500 border-2 border-blue-500 px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors"
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </main>
  );
}
