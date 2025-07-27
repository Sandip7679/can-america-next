import * as mongoose from 'mongoose';

export const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  status: { type: Boolean, default: true },
  sequence: { type: Number, default: 0 },
  createdAt: { type: Date, },
  updatedAt: { type: Date, },
})
// faqSchema.pre('save', function (next) {
//   const currentDate = new Date();
//   this.updatedAt = currentDate;
//   if (!this.createdAt) {
//     this.createdAt = currentDate;
//   }
//   next();
// });
export default mongoose.models.faq || mongoose.model('faq', faqSchema);
// export const FAQ = mongoose.model('FAQ', faqSchema);