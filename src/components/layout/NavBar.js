import Link from "next/link";
import Image from "next/image";

export default function NavBar({ user }) {
  const isDoctor = user?.doctor;
  const isAdmin = user?.admin;

  console.log(user);

  return (
    <div className="flex flex-col items-center w-full max-w-xs p-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-bisque h-screen rounded-lg">
      <div className="relative w-36 h-36 mb-4 rounded-full overflow-hidden">
        <Image
          src={user?.image || "/team2.jpeg"}
          alt={user?.name || "User"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-full"
        />
      </div>n
      <h3 className="mb-5 text-2xl">{user?.name || "User"}</h3>
      <nav className="flex flex-col items-center w-full">
        {isAdmin ? (
          <>
            <Link href="/admin/addDoctor/" className="w-full text-center pb-2 text-lg">
              Add Doctor
            </Link>
            <Link href="/admin/display/doctors" className="w-full text-center py-2 my-1 text-lg">
              View Doctors
            </Link>
            <Link href="/admin/display/patients" className="w-full text-center py-2 my-1 text-lg">
              View Patients
            </Link>
          </>
        ) : isDoctor ? (
          <>
            <Link href="/profile/doctor" className="w-full text-center pb-2 text-lg">
              Profile
            </Link>
            <Link href="/appointment/patient" className="w-full text-center py-2 my-1 text-lg">
              Patients
            </Link>
            <Link href="/appointment/doctor/medicalRecords" className="w-full text-center py-2 my-1 text-lg">
              Medical Records
            </Link>
            <Link href="/appointment" className="w-full text-center py-2 my-1 text-lg">
              Appointments
            </Link>
          </>
        ) : (
          <>
            <Link href="/profile/mother" className="w-full text-center pb-2 text-lg">
              Profile
            </Link>
            <Link href={`/appointment/patient/pregnancy/${user.userId}`} className="w-full text-center py-2 my-1 text-lg">
              Pregnancy
            </Link>
            <Link href={`/appointment/book/${user._id}`} className="w-full text-center py-2 my-1 text-lg">
              Appointments
            </Link>
            <Link href={`/appointment/patient/${user.userId}`} className="w-full text-center py-2 my-1 text-lg">
              Symptoms
            </Link>
            <Link href={`/appointment/patient/infant/${user.userId}`} className="w-full text-center py-2 my-1 text-lg">
              Infant
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}
