"use client";
import Header from "@/components/layout/Header";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); 
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);

    const requestBody = {
      email,
      password,
      [role]: true, 
    };

    const response = await fetch("/api/registerStaff", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      setError(true);
      toast.error("An error has occurred. Please try again later.");
    } else {
      setUserCreated(true);
      toast.success("Staff added successfully.");
    }
    setCreatingUser(false);
  }

  return (
    <>
      <Header color={"bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700"} />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-20">
        <Toaster />
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">Sign Up</h1>
          {userCreated && (
            <div className="my-4 text-center text-green-600 font-semibold">
              Staff Added Successfully.
            </div>
          )}
          {error && (
            <div className="my-4 text-center text-red-600 font-semibold">
              An error has occurred. Please try again later.
            </div>
          )}
          <form className="space-y-6" onSubmit={handleFormSubmit}>
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Role</label>
              <div className="flex flex-wrap gap-4">
                {["admin", "doctor"].map((roleOption) => (
                  <label key={roleOption} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="role"
                      value={roleOption}
                      checked={role === roleOption}
                      onChange={(ev) => setRole(ev.target.value)}
                      className="form-radio h-4 w-4 text-primary focus:ring-primary border-gray-300"
                    />
                    <span className="capitalize">{roleOption}</span>
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              disabled={creatingUser}
              className="block w-full text-white bg-purple-600 hover:bg-purple-700 font-semibold rounded-lg px-6 py-3 transition"
            >
              Register
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
