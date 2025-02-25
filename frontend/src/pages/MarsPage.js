import MarsWeatherComponent from "../components/MarsWeatherComponent";
import MarsLogo from '../assets/mars-logo.png';
import MarsPhotosComponent from "../components/MarsPhotosComponent";

const MarsPage = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-300 text-slate-800 p-6">
            <section className="marsFactsContainer">
                <div className="flex items-center justify-center mb-8 gap-4">
                    <img src={MarsLogo} alt="Mars Logo" className="w-24 h-24 object-contain" />
                    <h1 className="text-4xl font-bold text-slate-800 inline-flex items-center">Mars</h1>
                </div>
                
                <div className="bg-gradient-to-b from-gray-50 to-gray-200 shadow-lg border border-gray-200 rounded-xl p-6 sm:p-12 mx-auto max-w-6xl mt-10">
                    <h3 className="text-3xl font-bold mb-6 text-center">Fun Facts</h3>
                    <ul className="text-xl font-semibold list-disc">
                        <li className="py-2">Mars was named by the ancient Romans for their god of war because its reddish color was reminiscent of blood. Other civilizations also named the planet for this attribute- for example, the Egyptians called it "Her Desher," meaning "the red one."</li>
                        <li className="py-2">Mars is about half the size of Earth, with a radius of 2,106 miles (3,390 kilometers).</li>
                        <li className="py-2">Martian days are called sols-short for "solar day". A year on Mars lasts 669.6 sols, which is the same as 687 Earth days.</li>
                        <li className="py-2">Mars has two small moons, Phobos and Deimos, that may be captured asteroids. They're potato-shaped because they have too little mass for gravity to make them spherical.</li>
                        <li className="py-2">Mars has the largest volcano in the solar system, Olympus Mons, which is about 13.6 miles (22 kilometers) high. It's about two and a half times the height of Mount Everest, which is the tallest mountain on Earth.</li>
                    </ul>
                </div>
            </section>

            {/* Weather and Photos components */}
            <div className="mt-10">
                <MarsWeatherComponent />
                <MarsPhotosComponent />
            </div>
        </main>
    );
}

export default MarsPage;
