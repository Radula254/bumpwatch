"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import { PieChart } from 'react-minimal-pie-chart';
import toast, { Toaster } from 'react-hot-toast';

const calculateTimeLeft = (dueDate) => {
  const difference = +new Date(dueDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const calculateProgress = (startDate, dueDate) => {
  if (!startDate || !dueDate) return 0;

  const start = new Date(startDate);
  const due = new Date(dueDate);
  const now = new Date();

  if (isNaN(start) || isNaN(due)) return 0;

  const totalDuration = due - start;
  const elapsed = now - start;
  const progress = (elapsed / totalDuration) * 100;
  return progress.toFixed(2);
};

const immunizationSchedule = [
  {
    age: "Birth",
    vaccines: ["Hepatitis B (HepB): 1st dose", "Bacille Calmette-Guérin (BCG): 1st dose"],
    color: "bg-pink-100",
    dueDate: null,
    completed: false,
  },
  {
    age: "1-2 Months",
    vaccines: ["Hepatitis B (HepB): 2nd dose"],
    color: "bg-purple-100",
    dueDate: null,
    completed: false,
  },
  {
    age: "2 Months",
    vaccines: [
      "Diphtheria, Tetanus, and acellular Pertussis (DTaP): 1st dose",
      "Haemophilus influenzae type b (Hib): 1st dose",
      "Inactivated Poliovirus (IPV): 1st dose",
      "Pneumococcal Conjugate (PCV13): 1st dose",
      "Rotavirus (RV): 1st dose",
    ],
    color: "bg-yellow-100",
    dueDate: null,
    completed: false,
  },
  {
    age: "4 Months",
    vaccines: [
      "Diphtheria, Tetanus, and acellular Pertussis (DTaP): 2nd dose",
      "Haemophilus influenzae type b (Hib): 2nd dose",
      "Inactivated Poliovirus (IPV): 2nd dose",
      "Pneumococcal Conjugate (PCV13): 2nd dose",
      "Rotavirus (RV): 2nd dose",
    ],
    color: "bg-green-100",
    dueDate: null,
    completed: false,
  },
  {
    age: "6 Months",
    vaccines: [
      "Diphtheria, Tetanus, and acellular Pertussis (DTaP): 3rd dose",
      "Haemophilus influenzae type b (Hib): 3rd dose (if needed, depending on the brand of vaccine)",
      "Inactivated Poliovirus (IPV): 3rd dose",
      "Pneumococcal Conjugate (PCV13): 3rd dose",
      "Rotavirus (RV): 3rd dose (if needed, depending on the brand of vaccine)",
      "Hepatitis B (HepB): 3rd dose (between 6-18 months)",
      "Influenza (Flu): Annual vaccination starting at 6 months",
    ],
    color: "bg-blue-100",
    dueDate: null,
    completed: false,
  },
  {
    age: "12-15 Months",
    vaccines: [
      "Haemophilus influenzae type b (Hib): 3rd or 4th dose (depending on brand)",
      "Pneumococcal Conjugate (PCV13): 4th dose",
      "Measles, Mumps, and Rubella (MMR): 1st dose",
      "Varicella (VAR): 1st dose",
      "Hepatitis A (HepA): 1st dose (2 doses spaced at least 6 months apart)",
    ],
    color: "bg-red-100",
    dueDate: null,
    completed: false,
  },
  {
    age: "15-18 Months",
    vaccines: ["Diphtheria, Tetanus, and acellular Pertussis (DTaP): 4th dose"],
    color: "bg-indigo-100",
    dueDate: null,
    completed: false,
  },
  {
    age: "4-6 Years",
    vaccines: [
      "Diphtheria, Tetanus, and acellular Pertussis (DTaP): 5th dose",
      "Inactivated Poliovirus (IPV): 4th dose",
      "Measles, Mumps, and Rubella (MMR): 2nd dose",
      "Varicella (VAR): 2nd dose",
    ],
    color: "bg-teal-100",
    dueDate: null,
    completed: false,
  },
];

const calculateImmunizationDueDates = (startDate) => {
  const dueDates = [];
  immunizationSchedule.forEach((schedule, index) => {
    const dueDate = new Date(startDate);
    switch (index) {
      case 0:
        break;
      case 1:
        dueDate.setMonth(dueDate.getMonth() + 1);
        break;
      case 2:
        dueDate.setMonth(dueDate.getMonth() + 2);
        break;
      case 3:
        dueDate.setMonth(dueDate.getMonth() + 4);
        break;
      case 4:
        dueDate.setMonth(dueDate.getMonth() + 6);
        break;
      case 5:
        dueDate.setMonth(dueDate.getMonth() + 12);
        break;
      case 6:
        dueDate.setMonth(dueDate.getMonth() + 15);
        break;
      case 7:
        dueDate.setFullYear(dueDate.getFullYear() + 4);
        break;
      default:
        break;
    }
    dueDates.push({ ...schedule, dueDate });
  });
  return dueDates;
};

export default function ProgressPage() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});
  const [progress, setProgress] = useState(0);
  const [immunizationDueDates, setImmunizationDueDates] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`/api/profile?_id=${id}`).then((response) => {
        response.json().then((data) => {
          setUserDetails(data);
          if (data?.medicalRecords?.start && data?.medicalRecords?.dueDate) {
            setTimeLeft(calculateTimeLeft(data?.medicalRecords?.dueDate));
            setProgress(calculateProgress(data?.medicalRecords?.start, data?.medicalRecords?.dueDate));
            setImmunizationDueDates(calculateImmunizationDueDates(data.medicalRecords.dueDate));
          }
        });
      });
    }
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (userDetails && userDetails.medicalRecords?.dueDate) {
        setTimeLeft(calculateTimeLeft(userDetails.medicalRecords.dueDate));
        setProgress(calculateProgress(userDetails.medicalRecords.start, userDetails.medicalRecords.dueDate));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [userDetails, timeLeft]);

  useEffect(() => {
    const now = new Date();
    immunizationDueDates.forEach((schedule) => {
      const oneDayBefore = new Date(schedule.dueDate);
      oneDayBefore.setDate(oneDayBefore.getDate() - 1);
      if (oneDayBefore <= now && !schedule.completed) {
        toast(`Immunization due soon: ${schedule.age} - ${schedule.vaccines.join(", ")}`, {
          duration: 8000,
          icon: '🩺',
        });
        schedule.completed = true;
      }
    });
  }, [immunizationDueDates, userDetails]);

  const timeLeftMessage = timeLeft.days !== undefined 
    ? `${timeLeft.days} Days ${timeLeft.hours} Hours ${timeLeft.minutes} Minutes ${timeLeft.seconds} Seconds` 
    : "Baby is here!";

  return (
    <>
      <Header color={"bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700"} />
      <Toaster />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-20">
        <div className="max-w-lg w-full bg-white p-8 mt-7 rounded-lg shadow-lg text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Time Until Birth</h1>
          <div className="text-2xl text-gray-600 mb-6">{timeLeftMessage}</div>
          <PieChart
            data={[
              { title: 'Progress', value: parseFloat(progress), color: '#E38627' },
              { title: 'Remaining', value: 100 - parseFloat(progress), color: '#C13C37' },
            ]}
            animate
            lineWidth={20}
            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
            labelStyle={(index) => ({
              fill: index === 0 ? '#E38627' : '#C13C37',
              fontSize: '5px',
              fontFamily: 'sans-serif',
            })}
          />
        </div>
        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Immunization Schedule</h2>
          {immunizationDueDates.map((schedule, index) => (
            <div key={index} className={`mb-6 p-4 rounded-lg shadow-md ${schedule.color}`}>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">{schedule.age}</h3>
              <ul className="list-disc list-inside text-left text-lg text-gray-600">
                {schedule.vaccines.map((vaccine, vIndex) => (
                  <li key={vIndex}>{vaccine}</li>
                ))}
              </ul>
              {schedule.completed && (
                <div className="text-right mt-2 text-green-500 font-semibold">✔ Completed</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
