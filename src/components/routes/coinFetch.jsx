import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import CoinDetailPage from './coin';
import coinGecko from '../../apis/coinGecko';

const CoinFetch = () => {
	const [coin, setCoin] = useState([]);
	const params = useParams();
	const [isLoading, setIsLoading] = useState(false);

	// const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

	const formatData = (data) => {
		return data.map((el) => {
			return {
				t: el[0],
				y: el[1].toFixed(2),
			};
		});
	};

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const [day, week, year, detail] = await Promise.all([
				coinGecko.get(`/coins/${params.coinId}/market_chart/`, {
					params: {
						vs_currency: 'eur',
						days: '1',
					},
				}),
				coinGecko.get(`/coins/${params.coinId}/market_chart/`, {
					params: {
						vs_currency: 'eur',
						days: '7',
					},
				}),
				coinGecko.get(`/coins/${params.coinId}/market_chart/`, {
					params: {
						vs_currency: 'eur',
						days: '365',
					},
				}),
				coinGecko.get(`/coins/${params.coinId}`),
			]);

			setCoin({
				day: formatData(day.data.prices),
				week: formatData(week.data.prices),
				year: formatData(year.data.prices),
				detail: detail.data,
			});
			setIsLoading(false);
			console.log(coin);
		};

		fetchData();
	}, []);

	const renderData = () => {
		if (isLoading) {
			return <div className="">Leading...</div>;
		}
		return <CoinDetailPage coin={coin} />;
	};
	return renderData();
};

export default CoinFetch;
