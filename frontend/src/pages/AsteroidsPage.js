import AsteroidsComponent from "../components/AsteroidsComponent";
import AsteroidsLogo from "../assets/asteroid-logo.png"; 

const AsteroidsPage = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-300 text-slate-800 p-6">
            <section className="headerSection">
                <div className="flex items-center justify-center mb-8 gap-4">
                    <img src={AsteroidsLogo} alt="Asteroids Logo" className="w-24 h-24 objects-contain"></img>
                    <h1 className="text-4xl font-bold text-slate-800 inline-flex items-center">Asteroids</h1>
                </div>
            </section>
            <AsteroidsComponent></AsteroidsComponent>
        </main>
    ); 
}

export default AsteroidsPage; 