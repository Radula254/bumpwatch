import mongoose from 'mongoose';
import { DoctorInfo } from '@/models/DoctorInfo';
import { User } from '@/models/Users';

export async function GET() {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const users = await User.find({ doctor: true });

    const usersWithDetails = [];

    for (const user of users) {
        const doctorInfo = await DoctorInfo.findOne({ email: user.email }).lean();
        usersWithDetails.push({
            ...user.toObject(),
            doctorInfo
        });
    }

    return Response.json(usersWithDetails);
}
