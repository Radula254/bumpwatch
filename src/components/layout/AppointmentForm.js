import { useState, useEffect } from "react";

export default function AppointmentForm({ user, onSave, symptoms }) {
  const [formData, setFormData] = useState({
    morning_sickness: symptoms?.symptoms?.morning_sickness || "",
    morning_sickness_notes: symptoms?.symptoms?.morning_sickness_notes || "",
    fatigue: symptoms?.symptoms?.fatigue || "",
    fatigue_notes: symptoms?.symptoms?.fatigue_notes || "",
    breast_tenderness: symptoms?.symptoms?.breast_tenderness || "",
    breast_tenderness_notes: symptoms?.symptoms?.breast_tenderness_notes || "",
    headaches: symptoms?.symptoms?.headaches || "",
    headaches_notes: symptoms?.symptoms?.headaches_notes || "",
    cravings_aversions: symptoms?.symptoms?.cravings_aversions || "",
    mood_changes: symptoms?.symptoms?.mood_changes || "",
    mood_changes_notes: symptoms?.symptoms?.mood_changes_notes || "",
    back_pain: symptoms?.symptoms?.back_pain || "",
    back_pain_notes: symptoms?.symptoms?.back_pain_notes || "",
    swelling: symptoms?.symptoms?.swelling || "",
    swelling_notes: symptoms?.symptoms?.swelling_notes || "",
    heartburn: symptoms?.symptoms?.heartburn || "",
    heartburn_notes: symptoms?.symptoms?.heartburn_notes || "",
    urination: symptoms?.symptoms?.urination || "",
    urination_notes: symptoms?.symptoms?.urination_notes || "",
    sleep_disturbances: symptoms?.symptoms?.sleep_disturbances || "",
    sleep_disturbances_notes: symptoms?.symptoms?.sleep_disturbances_notes || ""
  });

  useEffect(() => {
    setFormData({
      morning_sickness: symptoms?.symptoms?.morning_sickness || "",
      morning_sickness_notes: symptoms?.symptoms?.morning_sickness_notes || "",
      fatigue: symptoms?.symptoms?.fatigue || "",
      fatigue_notes: symptoms?.symptoms?.fatigue_notes || "",
      breast_tenderness: symptoms?.symptoms?.breast_tenderness || "",
      breast_tenderness_notes: symptoms?.symptoms?.breast_tenderness_notes || "",
      headaches: symptoms?.symptoms?.headaches || "",
      headaches_notes: symptoms?.symptoms?.headaches_notes || "",
      cravings_aversions: symptoms?.symptoms?.cravings_aversions || "",
      mood_changes: symptoms?.symptoms?.mood_changes || "",
      mood_changes_notes: symptoms?.symptoms?.mood_changes_notes || "",
      back_pain: symptoms?.symptoms?.back_pain || "",
      back_pain_notes: symptoms?.symptoms?.back_pain_notes || "",
      swelling: symptoms?.symptoms?.swelling || "",
      swelling_notes: symptoms?.symptoms?.swelling_notes || "",
      heartburn: symptoms?.symptoms?.heartburn || "",
      heartburn_notes: symptoms?.symptoms?.heartburn_notes || "",
      urination: symptoms?.symptoms?.urination || "",
      urination_notes: symptoms?.symptoms?.urination_notes || "",
      sleep_disturbances: symptoms?.symptoms?.sleep_disturbances || "",
      sleep_disturbances_notes: symptoms?.symptoms?.sleep_disturbances_notes || ""
    });
  }, [symptoms]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 shadow-xl rounded-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Symptoms Log</h1>
      <form
        className="w-full max-w-md"
        onSubmit={(ev) =>
          onSave(ev, {
            email: user?.email,
            createdAppointment: true,
            symptoms: formData,
          })
        }
      >
        <div className="flex flex-col mb-6">
          <label className="font-semibold text-gray-700 mb-2">Morning Sickness (Nausea/Vomiting):</label>
          {["none", "mild", "moderate", "severe"].map((level) => (
            <div key={level} className="flex items-center mb-1">
              <input
                type="radio"
                id={`morning_sickness_${level}`}
                name="morning_sickness"
                value={level}
                checked={formData.morning_sickness === level}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`morning_sickness_${level}`} className="text-gray-600">{level.charAt(0).toUpperCase() + level.slice(1)}</label>
            </div>
          ))}
          <textarea
            name="morning_sickness_notes"
            placeholder="Notes..."
            value={formData.morning_sickness_notes}
            onChange={handleChange}
            className="mt-3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
          ></textarea>
        </div>

        {[
          { label: "Fatigue", name: "fatigue", notes: "fatigue_notes" },
          { label: "Breast Tenderness", name: "breast_tenderness", notes: "breast_tenderness_notes" },
          { label: "Headaches", name: "headaches", notes: "headaches_notes" },
          { label: "Mood Changes", name: "mood_changes", notes: "mood_changes_notes" },
          { label: "Back Pain", name: "back_pain", notes: "back_pain_notes" },
          { label: "Swelling (Hands/Feet/Ankles)", name: "swelling", notes: "swelling_notes" },
          { label: "Heartburn/Indigestion", name: "heartburn", notes: "heartburn_notes" },
          { label: "Urination Frequency", name: "urination", notes: "urination_notes" },
          { label: "Sleep Disturbances", name: "sleep_disturbances", notes: "sleep_disturbances_notes" },
        ].map((symptom, idx) => (
          <div className="flex flex-col mb-6" key={idx}>
            <label className="font-semibold text-gray-700 mb-2">{symptom.label}:</label>
            {["none", "mild", "moderate", "severe"].map((level) => (
              <div key={level} className="flex items-center mb-1">
                <input
                  type="radio"
                  id={`${symptom.name}_${level}`}
                  name={symptom.name}
                  value={level}
                  checked={formData[symptom.name] === level}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={`${symptom.name}_${level}`} className="text-gray-600">{level.charAt(0).toUpperCase() + level.slice(1)}</label>
              </div>
            ))}
            <textarea
              name={symptom.notes}
              placeholder="Notes..."
              value={formData[symptom.notes]}
              onChange={handleChange}
              className="mt-3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            ></textarea>
          </div>
        ))}

        <button
          type="submit"
          className="block w-full text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 rounded-lg px-6 py-2 mt-6"
        >
          Save
        </button>
      </form>
    </div>
  );
}
