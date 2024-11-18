import { User } from "@/models/Users";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const { email, password, admin, doctor } = await req.json();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword,
      admin: admin || false,
      doctor: doctor || false,
    });

    await newUser.save();

    return NextResponse.json({ message: "User created successfully" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
