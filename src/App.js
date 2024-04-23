import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Register from './Components/Utils/Register';
import Login from './Components/Utils/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
