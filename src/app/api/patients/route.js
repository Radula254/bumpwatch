import { UserInfo } from '@/models/UserInfo';
import { User } from '@/models/Users';
import mongoose from 'mongoose';


export async function GET() {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const users = await User.find({ admin: false, doctor: false  });

    const usersWithDetails = [];

    for (const user of users) {
        const userInfo = await UserInfo.findOne({ email: user.email }).lean();
        usersWithDetails.push({
            ...user.toObject(),
            userInfo
        });
    }

    return Response.json(usersWithDetails);
}
