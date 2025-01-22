// tailwind.config.js
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}", // Adjust paths to your source files
		"node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("flowbite/plugin")],
};
