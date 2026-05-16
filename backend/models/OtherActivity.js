import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { collection: "other_activities" } );

export default mongoose.model('OtherActivity', activitySchema);
