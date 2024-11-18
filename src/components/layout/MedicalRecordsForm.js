"use client";
import { useState, useEffect } from "react";
import { format } from 'date-fns';

export default function MedicalRecordsForm({ onSave, medicalRecords }) {
  const [formData, setFormData] = useState({
    email: medicalRecords?.email || "",
    userName: medicalRecords?.name || "",
    gestationalAge: medicalRecords?.medicalRecords?.gestationalAge || "",
    start: medicalRecords?.medicalRecords?.start ? format(new Date(medicalRecords?.medicalRecords?.start), 'yyyy-MM-dd') : "",
    dueDate: medicalRecords?.medicalRecords?.dueDate ? format(new Date(medicalRecords?.medicalRecords?.dueDate), 'yyyy-MM-dd') : "",
    children: medicalRecords?.medicalRecords?.children || "",
    gravida: medicalRecords?.medicalRecords?.gravida || "",
    para: medicalRecords?.medicalRecords?.para || "",
    lmp: medicalRecords?.medicalRecords?.lmp ? format(new Date(medicalRecords?.medicalRecords?.lmp), 'yyyy-MM-dd') : "",
    fullTermBirths: medicalRecords?.medicalRecords?.fullTermBirths || "",
    pretermBirths: medicalRecords?.medicalRecords?.pretermBirths || "",
    abortions: medicalRecords?.medicalRecords?.abortions || "",
    livingChildren: medicalRecords?.medicalRecords?.livingChildren || "",
    visitDate: medicalRecords?.medicalRecords?.visitDate ? format(new Date(medicalRecords?.medicalRecords?.visitDate), 'yyyy-MM-dd') : "",
    visitNumber: medicalRecords?.medicalRecords?.visitNumber || "",
    bloodPressure: medicalRecords?.medicalRecords?.bloodPressure || "",
    heartRate: medicalRecords?.medicalRecords?.heartRate || "",
    respiratoryRate: medicalRecords?.medicalRecords?.respiratoryRate || "",
    temperature: medicalRecords?.medicalRecords?.temperature || "",
    weight: medicalRecords?.medicalRecords?.weight || "",
    fundalHeight: medicalRecords?.medicalRecords?.fundalHeight || "",
    fetalHeartRate: medicalRecords?.medicalRecords?.fetalHeartRate || "",
    fetalMovement: medicalRecords?.medicalRecords?.fetalMovement || "No",
    presentation: medicalRecords?.medicalRecords?.presentation || "",
    position: medicalRecords?.medicalRecords?.position || "",
    dilation: medicalRecords?.medicalRecords?.dilation || "",
    effacement: medicalRecords?.medicalRecords?.effacement || "",
    station: medicalRecords?.medicalRecords?.station || "",
    vaginalBleeding: medicalRecords?.medicalRecords?.vaginalBleeding || "No",
    leakingFluid: medicalRecords?.medicalRecords?.leakingFluid || "No",
    contractions: medicalRecords?.medicalRecords?.contractions || "No",
    swellingSymptom: medicalRecords?.medicalRecords?.swellingSymptom || "No",
    headacheSymptom: medicalRecords?.medicalRecords?.headacheSymptom || "No",
    visualDisturbances: medicalRecords?.medicalRecords?.visualDisturbances || "No",
    abdominalPain: medicalRecords?.medicalRecords?.abdominalPain || "No",
    nauseaVomiting: medicalRecords?.medicalRecords?.nauseaVomiting || "No",
    urinarySymptoms: medicalRecords?.medicalRecords?.urinarySymptoms || "",
    bloodTypeRh: medicalRecords?.medicalRecords?.bloodTypeRh || "",
    hemoglobinHematocrit: medicalRecords?.medicalRecords?.hemoglobinHematocrit || "",
    urinalysis: medicalRecords?.medicalRecords?.urinalysis || "",
    glucoseScreening: medicalRecords?.medicalRecords?.glucoseScreening || "",
    groupBStrep: medicalRecords?.medicalRecords?.groupBStrep || "",
    ultrasoundDate: medicalRecords?.medicalRecords?.ultrasoundDate ? format(new Date(medicalRecords?.medicalRecords?.ultrasoundDate), 'yyyy-MM-dd') : "",
    ultrasoundFindings: medicalRecords?.medicalRecords?.ultrasoundFindings || "",
    estimatedFetalWeight: medicalRecords?.medicalRecords?.estimatedFetalWeight || "",
    fetalBiometry: medicalRecords?.medicalRecords?.fetalBiometry || "",
    amnioticFluidIndex: medicalRecords?.medicalRecords?.amnioticFluidIndex || "",
    placentalLocation: medicalRecords?.medicalRecords?.placentalLocation || "",
    tdap: medicalRecords?.medicalRecords?.tdap || "",
    fluVaccine: medicalRecords?.medicalRecords?.fluVaccine || "",
    otherVaccines: medicalRecords?.medicalRecords?.otherVaccines || "",
    currentMedications: medicalRecords?.medicalRecords?.currentMedications || "",
    dietNutrition: medicalRecords?.medicalRecords?.dietNutrition || "",
    exercise: medicalRecords?.medicalRecords?.exercise || "",
    signsOfPretermLabor: medicalRecords?.medicalRecords?.signsOfPretermLabor || "",
    signsOfPreeclampsia: medicalRecords?.medicalRecords?.signsOfPreeclampsia || "",
    laborDeliveryPlan: medicalRecords?.medicalRecords?.laborDeliveryPlan || "",
    breastfeeding: medicalRecords?.medicalRecords?.breastfeeding || "",
    postpartumCare: medicalRecords?.medicalRecords?.postpartumCare || "",
    patientConcerns: medicalRecords?.medicalRecords?.patientConcerns || "",
    followUpDate: medicalRecords?.medicalRecords?.followUpDate ? format(new Date(medicalRecords?.medicalRecords?.followUpDate), 'yyyy-MM-dd') : "",
    notes: medicalRecords?.medicalRecords?.notes || "",
  });

  useEffect(() => {
    setFormData({
      email: medicalRecords?.email || "",
      userName: medicalRecords?.name || "",
      gestationalAge: medicalRecords?.medicalRecords?.gestationalAge || "",
      start: medicalRecords?.medicalRecords?.start ? format(new Date(medicalRecords?.medicalRecords?.start), 'yyyy-MM-dd') : "",
      dueDate: medicalRecords?.medicalRecords?.dueDate ? format(new Date(medicalRecords?.medicalRecords?.dueDate), 'yyyy-MM-dd') : "",
      children: medicalRecords?.medicalRecords?.children || "",
      gravida: medicalRecords?.medicalRecords?.gravida || "",
      para: medicalRecords?.medicalRecords?.para || "",
      lmp: medicalRecords?.medicalRecords?.lmp ? format(new Date(medicalRecords?.medicalRecords?.lmp), 'yyyy-MM-dd') : "",
      fullTermBirths: medicalRecords?.medicalRecords?.fullTermBirths || "",
      pretermBirths: medicalRecords?.medicalRecords?.pretermBirths || "",
      abortions: medicalRecords?.medicalRecords?.abortions || "",
      livingChildren: medicalRecords?.medicalRecords?.livingChildren || "",
      visitDate: medicalRecords?.medicalRecords?.visitDate ? format(new Date(medicalRecords?.medicalRecords?.visitDate), 'yyyy-MM-dd') : "",
      visitNumber: medicalRecords?.medicalRecords?.visitNumber || "",
      bloodPressure: medicalRecords?.medicalRecords?.bloodPressure || "",
      heartRate: medicalRecords?.medicalRecords?.heartRate || "",
      respiratoryRate: medicalRecords?.medicalRecords?.respiratoryRate || "",
      temperature: medicalRecords?.medicalRecords?.temperature || "",
      weight: medicalRecords?.medicalRecords?.weight || "",
      fundalHeight: medicalRecords?.medicalRecords?.fundalHeight || "",
      fetalHeartRate: medicalRecords?.medicalRecords?.fetalHeartRate || "",
      fetalMovement: medicalRecords?.medicalRecords?.fetalMovement || "No",
      presentation: medicalRecords?.medicalRecords?.presentation || "",
      position: medicalRecords?.medicalRecords?.position || "",
      dilation: medicalRecords?.medicalRecords?.dilation || "",
      effacement: medicalRecords?.medicalRecords?.effacement || "",
      station: medicalRecords?.medicalRecords?.station || "",
      vaginalBleeding: medicalRecords?.medicalRecords?.vaginalBleeding || "No",
      leakingFluid: medicalRecords?.medicalRecords?.leakingFluid || "No",
      contractions: medicalRecords?.medicalRecords?.contractions || "No",
      swellingSymptom: medicalRecords?.medicalRecords?.swellingSymptom || "No",
      headacheSymptom: medicalRecords?.medicalRecords?.headacheSymptom || "No",
      visualDisturbances: medicalRecords?.medicalRecords?.visualDisturbances || "No",
      abdominalPain: medicalRecords?.medicalRecords?.abdominalPain || "No",
      nauseaVomiting: medicalRecords?.medicalRecords?.nauseaVomiting || "No",
      urinarySymptoms: medicalRecords?.medicalRecords?.urinarySymptoms || "",
      bloodTypeRh: medicalRecords?.medicalRecords?.bloodTypeRh || "",
      hemoglobinHematocrit: medicalRecords?.medicalRecords?.hemoglobinHematocrit || "",
      urinalysis: medicalRecords?.medicalRecords?.urinalysis || "",
      glucoseScreening: medicalRecords?.medicalRecords?.glucoseScreening || "",
      groupBStrep: medicalRecords?.medicalRecords?.groupBStrep || "",
      ultrasoundDate: medicalRecords?.medicalRecords?.ultrasoundDate ? format(new Date(medicalRecords?.medicalRecords?.ultrasoundDate), 'yyyy-MM-dd') : "",
      ultrasoundFindings: medicalRecords?.medicalRecords?.ultrasoundFindings || "",
      estimatedFetalWeight: medicalRecords?.medicalRecords?.estimatedFetalWeight || "",
      fetalBiometry: medicalRecords?.medicalRecords?.fetalBiometry || "",
      amnioticFluidIndex: medicalRecords?.medicalRecords?.amnioticFluidIndex || "",
      placentalLocation: medicalRecords?.medicalRecords?.placentalLocation || "",
      tdap: medicalRecords?.medicalRecords?.tdap || "",
      fluVaccine: medicalRecords?.medicalRecords?.fluVaccine || "",
      otherVaccines: medicalRecords?.medicalRecords?.otherVaccines || "",
      currentMedications: medicalRecords?.medicalRecords?.currentMedications || "",
      dietNutrition: medicalRecords?.medicalRecords?.dietNutrition || "",
      exercise: medicalRecords?.medicalRecords?.exercise || "",
      signsOfPretermLabor: medicalRecords?.medicalRecords?.signsOfPretermLabor || "",
      signsOfPreeclampsia: medicalRecords?.medicalRecords?.signsOfPreeclampsia || "",
      laborDeliveryPlan: medicalRecords?.medicalRecords?.laborDeliveryPlan || "",
      breastfeeding: medicalRecords?.medicalRecords?.breastfeeding || "",
      postpartumCare: medicalRecords?.medicalRecords?.postpartumCare || "",
      patientConcerns: medicalRecords?.medicalRecords?.patientConcerns || "",
      followUpDate: medicalRecords?.medicalRecords?.followUpDate ? format(new Date(medicalRecords?.medicalRecords?.followUpDate), 'yyyy-MM-dd') : "",
      notes: medicalRecords?.medicalRecords?.notes || "",
    });
  }, [medicalRecords]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Pregnancy Information</h1>
        <form onSubmit={(ev) =>
          onSave(ev, {
            email: medicalRecords.email,
            medicalRecords: formData,
          })
        }>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="text" name="email" value={formData?.email} readOnly className="w-full mt-2 p-2 border border-gray-300 rounded-lg bg-gray-100" />
            </div>
            <div>
              <label className="block text-gray-700">Name</label>
              <input type="text" name="userName" value={formData.userName} readOnly className="w-full mt-2 p-2 border border-gray-300 rounded-lg bg-gray-100" />
            </div>
            <div>
              <label className="block text-gray-700">Gestational Age (weeks)</label>
              <input type="text" name="gestationalAge" value={formData.gestationalAge} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Start Date</label>
              <input type="date" name="start" value={formData.start} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Due Date</label>
              <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Number Of Children</label>
              <input type="text" name="children" value={formData.children} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Gravida (Number of pregnancies)</label>
              <input type="text" name="gravida" value={formData.gravida} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Para (Number of births)</label>
              <input type="text" name="para" value={formData.para} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Last Menstrual Period (LMP)</label>
              <input type="date" name="lmp" value={formData.lmp} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Number of Full-Term Births</label>
              <input type="text" name="fullTermBirths" value={formData.fullTermBirths} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Number of Preterm Births</label>
              <input type="text" name="pretermBirths" value={formData.pretermBirths} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Number of Abortions/Miscarriages</label>
              <input type="text" name="abortions" value={formData.abortions} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Number of Living Children</label>
              <input type="text" name="livingChildren" value={formData.livingChildren} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Visit Date</label>
              <input type="date" name="visitDate" value={formData.visitDate} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Visit Number</label>
              <input type="text" name="visitNumber" value={formData.visitNumber} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Blood Pressure (mm Hg)</label>
              <input type="text" name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Heart Rate (bpm)</label>
              <input type="text" name="heartRate" value={formData.heartRate} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Respiratory Rate</label>
              <input type="text" name="respiratoryRate" value={formData.respiratoryRate} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Temperature (°F/°C)</label>
              <input type="text" name="temperature" value={formData.temperature} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Weight (lbs/kg)</label>
              <input type="text" name="weight" value={formData.weight} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Fundal Height (cm)</label>
              <input type="text" name="fundalHeight" value={formData.fundalHeight} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Fetal Heart Rate (bpm)</label>
              <input type="text" name="fetalHeartRate" value={formData.fetalHeartRate} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Fetal Movement</label>
              <select name="fetalMovement" value={formData.fetalMovement} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Presentation</label>
              <input type="text" name="presentation" value={formData.presentation} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Position</label>
              <input type="text" name="position" value={formData.position} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Dilation (cm)</label>
              <input type="text" name="dilation" value={formData.dilation} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Effacement (%)</label>
              <input type="text" name="effacement" value={formData.effacement} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Station</label>
              <input type="text" name="station" value={formData.station} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Vaginal Bleeding</label>
              <select name="vaginalBleeding" value={formData.vaginalBleeding} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Leaking Fluid</label>
              <select name="leakingFluid" value={formData.leakingFluid} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Contractions</label>
              <select name="contractions" value={formData.contractions} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Swelling</label>
              <select name="swellingSymptom" value={formData.swellingSymptom} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Headache</label>
              <select name="headacheSymptom" value={formData.headacheSymptom} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Visual Disturbances</label>
              <select name="visualDisturbances" value={formData.visualDisturbances} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Abdominal Pain</label>
              <select name="abdominalPain" value={formData.abdominalPain} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Nausea/Vomiting</label>
              <select name="nauseaVomiting" value={formData.nauseaVomiting} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Urinary Symptoms</label>
              <input type="text" name="urinarySymptoms" value={formData.urinarySymptoms} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Blood Type & Rh</label>
              <input type="text" name="bloodTypeRh" value={formData.bloodTypeRh} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Hemoglobin/Hematocrit</label>
              <input type="text" name="hemoglobinHematocrit" value={formData.hemoglobinHematocrit} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Urinalysis (Protein/Glucose)</label>
              <input type="text" name="urinalysis" value={formData.urinalysis} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Glucose Screening</label>
              <input type="text" name="glucoseScreening" value={formData.glucoseScreening} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Group B Streptococcus</label>
              <input type="text" name="groupBStrep" value={formData.groupBStrep} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Date of Ultrasound</label>
              <input type="date" name="ultrasoundDate" value={formData.ultrasoundDate} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Ultrasound Findings</label>
              <input type="text" name="ultrasoundFindings" value={formData.ultrasoundFindings} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Estimated Fetal Weight</label>
              <input type="text" name="estimatedFetalWeight" value={formData.estimatedFetalWeight} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Fetal Biometry (Head, Abdomen, Femur)</label>
              <input type="text" name="fetalBiometry" value={formData.fetalBiometry} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Amniotic Fluid Index</label>
              <input type="text" name="amnioticFluidIndex" value={formData.amnioticFluidIndex} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Placental Location</label>
              <input type="text" name="placentalLocation" value={formData.placentalLocation} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">TDAP</label>
              <input type="text" name="tdap" value={formData.tdap} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Flu Vaccine</label>
              <input type="text" name="fluVaccine" value={formData.fluVaccine} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Other Vaccines</label>
              <input type="text" name="otherVaccines" value={formData.otherVaccines} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Current Medications</label>
              <input type="text" name="currentMedications" value={formData.currentMedications} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Diet/Nutrition</label>
              <input type="text" name="dietNutrition" value={formData.dietNutrition} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Exercise</label>
              <input type="text" name="exercise" value={formData.exercise} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Signs of Preterm Labor</label>
              <input type="text" name="signsOfPretermLabor" value={formData.signsOfPretermLabor} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Signs of Pre-eclampsia</label>
              <input type="text" name="signsOfPreeclampsia" value={formData.signsOfPreeclampsia} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Labor/Delivery Plan</label>
              <input type="text" name="laborDeliveryPlan" value={formData.laborDeliveryPlan} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Breastfeeding</label>
              <input type="text" name="breastfeeding" value={formData.breastfeeding} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Postpartum Care</label>
              <input type="text" name="postpartumCare" value={formData.postpartumCare} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Patient Concerns/Questions</label>
              <textarea name="patientConcerns" value={formData.patientConcerns} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg"></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Next Appointment Date</label>
              <input type="date" name="followUpDate" value={formData.followUpDate} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="col-span-full">
              <label className="block text-gray-700">Notes/Comments</label>
              <textarea name="notes" value={formData.notes} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-lg"></textarea>
            </div>
          </div>
          <div className="text-center mt-8">
            <button type="submit" className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
