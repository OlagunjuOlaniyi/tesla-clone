import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ModelS,
  ModelY,
  Model3,
  ModelX,
  SolarPanel,
  SolarRoof,
  NoPage,
} from "../src/pages/Pages";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<ModelS />} />
          <Route path="/modely" element={<ModelY />} />
          <Route path="/modelx" element={<ModelX />} />
          <Route path="/model3" element={<Model3 />} />
          <Route path="/solar-roof" element={<SolarRoof />} />
          <Route path="/solar-panel" element={<SolarPanel />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
