const FooterComponent = () => {
    return(
        <footer className="bg-slate-800 text-white py-6 shadow-md"> 
            <div className="container mx-auto flex justify-between items-center px-6">
                <div className="flex gap-6 text-lg">
                    <p className="text-sm">Data Source: <a href="https://api.nasa.gov/" target="_blank" className="text-slate-400 hover:text-yellow-400">NASA Open APIs</a></p>
                </div>
                <div className="text-sm flex justify-evenly items-center gap-6 px-10">
                    <p>Developed By: <span className="font-bold">Farhan Hasan</span></p>
                    <a href="https://github.com/hasanfarhan33/nasa-web-app" target="_blank" className="hover:text-yellow-400">Github</a>
                    <a href="https://www.linkedin.com/in/farhan-hasan-32baa1176/" target="_blank" className="hover:text-yellow-400">LinkedIn</a>    
                </div>
            </div>
        </footer>
    );    
}

export default FooterComponent; 