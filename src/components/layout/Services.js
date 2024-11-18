"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby, faAppleAlt, faDumbbell, faBook, faUsers, faHeadset } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <section className="services-section min-h-screen bg-gray-900 flex flex-col items-center py-20">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-teal-400 to-blue-500">
            Our Services
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/services/pregnancy-tracking" className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <FontAwesomeIcon icon={faBaby} className="text-4xl text-green-300 mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">Pregnancy Tracking</h2>
            <p className="text-gray-300">Get personalized updates on your baby&apos;s development and changes in your body each week.</p>
          </Link>
          <Link href="/services/nutrition-guidance" className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <FontAwesomeIcon icon={faAppleAlt} className="text-4xl text-green-300 mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">Nutrition Guidance</h2>
            <p className="text-gray-300">Receive expert advice on the best nutrition practices for a healthy pregnancy.</p>
          </Link>
          <Link href="/services/exercise" className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <FontAwesomeIcon icon={faDumbbell} className="text-4xl text-green-300 mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">Exercise Plans</h2>
            <p className="text-gray-300">Access tailored exercise plans to maintain your fitness and well-being during pregnancy.</p>
          </Link>
          <Link href="/services/educational-resources" className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <FontAwesomeIcon icon={faBook} className="text-4xl text-green-300 mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">Educational Resources</h2>
            <p className="text-gray-300">Explore a wealth of articles and resources to stay informed throughout your pregnancy.</p>
          </Link>
          <Link href="/services/community-support" className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <FontAwesomeIcon icon={faUsers} className="text-4xl text-green-300 mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">Community Support</h2>
            <p className="text-gray-300">Connect with other expectant mothers and share experiences and support.</p>
          </Link>
          <Link href="/services/expert-consultation" className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <FontAwesomeIcon icon={faHeadset} className="text-4xl text-green-300 mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">Expert Consultation</h2>
            <p className="text-gray-300">Get advice from medical professionals and health experts at your convenience.</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
