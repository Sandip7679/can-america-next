import mongoose from 'mongoose';

export const policySchema = new mongoose.Schema(
  {
    type: { type: String, required:true},
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  }
);
export default mongoose.models.policy || mongoose.model('policy', policySchema);