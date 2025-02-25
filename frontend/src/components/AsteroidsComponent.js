import { useState } from "react";
import fetchAsteroids from "../services/nasaAsteroidsService_frontend";

const AsteroidsComponent = () => {
    const [asteroidsInfo, setAsteroidsInfo] = useState(null); 
    const [startDate, setStartDate] = useState(""); 
    const [endDate, setEndDate] = useState(""); 
    const [error, setError] = useState(null); 

    const handleClick = async (e) => {
        e.preventDefault(); 

        // If end date is before start date
        if(new Date(endDate) < new Date(startDate)) {
            setError("End date cannot be before the start date"); 
            return; 
        }

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
                <div className="flex flex-col sm:flex-row gap-6 mb-6">
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
                        />
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
                        />
                    </div>
                </div>
                <button type="submit" className="w-full p-3 bg-slate-600 text-white rounded-xl mt-4 hover:bg-slate-800">Search</button>
            </form>

            {error && <p className="text-red-500 text-center mt-4">Error: {error}</p>}

            {asteroidsInfo && (
                <div className="mt-8">
                    <p className="text-lg text-center mb-8">There were a total of <span className="font-bold">{asteroidsInfo.element_count}</span> asteroids 
                                                            between <span className="font-bold">{startDate}</span> and <span className="font-bold">{endDate}</span>.</p>
                    {Object.keys(asteroidsInfo.asteroids_by_date).length > 0 ? (
                        Object.entries(asteroidsInfo.asteroids_by_date).map(([date, asteroids]) => (
                            <div key={date} className="mb-6">
                                <div className="dateContainer text-xl font-bold text-center mb-4">{date}</div>
                                <div className="tableHeaders hidden sm:grid grid-cols-4 gap-4 font-semibold mb-4">
                                    <p>Astreroid Name</p>
                                    <p>Miss Distance (kms)</p>
                                    <p>Diameter Min (m)</p>
                                    <p>Diameter Max (m)</p>
                                </div>
                                {asteroids.map((asteroid, index) => (
                                    <div key={index} className="mb-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-2 border-b">
                                            {/* Show in a list format on small screens */}
                                            <div className="sm:col-span-1">
                                                <p className="font-semibold sm:hidden">Asteroid Name:</p>
                                                <p>{asteroid.name}</p>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <p className="font-semibold sm:hidden">Miss Distance:</p>
                                                <p>{asteroid.miss_distance_km}</p>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <p className="font-semibold sm:hidden">Diameter Min (m):</p>
                                                <p>{asteroid.estimated_diameter_min_m}</p>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <p className="font-semibold sm:hidden">Diameter Max (m):</p>
                                                <p>{asteroid.estimated_diameter_max_m}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-lg">No asteroids info found.</p>
                    )}
                </div>
            )}

        </section>
    ); 
}

export default AsteroidsComponent;
