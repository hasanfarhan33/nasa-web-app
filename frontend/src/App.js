// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import HeaderComponent from './components/HeaderComponent';

// Pages
import HomePage from './pages/HomePage';
import MarsPage from './pages/MarsPage';


function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/mars" element = {<MarsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
