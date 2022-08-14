export const smallChartOptions = {
	maintainAspectRatio: false,
	aspectRatio: (1, 2),
	responsive: true,

	plugins: {
		legend: {
			display: false,
		},
		tooltip: {
			enabled: false,
		},
	},
	scales: {
		x: {
			grid: {
				display: false,
				drawBorder: false,
			},

			// Jeigu nurima spleti x asies label
			ticks: {
				display: false,
			},
		},
		y: {
			ticks: {
				callback: function (value) {
					return value + ' ' + '€';
				},
				display: false,
			},
			grid: {
				display: false,
				drawBorder: false,
			},
		},
	},
};
export const bigChartOptions = {
	responsive: true,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		x: {
			grid: {
				display: false,
			},
			// Jeigu nurima spleti x asies label
			// ticks: {
			// 	display: false,
			// },
		},
		y: {
			ticks: {
				callback: function (value) {
					return value + ' ' + '€';
				},
			},
			grid: {
				display: false,
			},
		},
	},
};
