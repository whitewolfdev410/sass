import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#8528C8",
		},
		secondary: {
			main: "#22215B",
		},
		info: {
			main: "#1d4ed8",
		},
		error: {
			main: "#A80000",
		},
		success: {
			main: "#087B2F",
		},
		darkgrey: {
			main: "#A9A5A5",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 768,
			md: 1024,
			lg: 1280,
			xl: 1440,
		},
	},
	typography: {
		fontFamily: "Poppins",
		h1: {
			fontSize: 30,
			fontWeight: 700,
			lineHeight: "43.05px",
		},
		h2: {
			fontSize: 20,
			fontWeight: 700,
		},
		h3: {
			fontSize: 15,
			fontWeight: 700,
		},
		h4: {
			fontSize: 14,
		},
		body1: {
			fontSize: 16,
		},
		h5: {
			fontSize: 12,
		},
		h6: {
			fontSize: 10,
		},
		body2: {
			fontSize: 16,
		},

		button: {
			fontSize: 16,
			fontWeight: 600,
			textTransform: "none",
		},
		caption: {
			fontSize: 14,
		},
		overline: {
			fontSize: 12,
			fontWeight: 500,
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "text" },
					style: { color: "black" },
				},
				{
					props: { size: "large" },
					style: {
						padding: "16px 46px",
						minWidth: "155px",
					},
				},
				{
					props: { size: "medium" },
					style: {
						padding: "7px 23px",
					},
				},
			],
		},
	},
});

export default theme;
