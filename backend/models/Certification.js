import mongoose from 'mongoose';

const certificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  }
}, { collection: "certifications" } );

export default mongoose.model('Certification', certificationSchema);
