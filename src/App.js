import { Route, Routes } from 'react-router-dom';
import './App.css';

// importing pages
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';
import SettingPage from './pages/SettingPage';

//importing components
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <h1>Blog App</h1>
      <NavBar/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/setting' element={<SettingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
