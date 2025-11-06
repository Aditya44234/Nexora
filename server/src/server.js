// server.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

// Load environment variables
dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
}) 
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
