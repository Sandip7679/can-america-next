import mongoose from 'mongoose';

export const event_schema = new mongoose.Schema(
  {
    event_title: { type: String },
    image: { type: String },
    date: { type: String },
    topic: { type: String },
    hosted_by: { type: String },
    event_date: { type: String },
    event_time: { type: String },
    slug: { type: String, unique: true },
    status: { type: Boolean },
    sequence: { type: String, unique: true },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);
export default mongoose.models.event || mongoose.model('event', event_schema);