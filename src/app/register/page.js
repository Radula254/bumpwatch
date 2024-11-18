"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/layout/Header";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    const minLength = 8;
    const specialCharRegex = /[@$&*#!]/;
    if (password.length < minLength) {
      return "Password must be at least 8 characters long.";
    }
    if (!specialCharRegex.test(password)) {
      return "Password must include one or more special characters (@$&*#!).";
    }
    return "";
  };

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError("");
    setUserCreated(false);
    setPasswordError("");

    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      setCreatingUser(false);
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "An error has occurred.");
      } else {
        setUserCreated(true);
        setEmailSent(true);
        window.location.href = "/verifyCode";
      }
    } catch (err) {
      setError("There was an error. Try again later.");
    } finally {
      setCreatingUser(false);
    }
  }

  return (
    <>
      <Header color={"bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700"} />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-20">
        <div className="max-w-md w-full bg-white px-8 py-10 mt-7 rounded-lg shadow-lg">
          <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">Register</h1>
          {userCreated && (
            <div className="my-4 text-center text-green-600 font-semibold">
              User created. Now you can{" "}
              <Link className="underline text-blue-500" href={"/verifyCode"}>
                Verify &raquo;
              </Link>
            </div>
          )}
          {emailSent && (
            <div className="my-4 text-center text-green-600">
              A verification code has been sent.
            </div>
          )}
          {error && (
            <div className="my-4 text-center text-red-600 font-semibold">
              {error}
            </div>
          )}
          {passwordError && (
            <div className="my-4 text-center text-red-600 font-semibold">
              {passwordError}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First and Last Name</label>
              <input
                type="text"
                placeholder="First and last name"
                value={name}
                disabled={creatingUser}
                onChange={(ev) => setName(ev.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                disabled={creatingUser}
                onChange={(ev) => setEmail(ev.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                disabled={creatingUser}
                onChange={(ev) => setPassword(ev.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
            <button
              type="submit"
              disabled={creatingUser}
              className="block w-full text-white bg-purple-600 hover:bg-purple-700 font-semibold rounded-lg px-6 py-3 transition"
            >
              Register
            </button>
          </form>
          <div className="text-center my-4 text-gray-500 border-t pt-4">
            Already have an account?{" "}
            <Link className="underline text-blue-500" href={"/login"}>
              Login here &raquo;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
