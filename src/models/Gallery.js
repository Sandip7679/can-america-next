import mongoose from 'mongoose';

export const gallery_schema = new mongoose.Schema(
  {
    title: { type: String },
    video: { type: String },

  },
  { timestamps: true },
);
export default mongoose.models.gallery || mongoose.model('gallery', gallery_schema);