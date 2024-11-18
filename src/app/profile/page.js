"use client";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import countriesList from "react-select-country-list";
import { format, parseISO } from "date-fns";

export default function ProfilePage() {
  const session = useSession();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDoctor, setIsDoctor] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);
  const { status } = session;

  const countries = countriesList().getData();

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          setIsAdmin(data.admin);
          setIsDoctor(data.doctor);
          setIsVerified(data.isVerified);
          console.log(data.userId);

          const profileEndpoint = data.doctor ? "/api/doctor" : "/api/profile";
          
          fetch(profileEndpoint).then((profileResponse) => {
            profileResponse.json().then((profileData) => {
              setUser(profileData);
              setProfileFetched(true);
            });
          });
        });
      });
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev, data) {
    ev.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Saved!",
      error: "Error saving!",
    });
  }

  if (status === "loading" || !profileFetched) {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect('/login');
  }

  console.log(user);

  const countryName = countries.find(country => country.value === user?.country)?.label || "Unknown Country";

  const dueDate = user?.medicalRecords?.dueDate ? format(parseISO(user.medicalRecords.dueDate), "dd-MM-yyyy") : "Unknown";

  return (
    <>
      <Header color={"bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700"} />
      {isVerified ? (
        <section className="min-h-screen flex justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 ">
          <div className="flex flex-col md:flex-row w-full max-w-5xl p-4 gap-7 my-24">
            <NavBar user={user} />
            <div className="flex flex-col gap-6 w-full">
              <div className="bg-white p-6 shadow-lg rounded-xl mb-6">
                <h1 className="text-2xl font-bold mb-4">About</h1>
                <div className="flex flex-col gap-4">
                  <div className="flex">
                    <div className="w-1/3 font-semibold">Full Name</div>
                    <div className="w-2/3 text-gray-600">{user?.name || "User"}</div>
                  </div>
                  <hr />
                  <div className="flex">
                    <div className="w-1/3 font-semibold">Email</div>
                    <div className="w-2/3 text-gray-600">{user?.email}</div>
                  </div>
                  <hr />
                  <div className="flex">
                    <div className="w-1/3 font-semibold">Country</div>
                    <div className="w-2/3 text-gray-600">{countryName}</div>
                  </div>
                  <hr />
                  <div className="flex">
                    <div className="w-1/3 font-semibold">Phone</div>
                    <div className="w-2/3 text-gray-600">{user?.phone}</div>
                  </div>
                </div>
              </div>
              {(!isAdmin && !isDoctor) && (
                <div className="bg-white p-6 shadow-lg rounded-xl">
                  <h1 className="text-2xl font-bold mb-4">My Pregnancy</h1>
                  <div className="flex flex-col gap-4">
                    <div className="flex">
                      <div className="w-1/3 font-semibold">Due date</div>
                      <div className="w-2/3 text-gray-600">{dueDate}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-md text-center">
            <h2 className="text-xl font-bold mb-4">Account Not Verified</h2>
            <p className="mb-4">Please verify your account to access this page.</p>
            <Link href="/verifyCode" className="text-blue-500 underline">
              Go to Verification Page
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
