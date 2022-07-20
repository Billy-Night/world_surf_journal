import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import SurfJournal from "./pages/SurfJournal";
import SurfLog from "./pages/SurfLog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/log-in" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/surf-journal" element={<SurfJournal />} />
      <Route path="/SurfLog" element={<SurfLog />} />
    </Routes>
  );
}

export default App;
