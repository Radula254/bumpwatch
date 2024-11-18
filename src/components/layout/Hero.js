"use client";
import Image from "next/image";
import groupImg from "/public/group.jpeg";
import caregiverImg from "/public/caregiver.webp";

export default function Hero() {
  return (
    <main>
      <section className="relative object-cover h-[100vh] w-full bg-cover bg-background bg-center bg-[url('/back2.jpeg')] flex items-center justify-center px-20 z-0 text-white">
        <div className="text-center">
          <h1 className="font-bold text-6xl mt-32 mb-1 text-gray-800">BumpWatch</h1>
          <h3 className="font-bold text-3xl mb-1 text-gray-800">Enhancing Prenatal and Postnatal Care with Technology</h3>
          
        </div>
      </section>

      
    </main>
  );
}
