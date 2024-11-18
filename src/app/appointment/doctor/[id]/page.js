"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";

export default function AppointmentDetailsPage() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/profile?_id=${id}`).then((response) => {
        response.json().then((data) => {
          setUserDetails(data);
          console.log(data);
        });
      });
    }
  }, [id]);

  if (!userDetails) {
    return "Loading...";
  }

  return (
    <>
      <Header color={"bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700"} />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 p-4">
        <div className="max-w-5xl bg-white shadow-lg rounded-lg p-8 mx-4 mt-24 mb-20 w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">User Details</h1>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
              <div className="space-y-4">
                <p className="text-lg"><strong>Name:</strong> {userDetails?.name}</p>
                <p className="text-lg"><strong>Email:</strong> {userDetails?.email}</p>
                <p className="text-lg"><strong>Profile Created:</strong> {userDetails.createdAppointment ? "Yes" : "No"}</p>
                <p className="text-lg"><strong>Date of Birth:</strong> {userDetails.DOB ? new Date(userDetails.DOB).toLocaleDateString() : "N/A"}</p>
                <p className="text-lg"><strong>Phone:</strong> {userDetails.phone || "N/A"}</p>
                <p className="text-lg"><strong>Country:</strong> {userDetails.country || "N/A"}</p>
                <p className="text-lg"><strong>Gender:</strong> {userDetails.gender || "N/A"}</p>
                <p className="text-lg"><strong>Due Date:</strong> {userDetails.dueDate ? new Date(userDetails.dueDate).toLocaleDateString() : "N/A"}</p>
                <p className="text-lg"><strong>Weeks:</strong> {userDetails.weeks || "N/A"}</p>
                <p className="text-lg"><strong>Children:</strong> {userDetails.children || "N/A"}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <h2 className="text-2xl font-semibold mb-4">Medical Records</h2>
              <div className="space-y-4">
                <p className="text-lg"><strong>Fetal Heart Rate:</strong> {userDetails.medicalRecords?.fetalHeartRate}</p>
                <p className="text-lg"><strong>Diagnosis:</strong> {userDetails.medicalRecords?.diagnosis}</p>
                <p className="text-lg"><strong>Physical Examination:</strong> {userDetails.medicalRecords?.physicalExamination}</p>
                <p className="text-lg"><strong>Complaints:</strong> {userDetails.medicalRecords?.complaints}</p>
                <p className="text-lg"><strong>Non-Drug Prescription:</strong> {userDetails.medicalRecords?.nonDrugPrescription}</p>
                <p className="text-lg"><strong>Gestational Age:</strong> {userDetails.medicalRecords?.gestationalAge}</p>
                <p className="text-lg"><strong>Gravida:</strong> {userDetails.medicalRecords?.gravida}</p>
                <p className="text-lg"><strong>Para:</strong> {userDetails.medicalRecords?.para}</p>
                <p className="text-lg"><strong>LMP:</strong> {userDetails.medicalRecords?.lmp ? new Date(userDetails.medicalRecords.lmp).toLocaleDateString() : "N/A"}</p>
                <p className="text-lg"><strong>Full Term Births:</strong> {userDetails.medicalRecords?.fullTermBirths}</p>
                <p className="text-lg"><strong>Preterm Births:</strong> {userDetails.medicalRecords?.pretermBirths}</p>
                <p className="text-lg"><strong>Abortions:</strong> {userDetails.medicalRecords?.abortions}</p>
                <p className="text-lg"><strong>Living Children:</strong> {userDetails.medicalRecords?.livingChildren}</p>
                <p className="text-lg"><strong>Visit Date:</strong> {userDetails.medicalRecords?.visitDate ? new Date(userDetails.medicalRecords.visitDate).toLocaleDateString() : "N/A"}</p>
                <p className="text-lg"><strong>Visit Number:</strong> {userDetails.medicalRecords?.visitNumber}</p>
                <p className="text-lg"><strong>Blood Pressure:</strong> {userDetails.medicalRecords?.bloodPressure}</p>
                <p className="text-lg"><strong>Heart Rate:</strong> {userDetails.medicalRecords?.heartRate}</p>
                <p className="text-lg"><strong>Respiratory Rate:</strong> {userDetails.medicalRecords?.respiratoryRate}</p>
                <p className="text-lg"><strong>Temperature:</strong> {userDetails.medicalRecords?.temperature}</p>
                <p className="text-lg"><strong>Weight:</strong> {userDetails.medicalRecords?.weight}</p>
                <p className="text-lg"><strong>Fundal Height:</strong> {userDetails.medicalRecords?.fundalHeight}</p>
                <p className="text-lg"><strong>Fetal Movement:</strong> {userDetails.medicalRecords?.fetalMovement}</p>
                <p className="text-lg"><strong>Presentation:</strong> {userDetails.medicalRecords?.presentation}</p>
                <p className="text-lg"><strong>Position:</strong> {userDetails.medicalRecords?.position}</p>
                <p className="text-lg"><strong>Dilation:</strong> {userDetails.medicalRecords?.dilation}</p>
                <p className="text-lg"><strong>Effacement:</strong> {userDetails.medicalRecords?.effacement}</p>
                <p className="text-lg"><strong>Station:</strong> {userDetails.medicalRecords?.station}</p>
                <p className="text-lg"><strong>Vaginal Bleeding:</strong> {userDetails.medicalRecords?.vaginalBleeding}</p>
                <p className="text-lg"><strong>Leaking Fluid:</strong> {userDetails.medicalRecords?.leakingFluid}</p>
                <p className="text-lg"><strong>Contractions:</strong> {userDetails.medicalRecords?.contractions}</p>
                <p className="text-lg"><strong>Swelling Symptom:</strong> {userDetails.medicalRecords?.swellingSymptom}</p>
                <p className="text-lg"><strong>Headache Symptom:</strong> {userDetails.medicalRecords?.headacheSymptom}</p>
                <p className="text-lg"><strong>Visual Disturbances:</strong> {userDetails.medicalRecords?.visualDisturbances}</p>
                <p className="text-lg"><strong>Abdominal Pain:</strong> {userDetails.medicalRecords?.abdominalPain}</p>
                <p className="text-lg"><strong>Nausea/Vomiting:</strong> {userDetails.medicalRecords?.nauseaVomiting}</p>
                <p className="text-lg"><strong>Urinary Symptoms:</strong> {userDetails.medicalRecords?.urinarySymptoms}</p>
                <p className="text-lg"><strong>Blood Type & Rh:</strong> {userDetails.medicalRecords?.bloodTypeRh}</p>
                <p className="text-lg"><strong>Hemoglobin/Hematocrit:</strong> {userDetails.medicalRecords?.hemoglobinHematocrit}</p>
                <p className="text-lg"><strong>Urinalysis:</strong> {userDetails.medicalRecords?.urinalysis}</p>
                <p className="text-lg"><strong>Glucose Screening:</strong> {userDetails.medicalRecords?.glucoseScreening}</p>
                <p className="text-lg"><strong>Group B Strep:</strong> {userDetails.medicalRecords?.groupBStrep}</p>
                <p className="text-lg"><strong>Ultrasound Date:</strong> {userDetails.medicalRecords?.ultrasoundDate ? new Date(userDetails.medicalRecords.ultrasoundDate).toLocaleDateString() : "N/A"}</p>
                <p className="text-lg"><strong>Ultrasound Findings:</strong> {userDetails.medicalRecords?.ultrasoundFindings}</p>
                <p className="text-lg"><strong>Estimated Fetal Weight:</strong> {userDetails.medicalRecords?.estimatedFetalWeight}</p>
                <p className="text-lg"><strong>Fetal Biometry:</strong> {userDetails.medicalRecords?.fetalBiometry}</p>
                <p className="text-lg"><strong>Amniotic Fluid Index:</strong> {userDetails.medicalRecords?.amnioticFluidIndex}</p>
                <p className="text-lg"><strong>Placental Location:</strong> {userDetails.medicalRecords?.placentalLocation}</p>
                <p className="text-lg"><strong>TDAP:</strong> {userDetails.medicalRecords?.tdap}</p>
                <p className="text-lg"><strong>Flu Vaccine:</strong> {userDetails.medicalRecords?.fluVaccine}</p>
                <p className="text-lg"><strong>Other Vaccines:</strong> {userDetails.medicalRecords?.otherVaccines}</p>
                <p className="text-lg"><strong>Current Medications:</strong> {userDetails.medicalRecords?.currentMedications}</p>
                <p className="text-lg"><strong>Diet/Nutrition:</strong> {userDetails.medicalRecords?.dietNutrition}</p>
                <p className="text-lg"><strong>Exercise:</strong> {userDetails.medicalRecords?.exercise}</p>
                <p className="text-lg"><strong>Signs of Preterm Labor:</strong> {userDetails.medicalRecords?.signsOfPretermLabor}</p>
                <p className="text-lg"><strong>Signs of Preeclampsia:</strong> {userDetails.medicalRecords?.signsOfPreeclampsia}</p>
                <p className="text-lg"><strong>Labor/Delivery Plan:</strong> {userDetails.medicalRecords?.laborDeliveryPlan}</p>
                <p className="text-lg"><strong>Breastfeeding:</strong> {userDetails.medicalRecords?.breastfeeding}</p>
                <p className="text-lg"><strong>Postpartum Care:</strong> {userDetails.medicalRecords?.postpartumCare}</p>
                <p className="text-lg"><strong>Patient Concerns:</strong> {userDetails.medicalRecords?.patientConcerns}</p>
                <p className="text-lg"><strong>Follow Up Date:</strong> {userDetails.medicalRecords?.followUpDate ? new Date(userDetails.medicalRecords.followUpDate).toLocaleDateString() : "N/A"}</p>
                <p className="text-lg"><strong>Notes:</strong> {userDetails.medicalRecords?.notes}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <h2 className="text-2xl font-semibold mb-4">Symptoms</h2>
              <div className="space-y-4">
                <p className="text-lg"><strong>Morning Sickness:</strong> {userDetails.symptoms?.morning_sickness}</p>
                <p className="text-lg"><strong>Morning Sickness Notes:</strong> {userDetails.symptoms?.morning_sickness_notes}</p>
                <p className="text-lg"><strong>Fatigue:</strong> {userDetails.symptoms?.fatigue}</p>
                <p className="text-lg"><strong>Fatigue Notes:</strong> {userDetails.symptoms?.fatigue_notes}</p>
                <p className="text-lg"><strong>Breast Tenderness:</strong> {userDetails.symptoms?.breast_tenderness}</p>
                <p className="text-lg"><strong>Breast Tenderness Notes:</strong> {userDetails.symptoms?.breast_tenderness_notes}</p>
                <p className="text-lg"><strong>Headaches:</strong> {userDetails.symptoms?.headaches}</p>
                <p className="text-lg"><strong>Headaches Notes:</strong> {userDetails.symptoms?.headaches_notes}</p>
                <p className="text-lg"><strong>Cravings/Aversions:</strong> {userDetails.symptoms?.cravings_aversions}</p>
                <p className="text-lg"><strong>Mood Changes:</strong> {userDetails.symptoms?.mood_changes}</p>
                <p className="text-lg"><strong>Mood Changes Notes:</strong> {userDetails.symptoms?.mood_changes_notes}</p>
                <p className="text-lg"><strong>Back Pain:</strong> {userDetails.symptoms?.back_pain}</p>
                <p className="text-lg"><strong>Back Pain Notes:</strong> {userDetails.symptoms?.back_pain_notes}</p>
                <p className="text-lg"><strong>Swelling:</strong> {userDetails.symptoms?.swelling}</p>
                <p className="text-lg"><strong>Swelling Notes:</strong> {userDetails.symptoms?.swelling_notes}</p>
                <p className="text-lg"><strong>Heartburn:</strong> {userDetails.symptoms?.heartburn}</p>
                <p className="text-lg"><strong>Heartburn Notes:</strong> {userDetails.symptoms?.heartburn_notes}</p>
                <p className="text-lg"><strong>Urination:</strong> {userDetails.symptoms?.urination}</p>
                <p className="text-lg"><strong>Urination Notes:</strong> {userDetails.symptoms?.urination_notes}</p>
                <p className="text-lg"><strong>Sleep Disturbances:</strong> {userDetails.symptoms?.sleep_disturbances}</p>
                <p className="text-lg"><strong>Sleep Disturbances Notes:</strong> {userDetails.symptoms?.sleep_disturbances_notes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
