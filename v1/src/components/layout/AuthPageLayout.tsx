import "../../styles/auth.css";
import Helmet from "react-helmet";
import { Logo } from "../";
import { Box, Typography } from "@mui/material";

type Props = {
	children: React.ReactNode;
	title: string;
	logo?: boolean;
};

/**
 * Layout for auth (login and signup) pages used through out the site.
 * Includes a background image and a white container (Paper) to be filled
 * @param children - ReactNode : content of the Paper
 * @param title - string : Title to be displayed in the title tag of the page
 * @param logo - boolean, optional : determines if brand logo is shown, defaults to false
 */

const AuthPageLayout = (props: Props) => {
	return (
		<>
			<Helmet>
				<title>{props.title}</title>
			</Helmet>
			<section className="auth-wrapper">
				{props.logo ? <Logo /> : <div></div>}
				<Box className="auth-paper" sx={{ mt: 2 }}>
					{props.children}
				</Box>
				<Typography fontSize={9} sx={{ mt: 2 }}>
					Copyright(C) 2023, Recruitable and/or its affiliates.
				</Typography>
			</section>
		</>
	);
};

export default AuthPageLayout;
