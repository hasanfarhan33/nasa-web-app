require("dotenv").config(); 
const express = require('express'); 
const cors = require('cors'); 

// Router 
const nasaRoutes = require("./routes/nasaRoutes"); 

const app = express(); 

// Middleware 
app.use(express.json()); 
app.use(cors()); 

// NASA API Routes 
app.use("/api/nasa", nasaRoutes); 

// Creating API Home Page 
app.get("/", (req, res) => {
    res.json({
        greeting: "Welcome to SpacePeek Backend", 
        routes: "/api/nasa/{}", 
        apod: "apod", 
        marsWeather: "mars-weather", 
        marsPhotos: "mars-photos", 
        asteroids: "asteroids"
    })
})


// CONNECTING TO THE SERVER 
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log("SERVER IS RUNNING ON PORT " + PORT)); 