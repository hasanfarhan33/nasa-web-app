// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import HeaderComponent from './components/HeaderComponent';

// Pages
import HomePage from './pages/HomePage';
import MarsPage from './pages/MarsPage';
import FooterComponent from './components/FooterComponent';


function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/mars" element = {<MarsPage />} />
      </Routes>
      <FooterComponent></FooterComponent>
    </Router>
  );
}

export default App;
