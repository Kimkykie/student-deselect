import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import NewStudent from "../pages/NewStudent";
import Navigation from "./Navigation";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new" element={<NewStudent />} />
      </Routes>
    </div>
  );
}

export default App;
