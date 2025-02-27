import { useState } from 'react'; 
import fetchMarsPhotos from "../services/nasaMarsPhotosService_frontend"; 

const MarsPhotosComponent = () => {
    const [marsPhotos, setMarsPhotos] = useState(null); 
    const [sol, setSol] = useState(""); 
    const [camera, setCamera] = useState("all"); 
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(false); 

    const handleClick = async (e) => {
        e.preventDefault(); // Prevents page reload
        setLoading(true); 

        try {
            console.log("Fetching mars photos with sol:", sol, "camera:", camera); 
            const data = await fetchMarsPhotos(sol, camera);
            console.log("Fetched data: ", data); 

            if (data && data.photos && data.photos.length > 0) {
                setMarsPhotos(data.photos);
            }
        } catch (error) {
            console.error("Error fetching mars photos:", error); 
            setError(error.message); 
        } finally {
            setLoading(false); 
        }
    }

    return (
        <section className="bg-gradient-to-b from-slate-200 to-slate-300 p-6 rounded-xl shadow-lg max-w-6xl mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">Mars Photos</h1>

            <div className='photosIntroContainer mb-10 text-xl font-semibold p-4'>
                <p className='mb-8'>Access photos from the "Mars Rover Photos" API. Enter a positive integer for Sol and choose one of the following cameras.</p>
                <ol className='list-decimal pl-6'>
                    <li><span className='font-bold'>FHAZ:</span> Front Hazard Avoidance Camera</li>
                    <li><span className='font-bold'>RHAZ:</span> Rear Hazard Avoidance Camera</li>
                    <li><span className='font-bold'>MAST:</span> Mast Camera</li>
                    <li><span className='font-bold'>CHEMCAM:</span> Chemistry and Camera Complex</li>
                    <li><span className='font-bold'>MAHLI:</span> Mars Hands Lens Imager</li>
                    <li><span className='font-bold'>MARDI:</span> Mars Descent Imager</li>
                    <li><span className='font-bold'>NAVCAM:</span> Navigation Camera</li>
                </ol>
            </div>
            
            <form className="photoForm" onSubmit={handleClick}>
                <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex-1 min-w-[220px]">
                        <label htmlFor='sol' className="block text-lg font-medium">Sol:</label>
                        <input 
                            type='number' 
                            id='sol' 
                            name='sol' 
                            value={sol} 
                            onChange={(e) => setSol(e.target.value)} 
                            placeholder="Enter Sol" 
                            required 
                            className="w-full p-3 border-2 border-gray-300 rounded-xl bg-slate-800 text-white"
                        />
                    </div>
                    <div className="flex-1 min-w-[220px]">
                        <label htmlFor="cameras" className="block text-lg font-medium">Camera:</label>
                        <select 
                            name='cameras' 
                            value={camera} 
                            onChange={(e) => setCamera(e.target.value)} 
                            className="w-full p-3 border-2 border-gray-300 rounded-xl bg-slate-800 text-white"
                        >
                            <option value="all">All the cameras</option>
                            <option value="fhaz">FHAZ</option>
                            <option value="rhaz">RHAZ</option>
                            <option value="mast">MAST</option>
                            <option value="chemcam">CHEMCAM</option>
                            <option value="mahli">MAHLI</option>
                            <option value="mardi">MARDI</option>
                            <option value="navcam">NAVCAM</option>
                        </select>
                    </div>
                </div>
                <button 
                    type='submit' 
                    className="w-full p-3 bg-slate-600 text-white rounded-xl mt-4 hover:bg-slate-800"
                >
                    Search
                </button>
            </form>

            {/* Loading animation */}
            {loading && (
                <div className='flex justify-center items-center flex-col mt-10'>
                    <div className='animate-spin h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full'></div>
                    <p className='text-slate-800 mt-8'>Loading</p>
                </div>)}

            {error && <p className="text-red-500 text-center mt-4">Error: {error}</p>}

            {marsPhotos && (
                <div className="mt-8">
                    {marsPhotos.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {marsPhotos.map((photo) => (
                                <img key={photo.id} src={photo.img_src} alt="Mars" className="w-full h-auto rounded-lg shadow-lg" />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-lg">No photos found for this Sol and camera.</p>
                    )}
                </div>
            )}
        </section>
    ); 
}

export default MarsPhotosComponent;
