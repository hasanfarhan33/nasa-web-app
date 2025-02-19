import {useEffect, useState} from 'react'; 
import fetchMarsWeather from '../services/nasaMarsWeatherService_frontend';

const MarsWeatherComponent = () => {
    const [marsWeather, setMarsWeather] = useState(null); 
    const[error, setError] = useState(null); 

    useEffect(() => {
        const getData = async () => {
            try {
                console.log("Fetching Mars Weather..."); 
                const data = await fetchMarsWeather();
                console.log("Fetched Data: ", data);
                setMarsWeather(data); 
            }
            catch (error) {
                setError(error.message); 
            }
        }; 

        getData(); 
    }, []); 

    if (error) return <p className='text-red-600 text-center'>{error}</p>;
    if (!marsWeather) return <p className='text-center text-gray-700'>Loading...</p>;

    return (
        <section className="mt-10 bg-gradient-to-b from-gray-50 to-gray-300 shadow-lg border border-gray-200 rounded-xl p-8 mx-auto max-w-6xl">
            <h3 className="text-3xl font-bold mb-6 text-center">Mars Weather Report</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* TODO: Try adding a border transition for each sol div */}
                {marsWeather.map((sol, index) => (
                    <div key={index} className="flex flex-col items-center bg-slate-300 p-6 rounded-xl shadow-sm border-b-4 border-slate-800">
                        <h4 className="text-xl font-bold mb-2">Sol {sol["Current Sol"]}</h4>
                        <hr className='w-full border-t-2 border-slate-800 my-2'></hr>
                        <p className="text-lg font-semibold">Avg Temp: <span className="font-normal">{sol["Average Atmospheric Temperature"]} ℃</span></p>
                        <p className="text-lg font-semibold">High: <span className="font-normal">{sol["Max Temperature (Celcius)"]}°C</span></p>
                        <p className="text-lg font-semibold">Low: <span className="font-normal">{sol["Min Temperature (Celcius)"]}°C</span></p>
                        <p className="text-lg font-semibold">Wind Speed: <span className="font-normal">{sol["Average Wind Speed (m/s)"]} m/s</span></p>
                        <p className="text-lg font-semibold">Pressure: <span className="font-normal">{sol["Average Pressure (Pascals)"]} Pa</span></p>
                    </div>
                ))}
            </div>
        </section>
    ); 
}

export default MarsWeatherComponent; 