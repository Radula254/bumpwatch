import { useState, useEffect } from "react";
import mongoose from "mongoose";

export default function BookAppointmentForm({ user, onSave }) {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [doctor, setDoctor] = useState([]);
  const [email, setEmail] = useState(user?.email || "");
  const [userName, setUserName] = useState(user?.name || "");

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setUserName(user.name);
    }
  }, [user]);

  useEffect(() => {
    fetch("/api/doctors").then((res) => {
      res.json().then((doctor) => {
        setDoctor(doctor);
      });
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 shadow-xl rounded-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">User Details</h1>
      <form
        className="w-full max-w-md"
        onSubmit={(ev) => {
          ev.preventDefault();
          onSave(ev, {
            selectedDoctor: mongoose.Types.ObjectId.isValid(selectedDoctor)
              ? new mongoose.Types.ObjectId(selectedDoctor)
              : undefined,
            email,
            name: userName,
            createdAppointment: true,
          });
        }}
      >
        <div className="flex flex-col mb-6">
          <label className="font-semibold text-gray-700 mb-2">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={userName}
            disabled
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label className="font-semibold text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            disabled
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label className="font-semibold text-gray-700 mb-2">
            Selected Doctor:
          </label>
          <select
            value={selectedDoctor}
            onChange={(ev) => setSelectedDoctor(ev.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
          >
            <option value="" disabled>
              Select a doctor
            </option>
            {doctor?.length > 0 &&
              doctor.map((d) => (
                <option key={d._id} value={d._id}>
                  {d.name}
                </option>
              ))}
          </select>
        </div>

        <button
          type="submit"
          className="block w-full text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 rounded-lg px-6 py-2 mt-6"
        >
          Save Details
        </button>
      </form>
    </div>
  );
}
