import express from 'express';
import Experience from '../models/Experience.js';

const router = express.Router();

// Get all experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ createdAt: -1 });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single experience
router.get('/:id', async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) return res.status(404).json({ message: 'Experience not found' });
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create experience (for admin use)
router.post('/', async (req, res) => {
  const experience = new Experience({
    title: req.body.title,
    description: req.body.description,
    company: req.body.company,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  });

  try {
    const newExperience = await experience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
