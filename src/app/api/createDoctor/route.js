import mongoose from 'mongoose';
import { User }  from "@/models/Users"; 
import bcrypt from "bcrypt";
import { DoctorInfo } from "@/models/DoctorInfo";

export async function GET() {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);

    const criteria = {
        $or: [
            { 'nurse': true },
            { 'doctor': true },
            { 'pharmacist': true },
            { 'receptionist': true },
            { 'labTech': true },
        ]
    };
    const users = await User.find(criteria);

    const usersWithDetails = [];

    for (const user of users) {
        // Parallel queries to fetch role-specific info only if staff=true
        const [nurseInfo, doctorInfo, pharmacistInfo, receptionistInfo, labTechInfo] = await Promise.all([
            DoctorInfo.findOne({ email: user.email, staff: true }).lean(),
        ]);

        const roleInfo = doctorInfo || {};

        usersWithDetails.push({
            ...user.toObject(),
            ...roleInfo,
        });
    }
    return Response.json(usersWithDetails);
}

export async function POST(req) {
    try {
      const body = await req.json();
      await mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
  
      const { password } = body;
      if (!password || password.length < 5) {
        throw new Error('Password must be at least 5 characters');
      }
  
      const notHashedPassword = password;
      const salt = bcrypt.genSaltSync(10);
      body.password = bcrypt.hashSync(notHashedPassword, salt);
  
      const createdUser = await User.create(body);
      return new Response(JSON.stringify(createdUser), { status: 201 });
    } catch (error) {
      return new Response(JSON.stringify({ message: error.message }), { status: 400 });
    }
  }
