import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {Login} from "./pages/Login"
import {Register} from "./pages/Register"
import {Home} from "./pages/Home"
import {AddSkill} from "./pages/AddSkill"

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddSkill />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>  
      </Routes>  
    </Router>
  );
}

export default App;
