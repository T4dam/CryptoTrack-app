import React, { useEffect, useRef } from 'react';
import useAxios from '../../apis/useAxios';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import './../coins.css';
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

const Cryptochartsmall = ({ item }) => {
	console.log(item);
	const { coinId } = useParams();
	const { response } = useAxios(
		`coins/${item}/market_chart?vs_currency=eur&days=7`,
	);
	if (!response) {
		return (
			<div className="wrapper-container mt-8">
				<div className="img-symbol">
					<div class="loader">
						<div class="duo duo1">
							<div class="dot dot-a"></div>
							<div class="dot dot-b"></div>
						</div>
						<div class="duo duo2">
							<div class="dot dot-a"></div>
							<div class="dot dot-b"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	const coinChartData = response.prices.map((value) => ({
		x: value[0],
		y: value[1].toFixed(2),
	}));
	// const { week } = coin;
	const options = {
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
				borderWidth: 2,
				backgroundColor: 'transparent',
				// backgroundColor: (ScriptableContext) => {
				// 	const ctx = ScriptableContext.chart.ctx;
				// 	const gradient = ctx.createLinearGradient(0, 0, 0, 300);
				// 	gradient.addColorStop(0, 'rgba(152,251,152, .8)');
				// 	gradient.addColorStop(1, 'rgba(152,251,152, 0)');
				// 	return gradient;
				// },
				borderColor: 'rgba(144,238,144, 1)',
				pointRadius: 0,
			},
		],
	};

	return (
		<div className="sizefix">
			<Line options={options} data={data} />
		</div>
	);
};

export default Cryptochartsmall;
