import { Contact } from "@/models/Contact";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    if (!mongoose.connection.readyState) {
      await mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    }

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      message,
    });

    await newContact.save();

    return new Response("Contact form submitted successfully", { status: 200 });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return new Response("Error submitting contact form", { status: 500 });
  }
}

export async function GET() {
  try {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    }
    const messages = await Contact.find();

    return new Response(JSON.stringify(messages), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return new Response("Error fetching contact messages", { status: 500 });
  }
}
