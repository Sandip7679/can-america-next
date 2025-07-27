import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  image: { type: String },
  name: { type: String },
  description: { type: String },
  slug: { type: String },
});

export const secure_futures_schema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    category: [categorySchema],
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);
export default mongoose.models.SecureFutures || mongoose.model('SecureFutures', secure_futures_schema);