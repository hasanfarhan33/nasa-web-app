// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path = "/" element = {<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
