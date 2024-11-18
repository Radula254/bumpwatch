import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AppointmentInfo } from "@/models/Appointment";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function PUT(req) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
  const data = await req.json();
  const { id, email, ...appointmentInfo } = data;

  let filter = {};

  if (id) {
    filter._id = id;
  } else if (email) {
    filter.email = email;
  } else {
    return new Response("ID or Email is required", { status: 400 });
  }

  const appointment = await AppointmentInfo.findOne(filter);

  if (!appointment) {
    return new Response("Appointment not found", { status: 404 });
  }

  await AppointmentInfo.updateOne(filter, appointmentInfo);

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(req) {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const data = await req.json();
    const { email } = data;
  
    if (!email) {
      return new Response("Email is required", { status: 400 });
    }
  
    const appointment = await AppointmentInfo.findOne({ email });
  
    if (!appointment) {
      return new Response("Appointment not found", { status: 404 });
    }
  
    await AppointmentInfo.deleteOne({ email });
  
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  }
