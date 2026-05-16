import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { collection: "skills" } );

export default mongoose.model('Skill', skillSchema);
