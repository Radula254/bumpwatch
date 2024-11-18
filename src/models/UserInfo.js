import { model, models, Schema } from "mongoose";

const UserInfoSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    DOB: { type: Date },
    phone: { type: String },
    country: { type: String },
    gender: { type: String, enum: ['male', 'female'] },
  },
  { timestamps: true }
);

export const UserInfo = models?.UserInfo || model('UserInfo', UserInfoSchema);

