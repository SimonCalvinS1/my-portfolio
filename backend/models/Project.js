import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tech: [{
    type: String,
    required: true
  }]
}, { collection: "projects" } );

export default mongoose.model('Project', projectSchema);
