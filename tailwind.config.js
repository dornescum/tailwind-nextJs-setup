module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors:{
				primary:"#cccccc",
				secondary:{
					100:"#f1f1f1",
					200:"#f9f9f9",
				}
			},
			fontFamily:{
				body:['Dongle']
			}
		},
	},
	plugins: [
		function ({addComponents}) {
			const buttons = {
				".btn": {
					padding: "5rem 1rem",
					borderRadius: ".25rem",
					fontWeight: "600"
				},
				".btn-primary": {
					backgroundColor: "#3490dc",
					color: '#fff',
					"&:hover": {
						backgroundColor: "#2779bd"
					}
				},
				".btn-secondary": {
					backgroundColor: "#9dea66",
					color: '#fff',
					"&:hover": {
						backgroundColor: "#3d7313"
					}
				},

			};

			addComponents(buttons)
		}
	],
};
