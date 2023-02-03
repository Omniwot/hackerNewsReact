import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import './App.css';

import SearchPage from './components/SearchPage/SearchPage';
import StoriesPage from './components/StoriesPage/StoriesPage';
import TopBar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<Navigate to="/stories" replace />} />
      </Routes>
    </div>
  );
}

export default App;
