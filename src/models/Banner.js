import mongoose from 'mongoose';

export const banner_schema = new mongoose.Schema(
  {
    type: { type: String },
    main_title: { type: String },
    sub_title: { type: String },
    image: { type: String }, // single image URL
    status: { type: Boolean },
    consultant_link: { type: String },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

export default mongoose.models.banners || mongoose.model('banners', banner_schema)
