import mongoose from "mongoose";

const socialMediaSchema = new mongoose.Schema({
  icon: { type: String },
  link: { type: String },
  class: { type: String },
});

export const site_setting_schema = new mongoose.Schema(
  {
    logo: { type: String },
    title: { type: String },
    sub_title: { type: String },
    email_first: { type: String },
    email_second: { type: String },
    contact_first: { type: String },
    contact_second: { type: String },
    address: { type: String },
    working_hour: { type: String },
    whatsapp_number: { type: String },       
    whatsapp_text: { type: String },   
    status: { type: Boolean },           
    copyright: { type: String },

    social_media: [socialMediaSchema],
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);
export default mongoose.models.site_setting || mongoose.model('site_setting', site_setting_schema);
