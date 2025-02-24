import { useState } from "react";
import fetchAsteroids from "../services/nasaAsteroidsService_frontend";

const AsteroidsComponent = () => {
    const [asteroidsInfo, setAsteroidsInfo] = useState(null); 
    const [startDate, setStartDate] = useState(null); 
    const [endDate, setEndDate] = useState(null); 
    const [error, setError] = useState(null); 

    const handleClick = async (e) => {
        e.preventDefault(); 

        try {
            console.log("Fetching asteroids info between start date:", startDate, "end date:", endDate); 
            const data = await fetchAsteroids(startDate, endDate); 
            console.log("Fetch asteroids data:", data); 

            if (data) {
                setAsteroidsInfo(data); 
            }
        } catch (error) {
            console.error("Error fetching asteroids info", error); 
            setError(error.message); 
        }
    }

    return (
        <section className="bg-gradient-to-b from-slate-200 to-slate-300 p-6 rounded-xl shadow-lg max-w-6xl mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">Get Asteroids Info!</h1>
            <form className="asteroidsForm" onSubmit={handleClick}>
                <div className="flex gap-6 mb-6">
                    <div className="flex-1">
                        <label htmlFor="start_date" className="block text-lg font-medium">Start Date:</label>
                        <input 
                            type="date" 
                            id="start_date" 
                            name="start_date" 
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            placeholder="Enter Start Date"
                            required
                            className="w-full p-3 border-2 border-gray-300 rounded-xl bg-slate-800 text-white"    
                        ></input>
                    </div>
                    <div className="flex-1">
                        <label htmlFor="end_date" className="block text-lg font-medium">End Date:</label>
                        <input 
                            type="date" 
                            id="end_date" 
                            name="end_date" 
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            placeholder="Enter End Date"
                            required
                            className="w-full p-3 border-2 border-gray-300 rounded-xl bg-slate-800 text-white"    
                        ></input>
                    </div>
                </div>
                <button type="submit" className="w-full p-3 bg-slate-600 text-white rounded-xl mt-4 hover:bg-slate-800">Search</button>
            </form>

            {error && <p className="text-red-500 text-center mt-4">Error: {error}</p>}

            {/* TODO: Add the results of the search here */}

        </section>
    ); 
}

export default AsteroidsComponent; 