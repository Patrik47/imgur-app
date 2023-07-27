import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/main-app/MainPage';
import Gallery from './components/gallery/Gallery';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery/:postID" element={<Gallery />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
