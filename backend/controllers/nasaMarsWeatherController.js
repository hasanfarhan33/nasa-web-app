const {fetchMarsWeather} = require("../services/nasaMarsWeatherService_backend"); 

const getMarsWeather = async(req, res) => {
    try {
        const data = await fetchMarsWeather(); 

        // Array to store information of each sol 
        const solsData = []; 

        for(let solKey of data.sol_keys) {
            const curSol = data[solKey]; 

            const avgAtmosphericTemperature = curSol.AT ? curSol.AT.av: "Temperature Data Not Available";

            // Min - Max Temperature 
            const minTemperature = curSol.AT ? curSol.AT.mn: "Min Temp not available"; 
            const maxTemperature = curSol.AT ? curSol.AT.mx: "Max temp not available"; 
            
            // Min - Max Atmospheric Pressure 
            const minPressure = curSol.PRE ? curSol.PRE.mn: "Min Pressure not available"; 
            const maxPressure = curSol.PRE ? curSol.PRE.mx: "Max Pressure not available"; 
    
            // Min - Max Wind Speed 
            const minSpeed = curSol.HWS ? curSol.HWS.mn: "Min speed not available"; 
            const maxSpeed = curSol.HWS ? curSol.HWS.mx: "Max speed not available"; 
    
    
            const dataPerSol = {
                "Current Sol": solKey, 
                "Average Atmospheric Temperature": Math.round(avgAtmosphericTemperature * 100) / 100, 
                "Min Temperature (Celcius)": Math.round(minTemperature * 100) / 100, 
                "Max Temperature (Celcius)": Math.round(maxTemperature * 100) / 100, 
                "Min Pressure (Pascals)": Math.round(minPressure * 100) / 100, 
                "Max Pressure (Pascals)": Math.round(maxPressure * 100) / 100, 
                "Min Wind Speed (m/s)": Math.round(minSpeed * 100) / 100, 
                "Max Wind Speed (m/s)": Math.round(maxSpeed * 100) / 100, 
            }

            solsData.push(dataPerSol)
    
        }

        res.json(solsData); 

        // res.json(data); 
    } catch (error) {
        console.log("File name: nasaMarsWeatherController.js --> Could not get mars weather info"); 
        res.status(500).json({error: "Could not get Mars weather info", details: error.message}); 
    }
}

module.exports = {getMarsWeather}; 