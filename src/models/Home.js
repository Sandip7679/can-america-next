import mongoose from 'mongoose';

export const home_schema = new mongoose.Schema(
  {
    banner_video: { type: String},
    testimonial_video: { type: String},
    testimonial_title: { type: String},
    service_title: { type: String},
    service_sub_title: { type: String},
    status: { type: Boolean, default: true },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);
export default mongoose.models.home || mongoose.model('home', home_schema);