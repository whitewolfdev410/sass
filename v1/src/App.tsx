import React from "react";
import { Route, Routes } from "react-router-dom";
import ProgramProvider from "./pages/programProvider";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/provider/*" element={<ProgramProvider />} />
      {/* Temporary Index page */}
      <Route index element={<ProgramProvider />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
