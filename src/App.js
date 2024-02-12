import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <h1>Blog App</h1>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
