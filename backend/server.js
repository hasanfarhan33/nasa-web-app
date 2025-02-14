require("dotenv").config(); 
const express = require('express'); 
const cors = require('cors'); 

// Router 
const nasaRouter = require("./routes/nasaRoutes"); 

const app = express(); 

// Middleware 
app.use(express.json()); 
app.use(cors()); 

// NASA API Routes 
app.use("/api/nasa", require("./routes/nasa")); 

// CONNECTING TO THE SERVER 
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log("SERVER IS RUNNING ON PORT " + PORT)); 