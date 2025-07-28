import mongoose from 'mongoose';

const strengthSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  image: { type: String },
});

export const why_can_america_schema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String },
    // image_second: { type: String },
    // image_third: { type: String },
    sequence: { type: Number },
    our_strengths: [strengthSchema],
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

export default mongoose.models.whycanamericas || mongoose.model('whycanamericas', why_can_america_schema)