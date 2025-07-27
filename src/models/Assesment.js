import mongoose from 'mongoose';

const bulletPointSchema = new mongoose.Schema({
  point: { type: String },
});

const applySchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  image: { type: String },
  slug: { type: String },

});

export const assessment_schema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String },
    bullet_points: [bulletPointSchema],
    apply: [applySchema],
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

export default mongoose.models.assessment || mongoose.model('assessment', assessment_schema);