"use client";
import { useProfile } from "@/components/UseProfile";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import MedicalRecordsForm from "@/components/layout/MedicalRecordsForm";
import Header from "@/components/layout/Header";

export default function EditUserPage() {
  const { loading: profileLoading, data: profileData } = useProfile();
  const { id } = useParams();
  const { data: session, status } = useSession();
  const [symptoms, setSymptoms] = useState(null);

 

  useEffect(() => {
    fetch("/api/appointment?_id=" + id).then((response) => {
      response.json().then((symptom) => {
        setSymptoms(symptom);
        console.log(symptom)
      });
    });
  }, [id]);

  

  async function handleSaveButtonClick(ev, data) {
    ev.preventDefault();
    const savePromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: data.id, email: data.email, ...data }),
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
      <Header color={"bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700"} />
      <section className="min-h-screen flex justify-center items-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-20">
        <div className="w-full max-w-4xl mx-auto shadow-xl rounded-lg my-7">
          <MedicalRecordsForm onSave={handleSaveButtonClick} medicalRecords={symptoms} />
        </div>
      </section>
    </>
  );
}
