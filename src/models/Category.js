import mongoose from 'mongoose';

export const category_schema = new mongoose.Schema(
  {
    name: { type: String },
    slug: { type: String, unique: true },
    sequence: { type: Number, required: true },
    description: { type: String },
    parent_id: { type: String },
    parent_name: { type: String },
    title1: { type: String },
    title2: { type: String },
    description1: { type: String },
    description2: { type: String },
    image1: { type: String },
    image2: { type: String },
    image3: { type: String },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

export default mongoose.models.categories || mongoose.model('categories', category_schema)

