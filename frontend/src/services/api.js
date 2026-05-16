// API service for fetching portfolio data
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const apiService = {
  // Skills
  getSkills: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/skills`);
      if (!response.ok) throw new Error('Failed to fetch skills');
      return await response.json();
    } catch (error) {
      console.error('Error fetching skills:', error);
      return [];
    }
  },

  // Experience
  getExperiences: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/experiences`);
      if (!response.ok) throw new Error('Failed to fetch experiences');
      return await response.json();
    } catch (error) {
      console.error('Error fetching experiences:', error);
      return [];
    }
  },

  // Education
  getEducation: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/education`);
      if (!response.ok) throw new Error('Failed to fetch education');
      return await response.json();
    } catch (error) {
      console.error('Error fetching education:', error);
      return [];
    }
  },

  // Projects
  getProjects: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/projects`);
      if (!response.ok) throw new Error('Failed to fetch projects');
      return await response.json();
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },

  // Certifications
  getCertifications: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/certifications`);
      if (!response.ok) throw new Error('Failed to fetch certifications');
      return await response.json();
    } catch (error) {
      console.error('Error fetching certifications:', error);
      return [];
    }
  },

  // Activities
  getActivities: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/activities`);
      if (!response.ok) throw new Error('Failed to fetch activities');
      return await response.json();
    } catch (error) {
      console.error('Error fetching activities:', error);
      return [];
    }
  }
};
