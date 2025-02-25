const FooterComponent = () => {
    return (
        <footer className="bg-slate-800 text-white py-6 shadow-md">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                {/* Data Source Section */}
                <div className="flex gap-6 text-lg mb-4 md:mb-0">
                    <p className="text-sm">
                        Data Source:{" "}
                        <a href="https://api.nasa.gov/" target="_blank" className="text-slate-400 hover:text-yellow-400 ml-2">
                            NASA Open APIs
                        </a>
                    </p>
                </div>

                {/* Developer Info Section */}
                <div className="text-sm flex flex-col md:flex-row justify-evenly items-center gap-6 px-10">
                    <p>Developed By: <span className="font-bold">Farhan Hasan</span></p>
                    <div className="flex gap-6 sm:gap-4 mt-4 md:mt-0">
                        <a href="https://github.com/hasanfarhan33/nasa-web-app" target="_blank" className="hover:text-yellow-400">
                            Github
                        </a>
                        <a href="https://www.linkedin.com/in/farhan-hasan-32baa1176/" target="_blank" className="hover:text-yellow-400">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
