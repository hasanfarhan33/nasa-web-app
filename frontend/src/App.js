// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

// Pages
import HomePage from './pages/HomePage';
import MarsPage from './pages/MarsPage';
import AsteroidsPage from "./pages/AsteroidsPage"; 


function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/mars" element = {<MarsPage />} />
        <Route path='/asteroids' element = {<AsteroidsPage></AsteroidsPage>}></Route>
      </Routes>
      <FooterComponent></FooterComponent>
    </Router>
  );
}

export default App;
