"use client";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useProfile } from "@/components/UseProfile";
import BookAppointmentForm from "@/components/layout/BookAppointment";
import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import toast from "react-hot-toast";

export default function EditUserPage() {
  const [user, setUser] = useState(null);
  const { loading: profileLoading, data: profileData } = useProfile();
  const { id } = useParams();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          setUser(data);
        });
      });
    }
  }, [session, status]);

  async function handleSaveButtonClick(ev, data) {
    ev.preventDefault();
    const savePromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/bookAppointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(savePromise, {
      loading: "Saving...",
      success: "Saved",
      error: "Error saving!!",
    });

    window.location.href = "/profile";
  }

  if (profileLoading || status === "loading") {
    return "Loading ...";
  }

  return (
    <>
      <Header
        color={"bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700"}
      />
      <section className="min-h-screen flex justify-center items-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-20">
        <div className="w-full max-w-4xl my-7 mx-auto shadow-xl rounded-lg">
          <BookAppointmentForm user={user} onSave={handleSaveButtonClick} />
        </div>
      </section>
    </>
  );
}
