"use client";
import { useProfile } from "@/components/UseProfile";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import { toast } from "react-hot-toast";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const { loading: profileLoading, data: profileData } = useProfile();

  useEffect(() => {
    if (profileData?.doctor) {
      const userId = profileData?._id;
      const role = profileData?.doctor;

      fetch(`/api/bookedAppointments?userId=${userId}&role=${role}`).then((response) => {
        response.json().then((users) => {
          setUsers(users);
        });
      });
    }
  }, [profileData]);

  const handleDelete = async (userEmail) => {
    const deletePromise = new Promise(async (resolve, reject) => {
      const response = await fetch(`/api/update`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail }),
      });

      if (response.ok) {
        resolve();
        setUsers(users.filter(user => user.email !== userEmail));
      } else {
        reject();
      }
    });

    await toast.promise(deletePromise, {
      loading: "Deleting...",
      success: "Deleted successfully",
      error: "Error deleting",
    });
  };

  if (profileLoading) {
    return "Loading ...";
  }

  if (!profileData?.doctor) {
    return (
      <div className="text-center my-28 font-extrabold text-5xl">
        <p style={{ color: 'red' }}>Unauthorized!!!</p>
      </div>
    )
  }

  return (
    <>
      <Header color={"bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700"} />
      <section className="min-h-screen flex flex-col items-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-20">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 mt-10 text-center">My Patients</h1>
          <div className="mt-8">
            {users?.filter(user => user?.userInfo?.medicalRecords?.medical === true).length > 0 ? (
              users.filter(user => user?.userInfo?.medicalRecords?.medical === true).map((user) => (
                <div key={user._id} className="bg-white border border-gray-200 rounded-xl shadow-lg mb-6 p-6 flex items-center gap-6">
                  <div className="flex flex-col md:flex-row md:items-center w-full">
                    <div className="flex-grow text-gray-800">
                      <div className="flex items-center mb-2">
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 1a9 9 0 100 18 9 9 0 000-18zm0 16a7 7 0 100-14 7 7 0 000 14z" clipRule="evenodd"></path>
                            <path fillRule="evenodd" d="M10 3a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-semibold">{user.name || <span className="italic">No Name</span>}</h3>
                          <p className="text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-4 flex gap-4">
                      <Link className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition" href={`/appointment/${profileData?.doctor ? "doctor" : "nurse"}/${user._id}`}>
                        View
                      </Link>
                      <button
                        onClick={() => handleDelete(user.email)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No Appointments Booked</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
