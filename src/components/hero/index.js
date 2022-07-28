import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Trending from './trending';
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
		<div className="container">
			<Trending coins={coin}></Trending>
		</div>
	);
};

export default Hero;
