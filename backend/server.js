import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import skillsRouter from './routes/skills.js';
import experiencesRouter from './routes/experiences.js';
import educationRouter from './routes/education.js';
import projectsRouter from './routes/projects.js';
import certificationsRouter from './routes/certifications.js';
import activitiesRouter from './routes/activities.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    process.env.CORS_ORIGIN
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: false
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    console.log('Database:', MONGODB_URI.split('/')[3].split('?')[0]);
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  });

// Debug: Log all collections on connection
mongoose.connection.on('connected', async () => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Available collections:', collections.map(c => c.name));
  } catch (error) {
    console.error('Error listing collections:', error.message);
  }
});

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

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
