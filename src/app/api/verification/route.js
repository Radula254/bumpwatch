import mongoose from "mongoose";
import crypto from "crypto";
import { User } from "@/models/Users";

export async function POST(req) {
    const { verifyCode } = await req.json(); 

    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const token1 = crypto.createHash("sha256").update(verifyCode).digest("hex");
    const user = await User.findOne({verifyToken: token1, verifyTokenExpires: {$gt: Date.now()}});

    if (!user) {
        return Response.json("Token is invalid", { status: 400 });
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpires = undefined;
    await user.save();
    
    return Response.json((user), { status: 200 });
}
