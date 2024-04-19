import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchEnginePage from './Components/Pages/SearchEnginePage';
import VehicleDetailsPage from './Components/Pages/VehicleDetailsPage';
import CartPage from './Components/Pages/CartPage';
import CheckoutPage from './Components/Pages/CheckoutPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchEnginePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
