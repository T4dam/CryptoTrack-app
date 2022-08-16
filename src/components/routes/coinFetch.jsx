import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import CoinDetailPage from './CoinDetailPage';
import coinGecko from '../../apis/coinGecko';
import Cryptochart from '../chart/cryptochart';

const CoinFetch = () => {
	const [coin, setCoin] = useState([]);
	const params = useParams();
	const [isLoading, setIsLoading] = useState(false);

	// const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

	const formatData = (data) => {
		return data.map((el) => {
			return {
				x: el[0],
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
				coinGecko.get(`/coins/${params.coinId}`, {
					params: {
						vs_currency: 'eur',
						id: coin,
					},
				}),
			]);

			setCoin({
				day: formatData(day.data.prices),
				week: formatData(week.data.prices),
				year: formatData(year.data.prices),
				detail: detail.data,
			});
			setIsLoading(false);
		};

		fetchData();
	}, []);

	const renderData = () => {
		if (isLoading) {
			return <div className="">Leading...</div>;
		}
		return (
			<>
				<CoinDetailPage coin={coin} />
				{/* <Cryptochart coin={coin} /> */}
			</>
		);
	};
	return renderData();
};

export default CoinFetch;
