import mongoose from 'mongoose';

export const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    status: { type: Boolean },
    sequence: { type: Number },
    date: { type: Date },
  }
);
export default mongoose.models.blog || mongoose.model('blog', blogSchema);
