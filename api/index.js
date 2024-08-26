// Import modules using ES module syntax
import dotenv from 'dotenv';
import express from 'express';
import sequelize from './config/database.js';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

const app = express();



// Middleware
app.use(express.json());
app.use(cors())

import schoolRoutes from './routes/schoolRoutes.js'
app.use('/api/schools',schoolRoutes)


const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log(`database mysql connected`);
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});

