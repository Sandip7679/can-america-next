import mongoose from 'mongoose';

const caseStudySchema = new mongoose.Schema({
  question: { type: String },
  answer: { type: String },
});

export const study_program_schema = new mongoose.Schema(
  {
    type: { type: String },
    title: { type: String },
    image: { type: String },
    description: { type: String },
    home_page_img: { type: String },
    case_study: [caseStudySchema],
    apply_description: { type: String },
    apply_slag: { type: String },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

export default mongoose.models.studyprograms || mongoose.model('studyprograms', study_program_schema);
