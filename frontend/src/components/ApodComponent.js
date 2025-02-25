import { useEffect, useState } from 'react'; 
import fetchAPOD from '../services/nasaApodService_frontend';

const ApodComponent = () => {
    const [apod, setApod] = useState(null); 
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        const getData = async () => {
            
            setLoading(true); 

            try {
                console.log("Fetching APOD...");
                const data = await fetchAPOD(); 
                console.log("Fetched Data: ", data); 
                setApod(data);
            }
            catch (error) {
                setError(error.message); 
            } finally {
                setLoading(false); 
            }
        };

        getData(); 
    }, []); 

    if (loading) {
        return (
            <div className='flex justify-center items-center flex-col mt-10'>
                <div className='animate-spin h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full'></div>
                <p className='text-slate-800 mt-8'>Loading</p>
            </div>
        ); 
    }

    if (error) return <p className='text-red-600 text-center'>{error}</p>;

    if (!apod) return <p className='text-center text-gray-700'>No data found!</p>;

    // If the media type is an image
    if (apod.media_type === "image") {
        return (
            <section className="bg-gradient-to-b from-gray-50 to-gray-300 shadow-lg border border-gray-200 rounded-xl p-8 mx-auto max-w-3xl mt-10">
                <h3 className="text-3xl font-bold text-slate-800 text-center drop-shadow-lg mb-6">Image of the day</h3>
                <figure className="flex flex-col items-center">
                    <img src={apod.url} alt={apod.title} className="w-full max-w-3xl rounded-lg shadow-sm"/>
                    <figcaption className="mt-5 text-lg font-semibold text-gray-800 text-center">{apod.title}</figcaption>
                </figure>
            </section>
        );
    } 
    // If it's a video (iframe)
    else if (apod.media_type === "video") {
        return (
            <section className="bg-gradient-to-b from-gray-50 to-gray-300 shadow-lg border border-gray-200 rounded-xl p-8 mx-auto max-w-3xl mt-10">
                <h3 className="text-3xl font-extrabold text-slate-800 text-center drop-shadow-lg mb-6">Video of the day</h3>
                <figure className="flex flex-col items-center">
                    <iframe 
                        src={`${apod.url}?autoplay=1&mute=1&loop=1`} 
                        allow="autoplay; encrypted-media" 
                        title={apod.title} 
                        width="100%" 
                        height="500px"
                        className="w-full max-w-3xl h-72 sm:h-96 max-w-2xl rounded-lg shadow-md"
                    ></iframe>
                    <figcaption className="mt-5 text-lg font-semibold text-gray-800 text-center">{apod.title}</figcaption>
                </figure>
            </section>
        );
    } 
    else {
        return (
            <section>
                <h3>Unsupported media type</h3>
                <p>The media type is neither an image nor a video.</p>
            </section>
        );
    }
};

export default ApodComponent;
