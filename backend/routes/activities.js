import express from 'express';
import OtherActivity from '../models/OtherActivity.js';

const router = express.Router();

// Get all activities
router.get('/', async (req, res) => {
  try {
    const activities = await OtherActivity.find().sort({ createdAt: -1 });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single activity
router.get('/:id', async (req, res) => {
  try {
    const activity = await OtherActivity.findById(req.params.id);
    if (!activity) return res.status(404).json({ message: 'Activity not found' });
    res.json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create activity (for admin use)
router.post('/', async (req, res) => {
  const activity = new OtherActivity({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category
  });

  try {
    const newActivity = await activity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
