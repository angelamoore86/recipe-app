import './App.css';
import RecipeList from './pages/Recipes';
import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AddRecipeForm from './pages/AddRecipeForm';

export function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <NavBar />
      <div id="page-body">
    <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/form" element={<AddRecipeForm />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
      </div>
    </div>  
    </BrowserRouter>
    
  ); 
}

export default App;
