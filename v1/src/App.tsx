import React from "react";
import { Route, Routes } from "react-router-dom";
import ProgramProvider from "./pages/programProvider";
import Candidates from "./pages/candidates";
import NotFound from "./pages/NotFound";
import Doc from "./pages/Documentation";

import "./styles/root.css";

function App() {
	return (
		<Routes>
			<Route path="/provider/*" element={<ProgramProvider />} />
			<Route path="/candidate/*" element={<Candidates />} />
			<Route path="/doc" element={<Doc />} />
			{/* Temporary Index page */}
			<Route index element={<ProgramProvider />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
