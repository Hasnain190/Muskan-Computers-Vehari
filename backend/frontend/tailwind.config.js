// /** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#008ECC",
				lightBlue: "#F3F9FB",
				white: "#fff",
				black: "#000",
				backgroundImage: "#F5F5F5",
			},
			gridTemplateRows: {
				"[auto,auto,1fr]": "auto auto 1fr",
			},
		},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};
