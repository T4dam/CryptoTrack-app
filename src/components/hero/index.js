import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinConteiner from './coin-conteiner';
import './hero.css';
import { ImFire } from 'react-icons/im';
import { AiFillStar } from 'react-icons/ai';

const Hero = () => {
	const [coin, setCoin] = useState([]);

	const url = 'https://api.coingecko.com/api/v3/search/trending';

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setCoin(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div className="container flex">
			<CoinConteiner
				coins={coin}
				title={'Trending'}
				number={4}
				startnumber={0}
				icon={<ImFire />}
			></CoinConteiner>
			<CoinConteiner
				coins={coin}
				title={'Todays Gainers'}
				number={7}
				startnumber={3}
				icon={<AiFillStar />}
			></CoinConteiner>
		</div>
	);
};

export default Hero;
