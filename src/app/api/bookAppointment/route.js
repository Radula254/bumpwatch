import { AppointmentInfo } from "@/models/Appointment";
import mongoose from "mongoose";

// Force this API route to be dynamically rendered
export const dynamic = 'force-dynamic';

export async function POST(req) {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
  }

  try {
    const data = await req.json();
    const appointment = await AppointmentInfo.create(data);
    return new Response(JSON.stringify(appointment), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function GET(req) {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
  }

  try {
    const appointments = await AppointmentInfo.find();
    return new Response(JSON.stringify(appointments), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
