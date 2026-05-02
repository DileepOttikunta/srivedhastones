import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import MarbelStudio from "./MarbelStudio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />} />
        <Route path="/studio" element={<MarbelStudio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;