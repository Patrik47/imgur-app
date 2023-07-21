import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultApp from './components/DefaultApp';
import Gallery from './components/gallery/Gallery';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DefaultApp />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
