import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddBox from './pages/AddBox';
import BoxList from './pages/BoxList';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<AddBox />} />
        <Route path="/boxes" element={<BoxList />} />
      </Routes>
    </div>
  );
}
