"use client";
import { useProfile } from "@/components/UseProfile";
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";

export default function DoctorsPage() {
  const [users, setUsers] = useState([]);
  const { loading: profileLoading, data: profileData } = useProfile();

  useEffect(() => {
    fetch("/api/patients").then((response) => {
      response.json().then((users) => {
        setUsers(users);
      });
    });
  }, []);

  if (profileLoading) {
    return "Loading ...";
  }

  if (!profileData.admin) {
    return (
      <div className="text-center my-28 font-extrabold text-5xl">
        <p style={{ color: 'red' }}>Unauthorized!!!</p>
      </div>
    );
  }

  return (
    <>
      <Header color={"bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700"} />
      <section className="min-h-screen flex flex-col items-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-20">
        <div className="w-full max-w-6xl bg-white p-8 mt-11 rounded shadow-md">
          <h1 className="text-center font-bold text-3xl underline mb-6 text-gray-800">
            Patients Details
          </h1>
          {users?.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
                    <th className="py-3 px-4">No</th>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">City</th>
                    <th className="py-3 px-4">Country</th>
                    <th className="py-3 px-4">Phone</th>
                    <th className="py-3 px-4">Postal Code</th>
                    <th className="py-3 px-4">Street Address</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id || index} className="even:bg-gray-100 odd:bg-white">
                      <td className="py-3 px-4 text-center">{index + 1}</td>
                      <td className="py-3 px-4">{user?.name || "N/A"}</td>
                      <td className="py-3 px-4">{user.email}</td>
                      <td className="py-3 px-4">{user.userInfo?.city || "N/A"}</td>
                      <td className="py-3 px-4">{user.userInfo?.country || "N/A"}</td>
                      <td className="py-3 px-4">{user.userInfo?.phone || "N/A"}</td>
                      <td className="py-3 px-4">{user.userInfo?.postalCode || "N/A"}</td>
                      <td className="py-3 px-4">{user.userInfo?.streetAddress || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
