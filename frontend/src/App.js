import './App.css';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AddRecipePage from './pages/AddRecipePage';

export function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <NavBar />
      <div id="page-body">
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<AddRecipePage />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
      </div>
    </div>  
    </BrowserRouter>
    
  );
}

export default App;