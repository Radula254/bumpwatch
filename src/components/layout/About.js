"use client";
import Image from "next/image";
import React from "react";
import features3 from "/public/about1.jpg";

const About = () => {
  return (
    <>
      <section
        className="about-section flex items-center bg-cover bg-center py-12"
        style={{ backgroundImage: "url('/images/background2.jpeg')" }}
      >
        <div className="flex-shrink-0 pl-10">
          <Image
            src={features3}
            alt="Features 1"
            width={600}
            height={600}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="container flex-1 m-8 max-w-3xl p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-4">About</h1>
          <hr className="mb-4" />
          <p className="text-gray-700 mb-4">
            Welcome to BumpWatch, your trusted companion for every step of your pregnancy journey. We believe every pregnancy deserves personalized care and support. Our mission is to empower expectant mothers with the tools, information, and community they need for a confident and informed journey to motherhood. BumpWatch is a team of passionate professionals in maternal health and technology, including obstetricians, pediatricians, health educators, and software developers. Together, we create a comprehensive and user-friendly pregnancy tracking app. Our app provides personalized weekly updates, offering tailored information about your baby’s development and changes in your body. We also provide expert advice on nutrition, exercise, and prenatal care, helping you maintain a healthy pregnancy.
          </p>
          <div className="numerical-data flex justify-around mt-4 gap-3">
            <div className="text-center p-4 bg-gray-200 rounded-lg hover:scale-105 transition-transform">
              <p className="text-2xl font-bold">20+</p>
              <p>Medical Advisors</p>
            </div>
            <div className="text-center p-4 bg-gray-200 rounded-lg hover:scale-105 transition-transform">
              <p className="text-2xl font-bold">10yrs</p>
              <p>In Operation</p>
            </div>
            <div className="text-center p-4 bg-gray-200 rounded-lg hover:scale-105 transition-transform">
              <p className="text-2xl font-bold">300+</p>
              <p>Users every month</p>
            </div>
            <div className="text-center p-4 bg-gray-200 rounded-lg hover:scale-105 transition-transform">
              <p className="text-2xl font-bold">240+</p>
              <p>Resources and Articles</p>
            </div>
          </div>
          <button
            className="read-more block mx-auto mt-8 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => (window.location.href = "/about")}
          >
            Read More
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
