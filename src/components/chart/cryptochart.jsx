import React, { useEffect, useRef } from 'react';
import useAxios from '../../apis/useAxios';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
	ScriptableContext,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
);

const Cryptochart = ({ coin }) => {
	console.log({ coin: coin });
	const { coinId } = useParams();
	const { response } = useAxios(
		`coins/${coinId}/market_chart?vs_currency=eur&days=365`,
	);
	console.log({ response: response });
	if (!response) {
		return (
			<div className="wrapper-container mt-8">
				<div>nera..</div>
			</div>
		);
	}

	const coinChartData = response.prices.map((value) => ({
		x: value[0],
		y: value[1].toFixed(2),
	}));
	// const { week } = coin;
	const options = {
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
	console.log({ coinChartData: coinChartData });

	// const data = {
	// 	labels: coinChartData.map((value) => moment(value.x).format('MMM DD')),
	// 	datasets: [
	// 		{
	// 			fill: true,
	// 			label: coinId + ' ' + 'price',
	// 			data: coinChartData.map((val) => val.y),
	// 			borderColor: 'rgb(50,205,50)',
	// 			backgroundColor: 'rgba(50,205,50, 0.5)',
	// 			pointRadius: 0,
	// 		},
	// 	],
	// };
	const data = {
		labels: coinChartData.map((value) => moment(value.x).format('MMM DD')),
		datasets: [
			{
				label: coinId + ' ' + 'price',
				data: coinChartData.map((val) => val.y),
				fill: 'start',
				backgroundColor: (ScriptableContext) => {
					const ctx = ScriptableContext.chart.ctx;
					const gradient = ctx.createLinearGradient(0, 0, 0, 300);
					gradient.addColorStop(0, 'rgba(152,251,152, .8)');
					gradient.addColorStop(1, 'rgba(152,251,152, 0)');
					return gradient;
				},
				borderColor: 'rgba(144,238,144, 1)',
				pointRadius: 0,
			},
		],
	};

	console.log(coin);
	return <Line options={options} data={data} />;
};

export default Cryptochart;
