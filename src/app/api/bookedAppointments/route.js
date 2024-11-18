import { AppointmentInfo } from '@/models/Appointment';
import { User } from '@/models/Users';
import mongoose from 'mongoose';

export async function GET(req) {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    }

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    const role = searchParams.get('role');

    let roleFilter = {};
    if (role === 'doctor') {
      roleFilter = { selectedDoctor: userId };
    }

    const appointments = await AppointmentInfo.find({
      ...roleFilter,
      createdAppointment: true
    }).lean();

    const userEmails = appointments.map(appointment => appointment.email);

    const users = await User.find({
      email: { $in: userEmails },
      admin: false,
      doctor: false,
    }).lean();

    const usersWithDetails = users.map(user => {
      const userInfo = appointments.find(app => app.email === user.email);
      return {
        ...user,
        userInfo
      };
    });

    return new Response(JSON.stringify(usersWithDetails), { status: 200 });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
