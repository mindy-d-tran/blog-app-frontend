// importing hooks
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// importing style
import "./App.css";

// importing context
import { UserContext } from "./context/UserContext";

// importing pages
import MainPage from "./pages/MainPage";
import SettingPage from "./pages/SettingPage";

//importing components
import NavBar from "./components/NavBar";
import PostPage from "./pages/PostPage";

function App() {
  // creeating state for user
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/settings" element={<SettingPage />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
