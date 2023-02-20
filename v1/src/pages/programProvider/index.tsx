import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import InviteCoworker from "./auth/InviteCoworker";
import AllProgrammes from "./dashboard/AllProgrammes";
import ApplicationForm from "./dashboard/ApplicationForm";
import CreateProgram from "./dashboard/CreateProgram";
import Workflow from "./dashboard/Workflow";
import Preview from "./dashboard/Preview";
import SingleProgram from "./dashboard/SingleProgram";
import RouteSwitcher from "../../utils/routing/RouteSwitcher";
import { selectCurrentRole, useAppSelector } from "../../appStore";
import NotFound from "../NotFound";
import { ADMIN, PROVIDER } from "../../types";
import EmployerDashboard from "../employer/dashboard";

/**
 * Base Program Provider component.
 * Contains routes to all major pages in this section
 */

const ProgramProvider = () => {
	const currentRole = useAppSelector(selectCurrentRole);
	if (
		currentRole &&
		currentRole.persona !== PROVIDER &&
		currentRole.persona !== ADMIN
	) {
		return <Navigate to={`/${currentRole.persona.toLowerCase()}/dashboard`} />;
	}
	return (
		<Routes>
			<Route
				index
				element={<Navigate to="/provider/signup" />}
			/>
			<Route
				path="/signup"
				element={<RouteSwitcher component={Signup} />}
			/>
			<Route
				path="/invite-coworker"
				element={
					<RouteSwitcher
						requireLogin={true}
						component={InviteCoworker}
					/>
				}
			/>
			<Route path="/dashboard">
				<Route
					index
					element={
						<RouteSwitcher
							requireLogin={true}
							component={AllProgrammes}
						/>
					}
				/>
				<Route
					element={
						<RouteSwitcher
							requireLogin={true}
							component={CreateProgram}
						/>
					}
					path="create-program/:programId?"
				/>
				<Route
					element={
						<RouteSwitcher
							requireLogin={true}
							component={ApplicationForm}
						/>
					}
					path="application-form/:programId"
				/>
				<Route
					element={
						<RouteSwitcher
							requireLogin={true}
							component={Workflow}
						/>
					}
					path="workflow/:programId"
				/>
				<Route
					element={
						<RouteSwitcher
							requireLogin={true}
							component={Preview}
						/>
					}
					path="preview/:programId"
				/>
				<Route
					element={
						<RouteSwitcher
							requireLogin={true}
							component={SingleProgram}
						/>
					}
					path="program/:id"
				/>
			</Route>
			<Route
				path="*"
				element={<NotFound />}
			/>
		</Routes>
	);
};

export default ProgramProvider;
