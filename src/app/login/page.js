"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Header from "@/components/layout/Header";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [error, setError] = useState("");

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      setError(result.error);
    } else {
      window.location.href = "/profile";
    }

    setLoginInProgress(false);
  }

  return (
    <>
      <Header
        color={"bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700"}
      />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-20">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg mt-3">
          <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
            Log In
          </h1>
          {error && (
            <div className="my-4 text-center text-red-600 font-semibold">
              {error}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                disabled={loginInProgress}
                onChange={(ev) => setEmail(ev.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                disabled={loginInProgress}
                onChange={(ev) => setPassword(ev.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
            <button
              type="submit"
              disabled={loginInProgress}
              className="block w-full text-white bg-purple-600 hover:bg-purple-700 font-semibold rounded-lg px-6 py-3 transition"
            >
              LOGIN
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-500">
              Forgot Password?{" "}
              <Link
                className="underline text-blue-500"
                href={"/forgotPassword"}
              >
                Reset here &raquo;
              </Link>
            </p>
            <p className="text-gray-500 mt-2">
              Don&apos;t have an account?{" "}
              <Link className="underline text-blue-500" href={"/register"}>
                Register here &raquo;
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
