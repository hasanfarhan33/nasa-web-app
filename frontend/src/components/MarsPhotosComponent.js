import { useState } from 'react'; 
import fetchMarsPhotos from "../services/nasaMarsPhotosService_frontend"; 

const MarsPhotosComponent = () => {
    const [marsPhotos, setMarsPhotos] = useState(null); 
    const [sol, setSol] = useState(""); 
    const [camera, setCamera] = useState("all"); 
    const [error, setError] = useState(null); 

    const handleClick = async (e) => {
        e.preventDefault(); // Prevents page reload

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
        }
    }

    return(
        <section className="bg-gradient-to-b from-slate-200 to-slate-300 p-6 rounded-xl shadow-lg max-w-6xl mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">Mars Photos</h1>
            
            <form className="photoForm" onSubmit={handleClick}>
                <div className="flex gap-6 mb-6">
                    <div className="flex-1">
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
                    <div className="flex-1">
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
                            <option value="pancam">PANCAM</option>
                            <option value="minites">MINITES</option>
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

            {error && <p className="text-red-500 text-center mt-4">Error: {error}</p>}

            {marsPhotos && (
                <div className="mt-8">
                    {marsPhotos.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
