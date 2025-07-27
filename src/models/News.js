import mongoose from 'mongoose';

export const NewsSchema = new mongoose.Schema(
  {
    category: { type: String },
    title: { type: String },
    desc: { type: String },
    image: { type: String },
    isLatest: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
    slug: { type: String, required: true, unique: true }, 
  },
  { timestamps: true }
);
export default mongoose.models.news || mongoose.model('news', NewsSchema);