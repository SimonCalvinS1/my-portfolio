import express from 'express';
import Education from '../models/Education.js';

const router = express.Router();

// Get all educations
router.get('/', async (req, res) => {
  try {
    const educations = await Education.find().sort({ createdAt: -1 });
    res.json(educations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single education
router.get('/:id', async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) return res.status(404).json({ message: 'Education not found' });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create education (for admin use)
router.post('/', async (req, res) => {
  const education = new Education({
    title: req.body.title,
    institution: req.body.institution,
    duration: req.body.duration,
    description: req.body.description
  });

  try {
    const newEducation = await education.save();
    res.status(201).json(newEducation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
