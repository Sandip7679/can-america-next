import mongoose from 'mongoose';


const bulletPointSchema = new mongoose.Schema({
  points: { type: String },
  sequence: { type: Number },
  status: { type: Boolean },
});


export const service_schema = new mongoose.Schema(
  {

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
      required: true,
    },
    name: { type: String },
    title: { type: String },
    long_description: { type: String },
    short_description: { type: String },
    bottom_description: { type: String },
    banner_image: { type: String },
    image1: { type: String },
    image2: { type: String },
    icon: { type: String },
    is_for_home: { type: Boolean },
    sequence: { type: Number },
    status: { type: Boolean },
    bullet_point: [bulletPointSchema],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  }
);
export default mongoose.models.service || mongoose.model('service', service_schema);