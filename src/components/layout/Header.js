"use client";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useProfile } from "../UseProfile";

export default function Header({ color }) {
  const { session, status } = useSession();
  const { loading: profileLoading, data: profileData } = useProfile();
  const userData = session?.user;
  let isAdmin = profileData?.admin;
  let userName = profileData?.name || profileData?.email;
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 flex items-center justify-between w-full p-5 z-10 transition-colors duration-300 ${
        isScrolled ? "bg-background bg-opacity-70 text-gray-700 backdrop-blur-md" : color
      }`}
    >
      <Link className={`font-semibold text-2xl mx-5 px-3 ${
        isScrolled ? "text-gray-700" : `text-white`
      }`} href="/">
        BumpWatch
      </Link>
      <nav className={`flex items-center gap-7 font-semibold ${
        isScrolled ? "text-gray-700" : `text-white`
      }`}>
        <Link href={"/"}>Home</Link>
        <Link href="/about">About Us</Link>
        <Link href={"/contact"}>Contact</Link>
        {status === "authenticated" && (
          <>
            {isAdmin && (
              <Link href={"/admin/dashboard"}>DashBoard</Link>
            )}
          </>
        )}
      </nav>
      {status === "authenticated" && (
        <nav className={`flex items-center gap-7 font-semibold ${
          isScrolled ? "text-gray-700" : `text-white`
        }`}>
          <Link className="whitespace-nowrap" href={"/profile"}>
            <div className={`flex gap-1 items-center rounded-full border py-1 px-2 ${
              isScrolled ? "border-gray-700" : "border-gray-500"
            }`}>
              <svg
                className={`h-7 w-7 relative ${
                  isScrolled ? "text-gray-700" : "text-gray-500"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {userName}
            </div>
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className={`rounded-full px-8 py-2 mr-2 ${
              isScrolled ? "bg-gray-700 text-white" : "bg-primary text-white"
            }`}
          >
            Logout
          </button>
        </nav>
      )}
      {status === "unauthenticated" && (
        <nav className={`flex items-center gap-7 font-semibold ${
          isScrolled ? "text-gray-700" : `text-white`
        }`}>
          <Link href={"/login"}>Log in</Link>
          <Link
            href={"/register"}
            className={`rounded-full px-8 py-2 mr-2 ${
              isScrolled ? "bg-gray-700 text-white" : "bg-primary text-white"
            }`}
          >
            Sign Up
          </Link>
        </nav>
      )}
    </header>
  );
}
