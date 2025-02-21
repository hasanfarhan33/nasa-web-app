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
            
            // Average Pressure
            const avgPressure = curSol.PRE ? curSol.PRE.av: "Pressure Data Not Available";
    
            // Min - Max Wind Speed 
            const averageSpeed = curSol.HWS ? curSol.HWS.av: "Average speed not available"; 
    
    
            const dataPerSol = {
                "Current Sol": solKey, 
                "Average Atmospheric Temperature": Math.round(avgAtmosphericTemperature * 100) / 100, 
                "Min Temperature (Celcius)": Math.round(minTemperature * 100) / 100, 
                "Max Temperature (Celcius)": Math.round(maxTemperature * 100) / 100,
                "Average Pressure (Pascals)": Math.round(avgPressure * 100) / 100,
                "Average Wind Speed (m/s)": Math.round(averageSpeed * 100) / 100
            }

            solsData.push(dataPerSol)
    
        }

        res.json(solsData); 
 
    } catch (error) {
        console.error("File name: nasaMarsWeatherController.js --> Could not get mars weather info"); 
        res.status(500).json({error: "Could not get Mars weather info", details: error.message}); 
    }
}

module.exports = {getMarsWeather}; 