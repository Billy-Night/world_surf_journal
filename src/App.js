import MyProvider from "./context/MyProvider";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import SurfJournal from "./pages/SurfJournal";
import SurfLog from "./pages/SurfLog";
import Settings from "./pages/Settings";

function App() {
  return (
    <MyProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/surf/journal" element={<SurfJournal />} />
        <Route path="/surf/log" element={<SurfLog />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </MyProvider>
  );
}

export default App;
