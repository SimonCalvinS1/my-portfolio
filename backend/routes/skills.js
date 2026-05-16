import express from 'express';
import Skill from '../models/Skill.js';

const router = express.Router();

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single skill
router.get('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create skill (for admin use)
router.post('/', async (req, res) => {
  const skill = new Skill({
    name: req.body.name,
    level: req.body.level,
    description: req.body.description
  });

  try {
    const newSkill = await skill.save();
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
