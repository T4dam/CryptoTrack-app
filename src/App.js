import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './components/coins';
import Navbar from './components/navbar.js';
import { Routes, Route } from 'react-router-dom';
// import Coin from './components/routes/coin';
import CoinFetch from './components/routes/coinFetch';

function App() {
	const [coin, setCoin] = useState([]);

	const url =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=Eur&order=market_cap_desc&per_page=100&page=1&sparkline=false';

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				setCoin(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Coins coins={coin} />}></Route>
				<Route path="/coin" element={<CoinFetch />}>
					<Route path=":coinId" element={<CoinFetch />}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
