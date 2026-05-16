import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import skillsRouter from '../routes/skills.js';
import experiencesRouter from '../routes/experiences.js';
import educationRouter from '../routes/education.js';
import projectsRouter from '../routes/projects.js';
import certificationsRouter from '../routes/certifications.js';
import activitiesRouter from '../routes/activities.js';

// Load environment variables
dotenv.config();

const app = express();
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
let mongoConnected = false;

const connectDB = async () => {
  if (mongoConnected) return;
  
  try {
    await mongoose.connect(MONGODB_URI);
    mongoConnected = true;
    console.log('✅ Connected to MongoDB Atlas');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    throw error;
  }
};

// API Routes
app.use('/api/skills', skillsRouter);
app.use('/api/experiences', experiencesRouter);
app.use('/api/education', educationRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/certifications', certificationsRouter);
app.use('/api/activities', activitiesRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend server is running' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Portfolio Backend API',
    endpoints: {
      skills: '/api/skills',
      experiences: '/api/experiences',
      education: '/api/education',
      projects: '/api/projects',
      certifications: '/api/certifications',
      activities: '/api/activities'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Vercel Serverless Handler
export default async (req, res) => {
  await connectDB();
  return app(req, res);
};
