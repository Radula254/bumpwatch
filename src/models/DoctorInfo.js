import { model, models, Schema } from "mongoose";

const DoctorInfoSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    DOB: { type: Date },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    salary: {type: String},
    staff: {type: Boolean, default: true},
    gender: { type: String, enum: ['male', 'female'] },
  },
  { timestamps: true }
);

export const DoctorInfo = models?.DoctorInfo || model('DoctorInfo', DoctorInfoSchema);

