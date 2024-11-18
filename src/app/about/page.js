"use client";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Header color={"bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700"} />
      <section className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-20">
        <div className="container mx-auto mt-6 px-4">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-8" data-aos="fade-up">About BumpWatch</h1>
          <div className="flex flex-col lg:flex-row items-center mb-16" data-aos="fade-right">
            <div className="lg:w-1/2 p-4">
              <Image src="/about1.jpg" alt="Pregnancy Care" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div className="lg:w-1/2 p-4">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                BumpWatch is an innovative, web-based pregnancy assistance system designed to support expectant and new mothers throughout their prenatal and postnatal journeys. Leveraging cutting-edge technology and expert medical insights, BumpWatch provides personalized health tracking, educational resources, and community support to ensure mothers and their babies receive the best care possible.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to enhance the health and well-being of mothers and their babies by providing a comprehensive, user-friendly platform that offers personalized health tracking, expert advice, and community support. We are committed to leveraging the latest advancements in technology to deliver accurate, timely, and actionable insights, enabling mothers to make informed decisions about their health and the health of their children. Through BumpWatch, we aim to reduce the risks associated with pregnancy and early childhood, improve health outcomes, and foster a supportive community for mothers worldwide.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse items-center mb-16" data-aos="fade-left">
            <div className="lg:w-1/2 p-4">
              <Image src="/about1.jpg" alt="Community Support" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div className="lg:w-1/2 p-4">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To enhance the health and well-being of mothers and their babies by providing a comprehensive, user-friendly platform that offers personalized health tracking, expert advice, and community support. We are committed to leveraging the latest advancements in technology to deliver accurate, timely, and actionable insights, enabling mothers to make informed decisions about their health and the health of their children. Through BumpWatch, we aim to reduce the risks associated with pregnancy and early childhood, improve health outcomes, and foster a supportive community for mothers worldwide.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center mb-16" data-aos="fade-up">
            <div className="lg:w-1/2 p-4">
              <Image src="/about1.jpg" alt="Health Tracking" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div className="lg:w-1/2 p-4">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the leading global digital companion for maternal and child health, empowering mothers with the knowledge, tools, and support they need to ensure a healthy pregnancy and optimal early childhood development.
              </p>
            </div>
          </div>
          <div className="text-center mt-20" data-aos="zoom-in">
            <Image src="/about1.jpg" alt="Happy Mothers" width={1200} height={800} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
