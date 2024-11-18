import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import { AppointmentInfo } from "@/models/Appointment";
import { User } from "@/models/Users";
import mongoose from "mongoose";
import {getServerSession} from "next-auth";


export async function PUT(req) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
  const data = await req.json();
  const {_id, name, image, ...otherUserInfo} = data;

  let filter = {};
  if (_id) {
    filter = {_id};
  } else {
    const session = await getServerSession(authOptions);
    const email = session.user.email;
    filter = {email};
  }
  
  const user = await User.findOne(filter);
  await User.updateOne(filter, {name, image});
  await AppointmentInfo.findOneAndUpdate({email:user.email}, otherUserInfo, {upsert:true});

  return Response.json(true);
}

export async function GET(req) {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
  
    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');
  
    let filterUser = {};
    let email = null;
  
    if (_id) {
      filterUser = { _id };
    } else {
      const session = await getServerSession(req, req.res, authOptions);
      email = session?.user?.email;
      if (!email) {
        return new Response(JSON.stringify({}), { status: 400 });
      }
      filterUser = { email };
    }
  
    console.log("Filter User:", filterUser);
  
    const user = await User.findOne(filterUser).lean();
    if (!user) {
      console.log("User not found");
      return new Response(JSON.stringify({}), { status: 404 });
    }
  
    email = email || user.email;
  
    console.log("Email for appointment query:", email);
  
    const appointInfo = await AppointmentInfo.findOne({ email }).lean();
    if (!appointInfo) {
      console.log("AppointmentInfo not found for email:", email);
    } else {
      console.log("AppointmentInfo:", appointInfo);
    }
  
    return  Response.json({ ...user, ...appointInfo });
  }