// Import necessary modules using ES module syntax
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

// Define your model or any other logic here


// Calculate distance between two points (using Haversine formula)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degree) => degree * (Math.PI / 180);
  
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };




// Add School Controller
const addSchool = async (req, res) => {
    const { name, address, latitude, longitude } = req.body;
    try {
      // Validate input data
      if (!name || !address || typeof latitude !== 'number' || typeof longitude !== 'number') {
        return res.status(400).json({ error: 'All fields are required and must be valid.' });
      }
      // Create a new school
      const school = await School.create({
        name,
        address,
        latitude,
        longitude,
      });
      res.status(201).json({ message: 'School added successfully', school });
    } catch (error) {
      console.error('Error adding school:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };



// List Schools Controller
const listSchools = async (req, res) => {
    const { latitude, longitude } = req.query;
  
    try {
      if (typeof parseFloat(latitude) !== 'number' || typeof parseFloat(longitude) !== 'number') {
        return res.status(400).json({ error: 'Latitude and longitude must be valid numbers.' });
      }
  
      // Fetch all schools from the database
      const schools = await School.findAll();
  
      // Sort schools by proximity to the user's location
      const sortedSchools = schools.map(school => {
        const distance = calculateDistance(latitude, longitude, school.latitude, school.longitude);
        return { ...school.toJSON(), distance };
      }).sort((a, b) => a.distance - b.distance);
  
      res.status(200).json(sortedSchools);

    } catch (error) {
      console.error('Error listing schools:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

export {addSchool ,listSchools}
