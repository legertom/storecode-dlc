import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

//initialize the Express app
const app = express();



//configure middlewear for Express, enable CORS and JSON parsing
app.use(cors());
app.use(bodyParser.json());

//connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (err) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
    } else {
      console.log('Connected to MongoDB');
    }
  });
  
  import { userRoutes } from './routes/userRoutes.js';
  import { digitalGoodRoutes } from './routes/digitalGoodRoutes.js';
  import { cartRoutes } from './routes/cartRoutes.js';
  import { orderRoutes } from './routes/orderRoutes.js';
  
  app.use('/api/users', userRoutes);
  app.use('/api/digital-goods', digitalGoodRoutes);
  app.use('/api/cart', cartRoutes);
  app.use('/api/orders', orderRoutes);
  


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
