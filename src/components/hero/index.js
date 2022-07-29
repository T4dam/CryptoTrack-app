import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinConteiner from './coin-conteiner';
import './hero.css';

const Hero = () => {
	const [coin, setCoin] = useState([]);
	console.log(coin);

	const url = 'https://api.coingecko.com/api/v3/search/trending';

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setCoin(res.data);
				console.log(res.data.coins);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div className="container flex">
			<CoinConteiner coins={coin} title={'Trending'} number={3}></CoinConteiner>
			<CoinConteiner
				coins={coin}
				title={'Todays Gainers'}
				number={3}
			></CoinConteiner>
		</div>
	);
};

export default Hero;
