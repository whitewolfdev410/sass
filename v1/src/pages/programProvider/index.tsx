import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import AllProgrammes from "./dashboard/AllProgrammes";
import ApplicationForm from "./dashboard/ApplicationForm";
import CreateProgram from "./dashboard/CreateProgram";
import Workflow from "./dashboard/Workflow";
import Preview from "./dashboard/Preview";
import SingleProgram from "./dashboard/SingleProgram";

/**
 * Base Program Provider component.
 * Contains routes to all major pages in this section
 */

const ProgramProvider = () => {
	return (
		<Routes>
			<Route index element={<Login />} />
			<Route path="/signin" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/dashboard">
				<Route index element={<AllProgrammes />} />
				<Route element={<CreateProgram />} path="create-program" />
				<Route element={<ApplicationForm />} path="application-form" />
				<Route element={<Workflow />} path="workflow" />
				<Route element={<Preview />} path="preview" />
				<Route element={<SingleProgram />} path="program/:id" />
			</Route>
		</Routes>
	);
};

export default ProgramProvider;
