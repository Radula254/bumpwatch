"use client";
import Image from "next/image";
import React from "react";
import team1 from "/public/team1.jpg";
import team2 from "/public/team2.jpg";
import team3 from "/public/team2.jpeg";
import team4 from "/public/team3.jpg";

const Team = () => {
  return (
    <>
      <section className="team-section bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Meet Our Team</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="team-member text-center p-4 bg-white rounded-lg shadow-lg">
              <Image src={team1} alt="Team Member 1" className="w-full h-60 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">Dr. Jane Smith</h3>
              <p className="text-gray-600">Obstetrician</p>
            </div>
            <div className="team-member text-center p-4 bg-white rounded-lg shadow-lg">
              <Image src={team2} alt="Team Member 2" className="w-full h-60 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">Dr. John Doe</h3>
              <p className="text-gray-600">Pediatrician</p>
            </div>
            <div className="team-member text-center p-4 bg-white rounded-lg shadow-lg">
              <Image src={team3} alt="Team Member 3" className="w-full h-60 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">Mary Johnson</h3>
              <p className="text-gray-600">Health Educator</p>
            </div>
            <div className="team-member text-center p-4 bg-white rounded-lg shadow-lg">
              <Image src={team4} alt="Team Member 4" className="w-full h-60 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">James Brown</h3>
              <p className="text-gray-600">Software Developer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
