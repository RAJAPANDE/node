const express = require('express');
const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URI;
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public')); // Serve static files for frontend

// MongoDB Connection
mongoose.connect('mongodb+srv://rajapandey8769:mscVwt8olbbxUO7q@cluster1.h25fu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// API Routes
app.use('/api/users', userRoutes);

// Start Server
const PORT = 7000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

