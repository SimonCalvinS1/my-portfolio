import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  }
}, { collection: "education" } );

export default mongoose.model('Education', educationSchema);
