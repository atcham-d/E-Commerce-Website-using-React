// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = "mongodb+srv://2022csdishasatchama:aenayee22-26@cluster0.ovagerq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;" // Replace with your MongoDB connection string
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// API Routes
const authRouter = require('./routes/auth.routes');
const productRouter = require('./routes/product.routes');

app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});