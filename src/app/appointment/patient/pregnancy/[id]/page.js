"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Pie } from "react-chartjs-2";
import Header from "@/components/layout/Header";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const calculateTimeLeft = (dueDate) => {
  const difference = +new Date(dueDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      totalSeconds: Math.floor(difference / 1000),
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const calculateProgress = (startDate, dueDate) => {
  const totalDuration = +new Date(dueDate) - +new Date(startDate);
  const elapsed = +new Date() - +new Date(startDate);
  const progress = (elapsed / totalDuration) * 100;
  return progress.toFixed(2);
};

const calculateElapsedTime = (startDate) => {
  const difference = +new Date() - +new Date(startDate);
  return Math.floor(difference / 1000);
};

export default function ProgressPage() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (id) {
      fetch(`/api/profile?_id=${id}`).then((response) => {
        response.json().then((data) => {
          setUserDetails(data);
          if (data?.medicalRecords?.start && data?.medicalRecords?.dueDate) {
            setTimeLeft(calculateTimeLeft(data?.medicalRecords?.dueDate));
            setProgress(calculateProgress(data?.medicalRecords?.start, data?.medicalRecords?.dueDate));
          }
        });
      });
    }
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (userDetails && userDetails.dueDate) {
        setTimeLeft(calculateTimeLeft(userDetails.dueDate));
        setProgress(calculateProgress(userDetails.createdAt, userDetails.dueDate));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [userDetails, timeLeft]);

  const pieData = {
    labels: ['Elapsed Time', 'Time Left'],
    datasets: [
      {
        data: [calculateElapsedTime(userDetails?.medicalRecords?.start), timeLeft.totalSeconds],
        backgroundColor: ['#4caf50', '#ff9800'],
        hoverBackgroundColor: ['#66bb6a', '#ffb74d'],
      },
    ],
  };

  return (
    <>
      <Header color={"bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700"} />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-20">
        <div className="max-w-lg w-full bg-white p-8 mt-10 rounded-lg shadow-lg text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Time Until Birth</h1>
          <div className="relative pt-1">
            <Pie data={pieData} />
          </div>
          <div className="text-2xl text-gray-600 mt-6">
            {timeLeft.days !== undefined ? (
              <>
                <div>{timeLeft.days} Days {timeLeft.hours} Hours</div>
                <div>{timeLeft.minutes} Minutes {timeLeft.seconds} Seconds</div>
              </>
            ) : (
              <div>Baby is here!</div>
            )}
          </div>
          <div className="text-right mt-4">
            <span className="text-xs font-semibold inline-block text-pink-600">
              {progress}%
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
