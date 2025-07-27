import mongoose from 'mongoose';

export const contact_us_schema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    reason_to_contact: { type: String, required: false },
    notes: { type: String, required: true },
    whatsapp: { type: String, required: false },

  },
  {
    timestamps: true,
  },
);

export default mongoose.models.contact_us || mongoose.model('contact_us', contact_us_schema);