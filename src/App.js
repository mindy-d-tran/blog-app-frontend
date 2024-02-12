// importing hooks
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// importing style
import "./App.css";

// importing context
import { UserContext } from "./context/UserContext";

// importing pages
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import SettingPage from "./pages/SettingPage";

//importing components
import NavBar from "./components/NavBar";

function App() {
  // creeating state for user
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
