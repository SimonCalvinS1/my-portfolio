import express from 'express';
import Certification from '../models/Certification.js';

const router = express.Router();

// Get all certifications
router.get('/', async (req, res) => {
  try {
    const certifications = await Certification.find().sort({ createdAt: -1 });
    res.json(certifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single certification
router.get('/:id', async (req, res) => {
  try {
    const certification = await Certification.findById(req.params.id);
    if (!certification) return res.status(404).json({ message: 'Certification not found' });
    res.json(certification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create certification (for admin use)
router.post('/', async (req, res) => {
  const certification = new Certification({
    title: req.body.title,
    institution: req.body.institution,
    date: req.body.date,
    link: req.body.link
  });

  try {
    const newCertification = await certification.save();
    res.status(201).json(newCertification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
